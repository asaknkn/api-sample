import { mount, createLocalVue } from "@vue/test-utils"
import { routes } from "@/router/index"
import App from "@/App.vue"
import Home from "@/views/Home.vue"
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
    it("renders a home component", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router
        })

        router.push("/")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(Home).exists()).toBe(true)
    })
})