import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import ListCats from '@/components/cats/List'
import * as axios from 'axios'

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
            },
        })
    })

    jest.mock('axios', () => {
        return {
            getCats: Promise.resolve(
                {
                    data: 
                    [
                        {
                            id: 'abyss'
                        }
                    ]
                }
            )
        }
    })

    it('verificando requisição', async () => {

        const data = await wrapper.vm.getCats()
        //console.log(data)
        expect(data).toBe('abys')

        console.log(axios)
    })
})