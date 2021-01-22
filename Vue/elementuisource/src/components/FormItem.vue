<template>
  <div>
  <label for="">{{ label }}</label>
  <div>
  <slot></slot>
  <p v-if="errStatus">{{ errMessage }}</p>
 </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['Cform'],
  props: ['label', 'prop'],
  data () {
    return {
      errMessage: '',
      errStatus: false
    }
  },
  mounted () {
    this.$on('validate', this.validator)
  },
  methods: {
    validator () {
      const rules = this.Cform.rules[this.prop]
      const value = this.Cform.model[this.prop]
      const descriptor = { [this.prop]: rules }
      const schema = new Schema(descriptor)
      schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
          this.errStatus = true
        } else {
          this.errMessage = ''
          this.errStatus = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
