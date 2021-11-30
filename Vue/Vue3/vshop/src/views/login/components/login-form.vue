<template>
  <div class="account-box">
    <div class="toggle">
      <a @click="isMsgLogin = false" href="javascript:;" v-if="isMsgLogin">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a @click="isMsgLogin = true" href="javascript:;" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <Form
      ref="target"
      class="form"
      :validation-schema="mySchema"
      v-slot="{ errors }"
      autocomplete="off"
    >
      <template v-if="!isMsgLogin">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <Field
              :class="{ error: errors.account }"
              type="text"
              name="account"
              v-model="form.account"
              placeholder="请输入用户名或手机号"
            />
          </div>
          <div v-if="errors.account" class="error">
            <i class="iconfont icon-warning" />{{ errors.account }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <Field
              :class="{ error: errors.password }"
              type="password"
              name="password"
              placeholder="请输入密码"
            />
          </div>
          <div v-if="errors.password" class="error">
            <i class="iconfont icon-warning" />{{ errors.password }}
          </div>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <Field
              :class="{ error: errors.phone }"
              type="text"
              name="mobile"
              placeholder="请输入手机号"
            />
          </div>
          <div v-if="errors.mobile" class="error">
            <i class="iconfont icon-warning" />{{ errors.mobile }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <Field
              :class="{ error: errors.code }"
              type="password"
              name="code"
              placeholder="请输入验证码"
            />
            <span class="code">发送验证码</span>
          </div>
          <div v-if="errors.code" class="error">
            <i class="iconfont icon-warning" />{{ errors.code }}
          </div>
        </div>
      </template>
      <div class="form-item">
        <div class="agree">
          <Checkbox v-model="form.isAgree" />
          <span>我已同意</span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
      </div>
      <a @click="submit()" href="javascript:;" class="btn">登录</a>
    </Form>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
import { Form, Field } from 'vee-validate'
import schema from '@/utils/vee-validate-schema'
import { userAccountLogin } from '@/api/user'
import Message from '@/components/library/message'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'LoginForm',
  components: {
    Form,
    Field
  },
  setup () {
    const isMsgLogin = ref(false)
    // 表单信息
    const form = reactive({
      isAgree: true,
      account: null,
      password: null,
      mobile: null,
      code: null
    })
    const mySchema = {
      account: schema.account,
      password: schema.password,
      mobile: schema.mobile,
      code: schema.code,
      isAgree: schema.isAgree
    }
    const target = ref(null)
    watch(isMsgLogin, () => {
      // 还原数据
      form.isAgree = true
      form.account = null
      form.password = null
      form.mobile = null
      form.code = null
      // 补充校验效果清除，Form组件提供resetForm()
      target.value.resetForm()
    })
    // 使用store
    const store = useStore()
    // 使用router
    const router = useRouter()
    // 使用route
    const route = useRoute()
    const submit = async () => {
      // 整体校验
      const valid = await target.value.validate()
      console.log(valid)
      if (valid) {
        // 发送请求
        if (!isMsgLogin.value) {
          // 帐号密码登录
          userAccountLogin(form)
            .then(data => {
              // 成功
              // 1. 存储信息
              const {
                id,
                account,
                nickname,
                avatar,
                token,
                mobile
              } = data.result
              store.commit('user/setUser', {
                id,
                account,
                nickname,
                avatar,
                token,
                mobile
              })
              // 2. 提示
              Message({ type: 'success', text: '登录成功' })
              // 3. 跳转
              router.push(route.query.redirectUrl || '/')
            })
            .catch(e => {
              // 失败
              Message({
                type: 'error',
                text: e.response.data.message || '登录失败'
              })
            })
        } else {
          // 短信登录
        }
      }
    }
    return { isMsgLogin, form, mySchema, submit }
  }
}
</script>
<style scoped lang="less">
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @comColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @comColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @comColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
