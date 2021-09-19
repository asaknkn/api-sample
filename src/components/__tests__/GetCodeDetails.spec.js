import { __assign, __awaiter, __generator } from "tslib";
import { mount } from '@vue/test-utils';
import GetCodeDetails from '@/components/GetCodeDetails.vue';
import flushPromises from "flush-promises";
import axios from "axios";
jest.mock("axios");
var mockedAxios = axios;
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return mount(GetCodeDetails, {
        data: function () {
            return __assign({}, values);
        }
    });
};
var newResonse = function () {
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
    };
};
describe('CreateCode.vue', function () {
    it('input table has expeteced colums', function () {
        var wrapper = factory();
        var th = wrapper.findAll('table > thead > tr > th');
        var td = wrapper.findAll('table > tbody > tr > td');
        expect(th.at(0).text()).toBe('Path Paramenter');
        expect(th.at(1).text()).toBe('Value');
        expect(td.at(0).text()).toBe("id");
    });
    it('output table does not exist', function () {
        var wrapper = factory();
        var tables = wrapper.findAll('table');
        expect(tables.length).toBe(1);
    });
    it('output table  exists', function () {
        var wrapper = factory({ response: {
                resultInfo: {
                    code: "sample"
                }
            } });
        var tables = wrapper.findAll('table');
        expect(wrapper.vm.$data.response.resultInfo.code).toBe("sample");
        expect(tables.at(1).exists()).toBe(true);
    });
    it('when triggers a click, response success ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = factory();
                    response = newResonse();
                    mockedAxios.get.mockResolvedValueOnce({ data: response });
                    return [4 /*yield*/, wrapper.find('button').trigger('click')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, flushPromises()];
                case 2:
                    _a.sent();
                    expect(wrapper.vm.$data.response).toEqual(response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('when triggers a click, response failure ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = factory();
                    response = newResonse();
                    mockedAxios.get.mockRejectedValueOnce({ response: { data: response } });
                    return [4 /*yield*/, wrapper.find('button').trigger('click')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, flushPromises()];
                case 2:
                    _a.sent();
                    expect(wrapper.vm.$data.response).toEqual(response);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=GetCodeDetails.spec.js.map