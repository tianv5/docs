module.exports = {
    "title": "book",
    "author": "tianv5",
    "description": "python开发, 记录学习中点滴~",
    "keywords": "学习,笔记,编程,代码,博客,文章,github",
    "introduction": {
        "path": "README.md",
        "title": "book"
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
        "theme-hqbook",
        "chapter-fold",
        "search-pro",
        "sitemap"
    ],
    "pluginsConfig": {
        "fontSettings": {
            "theme": "white",
            "family": "serif",
            "size": 1
        },
        "chapter-fold": {},
        "localized-footer": {
            "hline": true,
            "filename": "./FOOTER.md"
        },
        "styles": {
            "website": "styles/website.css"
        },
        "theme-hqbook": {
            "copyLines": false,
            "hide-elements": [
                ".summary .gitbook-link"
            ]
        },
        "sitemap": {
            "hostname": "https://tianv5.github.io"
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