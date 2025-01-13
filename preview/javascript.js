import { defineComponent } from 'vue'

export const App = defineComponent({
  name: 'App',
  setup() {
    const count = ref(0)

    return () => (
      <div>
        <h1>Hello World</h1>
        <button onClick={
          () => count.value++
        }>{ count.value }</button>
      </div>
    )
  }
})
