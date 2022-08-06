# 快速上手



## 环境准备

```python
# 安装nodejs, 因为gitbook根据依赖,且gitbook不再维护更新,需要node.js 10.21.0以下
# 下载并安装 https://nodejs.org/download/release/v10.12.0/
# 设置npm源
npm config set registry https://registry.npm.taobao.org
# 切换到官方源
npm config set registry http://www.npmjs.org
# 查看源
npm get registry


# 安装命令行工具
npm install -g gitbook-cli
# 会自动安装gitbook
gitbook -V

# 再次执行,提示这个版本说明安装成功了
# 因为已经停止维护了,最新的版本就是这个了.
gitbook -V
CLI version: 2.3.2
GitBook version: 3.2.3
```



## 创建`gitbook`项目

```shell
# 创建文件夹, 这个就是gitbook的项目目录
mkdir book

# 初始化
cd book
gitbook init

# 打包 默认打包到_book
gitbook build

# 启动服务, 默认_book
gitbook server

# 访问默认地址
http://localhost:4000/
```



## 简单说明

```python
# 项目创建,生成SUMMARY.md和README.md
SUMMARY.md	项目
README.md 	首页
book.js	其实官方使用的是 book.json,我们使用npm管理,module.exports输出一个json
.bookignore	构建时忽略的文件,防止_book文件太大,多余的不进行打包
```
