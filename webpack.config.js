const webpack = require("webpack");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  target: "node",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    addMetaAndPolyfill: "./src/addMetaAndPolyfill.ts"
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts, ".js" ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"]
  }
};
