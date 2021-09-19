import { mount } from '@vue/test-utils'
import CreateCode from '@/components/CreateCode.vue'
import {response} from '@/common/interface/createCode'
import flushPromises from "flush-promises"
import axios from "axios"

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>

const factory = (values = {}) => {
  return mount(CreateCode, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('CreateCode.vue', () => {
  it('input table has expeteced colums', () => {
    const wrapper = factory()
    const tableHeadRows = wrapper.findAll('table > thead > tr > th')
    const tableBodyRows = wrapper.findAll('table > tbody > tr')

    expect(tableHeadRows.at(0).text()).toBe('Paramenter')
    expect(tableHeadRows.at(1).text()).toBe('Value')
    expect(tableBodyRows.length).toBe(18);
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

    const response: response = {
      resultInfo: {
        code: "string",
        message: "string",
        codeId: "string"
      },
      data: {
        codeId: "string",
        url: "string",
        deeplink: "string",
        expiryDate: 0,
        merchantPaymentId: "string",
        amount: {
          amount: 0,
          currency: "JPY"
        },
        orderDescription: "string",
        orderItems: [
          {
            name: "string",
            category: "string",
            quantity: 1,
            productId: "string",
            unit_price: {
              amount: 0,
              currency: "JPY"
            }
          }
        ],
        codeType: "string",
        storeInfo: "string",
        storeId: "string",
        terminalId: "string",
        requestedAt: 0,
        redirectUrl: "string",
        redirectType: "WEB_LINK",
        isAuthorization: false,
        authorizationExpiry: 0
      }
    }
    jest.spyOn(window, 'confirm').mockReturnValue(true)
    jest.spyOn(window, 'open').mockReturnValue(null)
    mockedAxios.post.mockResolvedValueOnce({data: response})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })

  it('when triggers a click, response failure ', async () => {
    const wrapper = factory()

    const response: response = {
      resultInfo: {
        code: "string",
        message: "string",
        codeId: "string"
      },
      data: {
        codeId: "string",
        url: "string",
        deeplink: "string",
        expiryDate: 0,
        merchantPaymentId: "string",
        amount: {
          amount: 0,
          currency: "JPY"
        },
        orderDescription: "string",
        orderItems: [
          {
            name: "string",
            category: "string",
            quantity: 1,
            productId: "string",
            unit_price: {
              amount: 0,
              currency: "JPY"
            }
          }
        ],
        codeType: "string",
        storeInfo: "string",
        storeId: "string",
        terminalId: "string",
        requestedAt: 0,
        redirectUrl: "string",
        redirectType: "WEB_LINK",
        isAuthorization: false,
        authorizationExpiry: 0
      }
    }
    mockedAxios.post.mockResolvedValueOnce({data: response})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })
})