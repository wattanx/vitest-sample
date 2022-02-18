import { mount } from "@vue/test-utils";
import Center from "../components/Center.vue";

describe("Center Test", () => {
  it("slotの内容が描画されること_Jestでは通る", () => {
    const wrapper = mount(Center, {
      slots: {
        text: "<p>test</p>",
      },
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("<p>test</p>");
  });

  it("slotの内容が描画されること_Jest・Vitest両方で通る", () => {
    const wrapper = mount(Center, {
      slots: {
        text: "<p>test</p>",
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find("p").text()).toBe("test");
  });
});
