import { mount } from '@vue/test-utils'
import GetCodeDetails from '@/components/GetCodeDetails.vue'
import {response} from '@/common/interface/getCodeDetails'
import flushPromises from "flush-promises"
import axios from "axios"

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>

const factory = (values = {}) => {
  return mount(GetCodeDetails, {
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
    },
    data: {
      paymentId: "string",
      status: "string",
      acceptedAt: 0,
      refunds: {
        data: [
          {
            status: "string",
            acceptedAt: 0,
            merchantRefundId: "string",
            paymentId: "string",
            amount: {
              amount: 0,
              currency: "JPY"
            },
            requestedAt: 0,
            reason: "string",
          }
        ],
      },
      captures: {
        data: [
          {
            acceptedAt: 0,
            merchantCaptureId: "string",
            amount: {
              amount: 0,
              currency: "JPY"
            },
            orderDescription: "string",
            requestedAt: 0,
            expiresAt: 0,
            status: "string",
          }
        ],
      },
      revert: {
        acceptedAt: 0,
        merchantRevertId: "string",
        requestedAt: 0,
        reason: "string",
      },
      merchantPaymentId: "string",
      amount: {
        amount: 0,
        currency: "JPY"
      },
      requestedAt: 0,
      expiresAt: 0,
      canceledAt: 0,
      storeId: "string",
      terminalId: "string",
      orderReceiptNumber: "string",
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
      metadata: {}
    }
  }
}

describe('CreateCode.vue', () => {
  it('input table has expeteced colums', () => {
    const wrapper = factory()
    const th = wrapper.findAll('table > thead > tr > th')
    const td = wrapper.findAll('table > tbody > tr > td')

    expect(th.at(0).text()).toBe('Path Paramenter')
    expect(th.at(1).text()).toBe('Value')
    expect(td.at(0).text()).toBe("id");
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

    mockedAxios.get.mockResolvedValueOnce({data: response})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })

  it('when triggers a click, response failure ', async () => {
    const wrapper = factory()

    const response = newResonse()

    mockedAxios.get.mockRejectedValueOnce({response:{data: response}})
    await wrapper.find('button').trigger('click')
    await flushPromises()

    expect(wrapper.vm.$data.response).toEqual(response)
  })
})