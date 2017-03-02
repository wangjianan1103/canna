[start]
下载安装 npm node.js
执行npm install 最好翻墙
[plugin]
npm install --save-dev compression-webpack-plugin
[run]
npm install
npm satrt



package.json
  // npm run [start\test\tsc\lite] 
  // 项目运行所依赖的模块
  // 波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
  // 插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
  // latest：安装最新版本。
  // 项目开发所需要的模块
