import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import ListCats from '@/components/cats/List'

let localVue = createLocalVue()

Vue.use(Vuetify)

describe('ListCats', () => {

    let wrapper, vuetify

    beforeEach(() => {
        vuetify = new Vuetify(),

        wrapper = mount(ListCats, {
            vuetify,

            localVue,

            data() {
                return {
                    cats: []
                }
            }
        })
    })

    it('verificando requisição', async () => {
        const data = await wrapper.vm.getCats()
        expect(data[0].id).toBe('abys')
    })
})