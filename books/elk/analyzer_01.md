# 快速测试一个分析器的方法

```shell script
POST _analyze
{
  "analyzer": "whitespace", # 指定分析器,这里是内置的，空格分割.
  "text":     "The quick brown fox." # 需要分析的文本
}
```

返回结果如下
包含`token词元`,起始结束位置,type类型,和排序位置.

为了方面后面学习,和节省文本空间,我们返回结果适用
`["The", "quick", "brown", "fox."]`代替

```shell script
{
  "tokens": [
    {
      "token": "The",
      "start_offset": 0,
      "end_offset": 3,
      "type": "word",
      "position": 0
    },
    {
      "token": "quick",
      "start_offset": 4,
      "end_offset": 9,
      "type": "word",
      "position": 1
    },
    {
      "token": "brown",
      "start_offset": 10,
      "end_offset": 15,
      "type": "word",
      "position": 2
    },
    {
      "token": "fox.",
      "start_offset": 16,
      "end_offset": 20,
      "type": "word",
      "position": 3
    }
  ]
}
```



