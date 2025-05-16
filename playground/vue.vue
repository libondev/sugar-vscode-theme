<script setup>
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
  set(value) {
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
    <div v-for="num of 10" class="class-names" :title="modelValue" @click="logger">
      {{ num }}
    </div>
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
}
</style>

<style scoped>
.w-800px ::v-deep .el-form-item--mini.el-form-item,
.w-800px ::v-deep .el-form-item--small.el-form-item {
  margin-bottom: 16px;
}

body::after{
  content: '';
}
</style>

<style lang="less" scoped>
.w-800px ::v-deep .el-form-item--mini.el-form-item,
.w-800px ::v-deep .el-form-item--small.el-form-item {
  margin-bottom: 16px;
}

body::after{
  content: '';
}
</style>
