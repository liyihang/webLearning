// 定义校验规则
export default {
  // 账号校验
  account (value) {
    if (!value) return '请输入用户名'
    if (!/^[a-zA-Z]\w{5-19}$/.test(value)) return '字母开头且6-20个字符'
    return true
  },
  // 密码校验
  password (value) {
    if (!value) return '请输入密码'
    if (!/^\w{6-24}$/.test(value)) return '密码56-24位'
    return true
  },
  // 手机号
  mobile (value) {
    if (!value) return '请输入手机号码！'
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号码错误！'
    return true
  },
  // 验证码
  code (value) {
    if (!value) return '请输入验证码！'
    if (!/^\d{6}$/.test(value)) return '验证码是6位数！'
    return true
  },
  // 同意协议
  isAgree (value) {
    if (!value) return '请勾选同意协议'
    return true
  }
}
