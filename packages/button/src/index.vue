<template>
  <button class="t-button" :class="computedClass">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue'

const buttonTypeOptions: string[] = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'text'
]

export default {
  name: "TButton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator(value: string): boolean {
        return buttonTypeOptions.includes(value)
      }
    },
    // 是否为朴素按钮
    plain: {type: Boolean, default: false},
    // 是否为圆角
    round: {type: Boolean, default: false},
  },
  setup(props) {
    const computedClass = computed(() => {
      const clss = []
      clss.push(
          buttonTypeOptions.includes(props.type) ? props.type : 'default'
      )
      if (props.plain) {
        clss.push('plain')
      }
      if (props.round) {
        clss.push('round')
      }
      return clss
    })
    return {
      computedClass
    }
  }
}
</script>

<style scoped>
</style>