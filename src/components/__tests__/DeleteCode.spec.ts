import { mount } from '@vue/test-utils'
import DeleteCode from '@/components/DeleteCode.vue'
import {response} from '@/common/interface/deleteCode'
import flushPromises from "flush-promises"
import axios from "axios"

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>

const factory = (values = {}) => {
  return mount(DeleteCode, {
    data () {
      return {
        ...values
      }
    }
  })
}

const newResonse = ():response => {
  return {
    resultInfo: {
      code: "string",
      message: "string",
      codeId: "string"
    }
  }
}

describe('DeleteCode.vue', () => {
  it('input table has expeteced colums', () => {
    const wrapper = factory()
    const th = wrapper.findAll('table > thead > tr > th')
    const td = wrapper.findAll('table > tbody > tr > td')

    expect(th.at(0).text()).toBe('Paramenter')
    expect(th.at(1).text()).toBe('Value')
    expect(td.at(0).text()).toBe("codeId");
  })

  it('output table does not exist', () => {
    const wrapper = factory()
    const tables = wrapper.findAll('table')
    expect(tables.length).toBe(1);
  })

  it('output table  exists', () => {
    const wrapper = factory({ response: {
      resultInfo: {
        code: "sample"
      }
    }})
    const tables = wrapper.findAll('table')
    expect(wrapper.vm.$data.response.resultInfo.code).toBe("sample")
    expect(tables.at(1).exists()).toBe(true);
  })

  it('when triggers a click, response success ', async () => {
    const wrapper = factory()
    const response = newResonse()

    mockedAxios.delete.mockResolvedValueOnce({data: response})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })

  it('when triggers a click, response failure ', async () => {
    const wrapper = factory()

    const response = newResonse()

    mockedAxios.delete.mockRejectedValueOnce({response:{data: response}})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })
})