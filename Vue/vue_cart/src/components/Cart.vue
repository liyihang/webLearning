<template>
  <div>
    <h1>购物车</h1>
    <table>
      <tr>
        <td>勾选</td>
        <td>课程名称</td>
        <td>课程价格</td>
        <td>数量</td>
        <td>总价</td>
      </tr>
      <tr v-for="(item, index) in courseItem" :key="item.id">
        <td>
          <input type="checkbox" name="" v-model="item.isActive" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="minus(index)">-</button>
          {{ item.num }}
          <button @click="add(index)">+</button>
        </td>
        <td>{{ item.price * item.num }}</td>
      </tr>
      <tr>
        <td colspan="2">{{ isActiveCourse}} / {{allActiveCourse }}</td>
        <td colspan="2">{{ allPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["courseItem"],
  methods: {
    minus(index) {
      let number = this.courseItem[index].num;
      if (number > 1) {
        this.courseItem[index].num -= 1;
      } else {
        if (window.confirm("确认删除数据吗")) {
          this.$emit("removeItem", index);
        }
      }
    },
    add(index) {
      this.courseItem[index].num += 1;
    },
  },
  computed: {
    isActiveCourse() {
      return this.courseItem.filter((item) => item.isActive).length;
    },
    allActiveCourse() {
      return this.courseItem.length;
    },
    allPrice() {
      let sum = 0;
      this.courseItem.forEach((item) => {
        if (item.isActive) {
          sum += item.num * item.price;
        }
      });
      return sum;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>