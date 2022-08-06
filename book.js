module.exports = {
    "title": "我的文档",
    "author": "tianv5",
    "description": "文档",
    "keywords": "学习,笔记,编程,代码,博客,文章,github",
    "introduction": {
        "path": "README.md",
        "title": "docs"
    },
    "variables": {
        "themeColor": "#3884ff",
        "themeHqbook": {
            "nav": [
                {
                    "url": "https://www.baidu.com",
                    "target": "_blank",
                    "name": "百度一下"
                },
                {
                    "url": "https://jsrun.net/",
                    "target": "_blank",
                    "name": "JSRUN"
                },
                {
                    "url": "https://www.runoob.com/",
                    "target": "_blank",
                    "name": "菜鸟教程"
                },
                {
                    "url": "https://www.atool99.com/",
                    "target": "_blank",
                    "name": "ATOOL在线工具"
                }
            ]
        }
    },
    "plugins": [
        "-highlight",
        "-lunr",
        "-search",
        "-sharing",
        "search-pro",
        "chapter-fold",
        "sitemap",
        "theme-hqbook",

    ],
    "pluginsConfig": {
        "chapter-fold": {},
        "theme-hqbook": {
            "favicon": "./images/home/favicon.ico",
            "logo": "./images/home/logo.png",
            "copyLines": true,
            "hide-elements": [
                ".summary .gitbook-link"
            ],
            "flexible-linkcard": {
                "title": "docs",
                "hrefUrl": "https://github.com/tianv5/docs",
                "imgSrc": "../../images/home/logo.png",
            }
        },
        "sitemap": {
            "hostname": "https://tianv5.github.io/docs"
        }
    },
    "pdf": {
        "toc": true,
        "pageNumbers": true,
        "fontSize": 12,
        "paperSize": "a4",
        "margin": {
            "right": 62,
            "left": 62,
            "top": 36,
            "bottom": 36
        }
    }
}
;