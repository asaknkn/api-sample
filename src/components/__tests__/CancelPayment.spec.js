import { __assign, __awaiter, __generator } from "tslib";
import { mount } from '@vue/test-utils';
import CancelPayment from '@/components/CancelPayment.vue';
import flushPromises from "flush-promises";
import axios from "axios";
jest.mock("axios");
var mockedAxios = axios;
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return mount(CancelPayment, {
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
        }
    };
};
describe('DeleteCode.vue', function () {
    it('input table has expeteced colums', function () {
        var wrapper = factory();
        var th = wrapper.findAll('table > thead > tr > th');
        var td = wrapper.findAll('table > tbody > tr > td');
        expect(th.at(0).text()).toBe('Paramenter');
        expect(th.at(1).text()).toBe('Value');
        expect(td.at(0).text()).toBe("merchantPaymentId");
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
                    mockedAxios.delete.mockResolvedValueOnce({ data: response });
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
                    mockedAxios.delete.mockRejectedValueOnce({ response: { data: response } });
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
//# sourceMappingURL=CancelPayment.spec.js.map