import ListCats from '@/components/cats/List.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

const localVue = createLocalVue()

describe('Botao de Fav', () => {

    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('checando se aparece o texto', async () => {

        const wrapper = mount(ListCats, {
            localVue,
            
            vuetify,
            
            data() {
                return {
                    cats: []
                }
            }
        })

        wrapper.vm.getCats = jest.fn()

        expect(wrapper.find('.fav-text').text()).toBe('')

        await wrapper.find('.fav-btn').trigger('click')

        expect(wrapper.find('.fav-text').text()).toBe('Favoritado!')

    })
})