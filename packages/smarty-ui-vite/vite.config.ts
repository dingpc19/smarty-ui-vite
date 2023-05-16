/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: "[name].[ext]",
    exports: "named" as const,
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    Unocss(),
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],
  // 添加库模式配置

  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};

export default defineConfig(config as any);
