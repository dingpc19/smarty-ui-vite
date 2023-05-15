import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./entry";
createApp({
  template: `
           <div style="margin-bottom:20px;">
       <SmartyButton color="blue">主要按钮</SmartyButton>
       <SmartyButton color="green">绿色按钮</SmartyButton>
       <SmartyButton color="gray">灰色按钮</SmartyButton>
       <SmartyButton color="yellow">黄色按钮</SmartyButton>
       <SmartyButton color="red">红色按钮</SmartyButton>
   </div>
   <div style="margin-bottom:20px;"
   >
       <SmartyButton color="blue" plain>朴素按钮</SmartyButton>
       <SmartyButton color="green" plain>绿色按钮</SmartyButton>
       <SmartyButton color="gray" plain>灰色按钮</SmartyButton>
       <SmartyButton color="yellow" plain>黄色按钮</SmartyButton>
       <SmartyButton color="red" plain>红色按钮</SmartyButton>
   </div>
   <div style="margin-bottom:20px;">
       <SmartyButton size="small" plain>小按钮</SmartyButton>
       <SmartyButton size="medium" plain>中按钮</SmartyButton>
       <SmartyButton size="large" plain>大按钮</SmartyButton>
   </div>
   <div style="margin-bottom:20px;">
       <SmartyButton color="blue" round plain icon="search">搜索按钮</SmartyButton>
       <SmartyButton color="green" round plain icon="edit">编辑按钮</SmartyButton>
       <SmartyButton color="gray" round plain icon="check">成功按钮</SmartyButton>
       <SmartyButton color="yellow" round plain icon="message">提示按钮</SmartyButton>
       <SmartyButton color="red" round plain icon="delete">删除按钮</SmartyButton>
   </div>
   <div style="margin-bottom:20px;">
       <SmartyButton color="blue" round plain icon="search"></SmartyButton>
       <SmartyButton color="green" round plain icon="edit"></SmartyButton>
       <SmartyButton color="gray" round plain icon="check"></SmartyButton>
       <SmartyButton color="yellow" round plain icon="message"></SmartyButton>
       <SmartyButton color="red" round plain icon="delete"></SmartyButton>
   </div>
        `,
})
  .use(SmartyUI)
  .mount("#app");
