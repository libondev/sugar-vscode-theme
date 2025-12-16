<script lang="tsx" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: '',
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  fn: {
    type: Function,
    default: () => {},
  }
})

const emits = defineEmits(['update:modelValue'])

const state = ref(props.modelValue)

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    state.value = value
    emits('update:modelValue', value)
  }
})

function logger() {

}

console.log(modelValue.value)

modelValue.value.toString().split('')
</script>

<template>
  <div>
    <div v-for="num of 10"
      class="class-names"
      :title="modelValue"
      @click="logger"
    >
      {{ num }}
    </div>

    <Component :is="'div'" />
  </div>
</template>


<style scoped lang="scss">
.aaa ::v-deep .bbb {
  width: 100%;
}

.aaa >>> .bbb {
  height: 100%;
}

body::after{
  content: '';
  & {
    width: min(100px, 20vw);
    color: red;
  }
}
</style>

<style lang="postcss" scoped>
.w-100 ::v-deep .el-form-item,
.w-100 ::v-deep .el-form-item--small.el-form-item {
  margin-bottom: 16px;
}

body::after{
  content: '';

  & {
    width: min(100px, 20vw);
    color: red;
  }
}

</style>

<style lang="less" scoped>
.w-100 ::v-deep .item,
.w-100 ::v-deep .item {
  margin-bottom: 16px;
}

body::after{
  content: '';

  & {
    width: min(100px, 20vw);
    color: red;
  }
}
</style>
