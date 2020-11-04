<template>
  <div>
    <input :type="type" :value="value" @input="OnInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    OnInput (e) {
      const value = e.target.value
      this.$emit('input', value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
