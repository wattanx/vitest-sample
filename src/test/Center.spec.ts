import { mount } from "@vue/test-utils";
import Center from "../components/Center.vue";

describe("Center Test", () => {
  it("slotの内容が描画されること", () => {
    const wrapper = mount(Center, {
      slots: {
        text: "<p>test</p>",
      },
    });
    expect(wrapper.html()).toContain("<p>test</p>");
  });
});
