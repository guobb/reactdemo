# reactdemo
-------

#### 首先安装yo  npm install -g yo

-------

#### 其次安装generator npm install -g generator-react-webpack
 
-------
 
#### 本地查看generator版本 通过 npm ls -g --depth=1 2>/dev/null | grep generator-

- npm ls -g 列出全局所有安装的npm包，npm通常依赖其它的包 成树状结构展现
- --depth=1 限制树状结构向下只展示一层
- 2>/dev/null  > 表示重定向 在baseshell中 1 表示标准输出  2 表示标准错误 /dev/null 代表空设备文件
  2>/dev/null 如果执行 npm ls -g 出现错误消息 把错误消息重定向空设备文件上
- | 通道 上一个输出命令作为下一个输入命令 
- grep generator- 检索generator 开头的内容

#### 启动服务 npm start 或者 npm run serve 


> 调试react工具 React Developer tool 

- [打开chrome应用商店](https://chrome.google.com/webstore/) 需要翻墙 
 
  - 搜索 React Developer 
  - 添加 React Developer tool 
  - 重新启动 chrome 浏览器 
  - 查看开发工具控制面板 就会多一个 react 完毕
  
