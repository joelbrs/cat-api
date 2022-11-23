import { mount } from '@vue/test-utils'
import ListCats from '@/components/cats/List.vue'

describe('verificando listas de gatos', () => {
    const wrapper = mount(ListCats, {
        data() {
            return {
                cats: null,
            }
      },
    })
})