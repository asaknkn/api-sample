import { shallowMount } from '@vue/test-utils'
import WebPayment from '@/views/WebPayment.vue'
import CreateCode from '@/components/CreateCode.vue'
import GetCodeDetails from '@/components/GetCodeDetails.vue'

describe('WebPayment.vue', () => {
  it('selected disabled option', async () => {
    const wrapper = shallowMount(WebPayment)
    const options = wrapper.find('select').findAll('option')
    await options.at(0).setSelected()

    expect(wrapper.find('option:checked').element.innerHTML).toBe('Please select one api')
  })

  it('selected Create a Code', async () => {
    const wrapper = shallowMount(WebPayment)
    const options = wrapper.find('select').findAll('option')
    await options.at(1).setSelected()

    const createCode = wrapper.findComponent(CreateCode)

    expect(wrapper.find('option:checked').element.innerHTML).toBe('Create a Code')
    expect(createCode.exists()).toBe(true)
  })

  it('selected Get payment details', async () => {
    const wrapper = shallowMount(WebPayment)
    const options = wrapper.find('select').findAll('option')
    await options.at(2).setSelected()

    const createCode = wrapper.findComponent(GetCodeDetails)

    expect(wrapper.find('option:checked').element.innerHTML).toBe('Get payment details')
    expect(createCode.exists()).toBe(true)
  })
})