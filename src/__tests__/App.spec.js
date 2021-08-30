import { __awaiter, __generator } from "tslib";
import { mount, createLocalVue } from "@vue/test-utils";
import { routes } from "@/router/index";
import App from "@/App.vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";
var localVue = createLocalVue();
localVue.use(VueRouter);
describe("App", function () {
    it("renders a home component", function () { return __awaiter(void 0, void 0, void 0, function () {
        var router, wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    router = new VueRouter({ routes: routes });
                    wrapper = mount(App, {
                        localVue: localVue,
                        router: router
                    });
                    router.push("/");
                    return [4 /*yield*/, wrapper.vm.$nextTick()];
                case 1:
                    _a.sent();
                    expect(wrapper.findComponent(Home).exists()).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=App.spec.js.map