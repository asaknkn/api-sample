import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders a home page', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch("This is a Home page")
  })
})