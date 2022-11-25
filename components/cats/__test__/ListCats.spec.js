import { mount } from '@vue/test-utils'
import ListCats from '@/components/cats/ListCats'
import Vuetify from 'vuetify'

describe('ListCats - Unit', () => {
	let vuetify

	beforeEach(() => {
		vuetify = new Vuetify()
	})

	const mountFunction = (options) => {
		return mount(ListCats, {
			vuetify,
			...options
		})
	}

	it('Verificando Requisição',  async () => {
		const wrapper = mountFunction({
			data() {
                return {
                    cats: []
                }
            },

            methods: {
                getCats: jest.fn().mockResolvedValue('abys')
            }
		})

        const data = await wrapper.vm.getCats()
        expect(data).toBe('abys')
	})
})