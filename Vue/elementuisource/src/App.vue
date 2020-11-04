<template>
  <div>
    <C-form :model="model" :rules="rules">
      <C-Form-Item label="用户名" prop="username">
      <c-input v-model="model.username"></c-input>
    </C-Form-Item>
    <C-Form-Item label="密码" prop="password">
      <c-input v-model="model.password"></c-input>
    </C-Form-Item>
    </C-form>
    <hr>
    <h3>element表单实现</h3>
    <el-form :model="model" :rules="rules" ref="loginForm">
      <el-form-item label="用户名：" prop="username">
        <el-input type="text" v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="subForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import CInput from '@/components/Input.vue'
import CFormItem from '@/components/FormItem.vue'
import CForm from '@/components/Form.vue'
export default {
  components: {
    CInput,
    CFormItem,
    CForm

  },
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '用户不为空' }, { min: 6, max: 10, message: '字符长度6-10' }],
        password: [{ required: true, message: '密码不为空' }]
      }
    }
  },
  methods: {
    subForm (form) {
      // this.$refs[form].validate(valid => {
      //   if (valid) {
      //     console.log('object')
      //   } else {
      //     console.log('object123')
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
