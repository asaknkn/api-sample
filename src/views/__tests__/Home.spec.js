import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
describe('Home.vue', function () {
    it('renders a home page', function () {
        var wrapper = mount(Home);
        expect(wrapper.text()).toMatch("This is a Home page");
    });
});
//# sourceMappingURL=Home.spec.js.map