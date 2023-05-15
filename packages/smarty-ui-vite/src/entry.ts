import { App } from "vue";
import { Button as SmartyButton } from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import "uno.css";
// 导出单独组件
export { SmartyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SmartyButton.name, SmartyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
