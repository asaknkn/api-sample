import { mount, Wrapper } from '@vue/test-utils'
import CreateCode from '@/components/CreateCode.vue'
import {createCodeReqest, createCodeResponse} from '@/common/interface/createCode'
import flushPromises from "flush-promises"
import axios from "axios"

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('CreateCode.vue', () => {
  it('table head', () => {
    const wrapper = mount(CreateCode)
    const tableHeadRows = wrapper.findAll('table > thead > tr > th')

    expect(tableHeadRows.at(0).text()).toBe('Paramenter')
    expect(tableHeadRows.at(1).text()).toBe('Value')
  })

  it('table body', () => {
    const wrapper = mount(CreateCode)
    const tableHeadRows = wrapper.findAll('table > tbody > tr')

    expect(tableHeadRows.length).toBe(3);
    expect(tableHeadRows.at(0).text()).toBe('merchantPaymentId')
    expect(tableHeadRows.at(1).text()).toBe('amount')
    expect(tableHeadRows.at(2).text()).toBe('currency')
  })

  it('when triggers a click, response success ', async () => {
    const wrapper = mount(CreateCode)

    const response: createCodeResponse = {
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
    mockedAxios.post.mockResolvedValueOnce({data: JSON.stringify(response)})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })
})