import { __awaiter, __generator } from "tslib";
import { mount } from '@vue/test-utils';
import CreateCode from '@/components/CreateCode.vue';
import flushPromises from "flush-promises";
import axios from "axios";
jest.mock("axios");
var mockedAxios = axios;
describe('CreateCode.vue', function () {
    it('table head', function () {
        var wrapper = mount(CreateCode);
        var tableHeadRows = wrapper.findAll('table > thead > tr > th');
        expect(tableHeadRows.at(0).text()).toBe('Paramenter');
        expect(tableHeadRows.at(1).text()).toBe('Value');
    });
    it('table body', function () {
        var wrapper = mount(CreateCode);
        var tableHeadRows = wrapper.findAll('table > tbody > tr');
        expect(tableHeadRows.length).toBe(3);
        expect(tableHeadRows.at(0).text()).toBe('merchantPaymentId');
        expect(tableHeadRows.at(1).text()).toBe('amount');
        expect(tableHeadRows.at(2).text()).toBe('currency');
    });
    it('when triggers a click, response success ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = mount(CreateCode);
                    response = {
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
                    };
                    mockedAxios.post.mockResolvedValueOnce({ data: JSON.stringify(response) });
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
//# sourceMappingURL=CreateCode.spec.js.map