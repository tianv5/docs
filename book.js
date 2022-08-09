module.exports = {
    "title": "我的文档",
    "author": "tianv5",
    "description": "文档",
    "keywords": "学习,笔记,编程,代码,博客,文章,github",
    "introduction": {
        "path": "README.md",
        "title": "前言",
    },
    "variables": {
        "themeColor": "#3884ff",
        "themeLou": {
            // 顶部导航栏配置
            "nav": [
                {
                    "target": "_blank", // 跳转方式: 打开新页面
                    "url": "https://www.baidu.com",  // 跳转页面
                    "name": "百度"  // 导航名称
                }
            ]
        }
    },
    "plugins": [
        "-highlight",
        "-lunr",
        "-search",
        "-sharing",
        "-livereload",
        "search-pro",
        "chapter-fold",
        "sitemap",
        "theme-lou",
        "back-to-top-button",
        "code",
        "prism"
    ],
    "pluginsConfig": {
        "chapter-fold": {},
        "theme-lou": {
            "color": "#5F9EA0", // 主题色
            "favicon": "static/favicon.ico", // favicon图标
            "logo": "static/logo.png", // 顶部左侧图标
            "forbidCopy": false, // 页面是否禁止复制
            "search-placeholder": "全局搜索", // 搜索框默认文本
            "book-summary-title": "导航", // 目录标题
            "book-anchor-title": "本章目录标题", // 本章目录标题
            "hide-elements": [".summary .gitbook-link"],
            "imgStyle": {
                "isCenter": false, // 是否居中(默认为true)
                "isBox": false, // 是否有边框(默认为true)
                "otherStyle": 'max-width: 80%;', // 图片其他自定义CSS样式
            }
        },
        "sitemap": {
            "hostname": "https://tianv5.github.io/docs"
        },
        "prism": {
            "css": [
                "prismjs/themes/prism-okaidia.css"
            ],
            "lang": {
                "flow": "typescript"
            }
        }
    }
}
;