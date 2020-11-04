
<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />
    <div>
      <h1>课程添加</h1>
      <div>
        <label for="">课程名称：</label>
        <input type="text" v-model="courseInfo.name" />
      </div>
      <div>
        <label for="">课程价格：</label>
        <input type="text" v-model="courseInfo.price" />
      </div>
      <button @click="addToList">添加到课程列表</button>
    </div>
    <hr />
    <div>
      <h1>课程列表</h1>
      <table>
        <tr>
          <td>课程名称</td>
          <td>课程价格</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in courseList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="addToCart(index)">添加到购物车</button>
          </td>
        </tr>
      </table>
    </div>
    <hr />
    <div>
      <cart :courseItem="courseItem" @removeItem="remove(index)"></cart>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  components: {
    Cart,
  },
  data() {
    return {
      title: "购物车案例",
      courseItem: [],
      courseInfo: {
        name: "",
        price: '',
      },
      courseList: [
        {
          id: 1,
          name: "吹牛逼架构师课程",
          price: 9999,
        },
        {
          id: 2,
          name: "划水摸鱼架构师课程",
          price: 8888,
        },
      ],
    };
  },
  methods: {
    remove(index){
      this.courseItem.splice(index,1)
    },
    addToCart(index) {
      let item = this.courseList[index];
      let hasCheck = this.courseItem.find((x) => x.id === item.id);
      if (hasCheck) {
        hasCheck.num += 1;
      } else {
        this.courseItem.push({
          ...item,
          num: 1,
          isActive: true,
        });
      }
    },
    addToList() {
      this.courseList.push(this.courseInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

