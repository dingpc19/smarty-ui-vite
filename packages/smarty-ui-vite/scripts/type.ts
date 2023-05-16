import * as handlebars from "handlebars";
import fs from "node:fs";
import { resolve } from "path";
import os from "os";
// generateDTS('../dist/smarty-ui.esm.js')

/**
 * 生成类型定义文件 d.ts
 * @param components
 */
export async function generateDTS(entryPath) {
  const template = resolve(__dirname, "./entry.d.ts.hbs");
  const dts = resolve(__dirname, entryPath.replace(".mjs", ".d.ts"));
  console.log("entryPath", entryPath);
  console.log("template", template);
  console.log("dts", dts);
  // // 组件库数据
  const components = await getComponents(entryPath);
  console.log("components", components);

  // 生成模版
  generateCode(
    {
      components,
    },
    dts,
    template
  );
}

/**
 * 生成代码
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */
function generateCode(meta, filePath, templatePath) {
  console.warn({ meta, filePath, templatePath });
  if (fs.existsSync(templatePath)) {
    console.log("templatePath", templatePath);
    const content = fs.readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);
    console.log("result", result);
    fs.writeFileSync(filePath, result);
  }
  console.log(`🚀${filePath} 创建成功`);
}
/**
 * 获取组件列表
 * 通过解析entry.ts模块获取组件数据
 */
async function getComponents(input) {
  const prefix = isWindows() ? "file://" : "";
  const entry = await import(prefix + input);
  return Object.keys(entry)
    .filter((k) => k !== "default")
    .map((k) => ({
      name: entry[k].name,
      component: k,
    }));
}

export default function isWindows() {
  if (os.type() == "Windows_NT") {
    //windows
    return true;
  } else {
    return false;
  }
}
