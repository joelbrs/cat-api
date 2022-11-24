import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import ListCats from '@/components/cats/List.vue'
const localVue = createLocalVue()

const { getCats } = require(`@/components/cats/List.vue`)

let myMock = {}
myMock.getCats = jest.fn()

describe('testando fetch', () => {

    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('checando se faz a requisição', async () => {

        const wrapper = mount(ListCats, {
            localVue,
            
            vuetify,
            
            data() {
                return {
                    cats: []
                }
            }
        })

        myMock.getCats()

        expect(myMock.getCats.mock.calls.length).toBe(1)

    })
})