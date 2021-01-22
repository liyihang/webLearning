<template>
  <div>
    <Form>
      <slot></slot>
    </Form>
  </div>
</template>
<script>
export default {
  provide () {
    return {
      Cform: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped></style>
