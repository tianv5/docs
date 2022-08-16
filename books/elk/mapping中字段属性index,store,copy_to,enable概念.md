# mapping中字段属性 index,store,copy_to,enable概念

> 参考:
>
> [关于es映射mapping中的enabled，store，index参数的理解 - Elastic 中文社区 (elasticsearch.cn)](https://elasticsearch.cn/article/6159)



## index

默认情况下, 所有字段都会创建倒排索引,可以通过字段index参数进行设置,默认`true`

如果设置为`false`，该字段将不能被查询,查询会报错,但是会存被`store`

当该文档被查询出来的时候,也会显示在`_source`中



```js
# 首先创建一个索引, name和title字段, 其中, name的index=false

PUT my_index
{
  "mappings": {
    "properties": {
      "name": {
        "type": "text",
        "index": false
      },
      "title": {
        "type": "text"
      }
    }
  }
}


# 创建文档,id随机,
POST my_index/_doc
{
  "name": "张三",
  "title": "法外狂徒"
}

POST my_index/_doc
{
  "name": "李四",
  "title": "亚洲舞王"
}
```



下面进行查询

```js
POST my_index/_search
{
  "query": {
    "prefix": {
      "name": {
        "value": "张"
      }
    }
  }
}


POST my_index/_search
{
  "query": {
    "prefix": {
      "title": {
        "value": "法"
      }
    }
  }
}
```



 ![image-20220803233646105](https://public-1257059699.cos.ap-beijing.myqcloud.com/PicGo/image-20220803233646105.png)











## store

默认false.

我们一般查询数据,结果都在hit中的`_source`字段内.

使用`store=ture`后,数据在`_source中的不受影响`,且会额外store一份在`fields`中.

当查询语句中加入`stored_fields`时，返回数据不在是`_source形式`,而是`fields`形式.下面看例子

```python
# 删除上面index的测试索引
DELETE my_index

# 重新创建索引
PUT my_index
{
  "mappings": {
    "properties": {
      "name": {
        "type": "keyword",
        "store": true
      },
      "title": {
        "type": "keyword"
      }
    }
  }
}


# 插入两条数据
POST my_index/_doc/1
{
  "name": "张三",
  "title": "法外狂徒"
}

POST my_index/_doc/2
{
  "name": "李四",
  "title": "亚洲舞王"
}


# 平时那样,正常使用没问题,结果没变化
POST my_index/_search
{
  "query": {
    "term": {
      "name": {
        "value": "张三"
      }
    }
  }
}


# 查询加入 stored_fields  * 也可以写name或者title,或者 ["name","title"] 
# 但是title没有值,因为title的sotre=false
POST my_index/_search
{
  "stored_fields": ["*"],
  "query": {
    "term": {
      "title": {
        "value": "亚洲舞王"
      }
    }
  }
}
```



返回结果如下

 ![image-20220803235830496](https://public-1257059699.cos.ap-beijing.myqcloud.com/PicGo/image-20220803235830496.png)





## copy_to



上面来看`store`有点鸡肋呀, 配合`copy_to`很有用,因为`copy_to`的字段不被存储在`_source`中.这时候使用`store:true`,就可以查询使用`copy_to`的字段了.

还有些另外的解释,可以看 [ES stored fields作用_云川之下的博客-CSDN博客_stored_fields](https://blog.csdn.net/m0_45406092/article/details/107631883)

> 为了提高效率,减小传输体积,可以返回指定字段，使用`"_source": ["字段1","字段2"]`
>
> 也可以考虑将"字段1","字段2"这些field设置成store=true



下面我们来测试一下 `copy_to` 和 `store`

> copy_to 可以查阅官方文档     [copy_to  | Elasticsearch Guide [8.3\] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/copy-to.html)

```js
DELETE my_index

# 切记, copy_to 是将当前的字段值复制给目标字段
# 下面例子,理解为将当title值复制给name
# 不要理解为 title的值,从name中copy, 那样应该叫copy_from,哈哈,开个玩笑,这里就搞错了.试了好几次。

PUT my_index
{
  "mappings": {
    "properties": {
      "name": {
        "type": "keyword",
        "store": true
      },
      "title": {
        "type": "keyword",
        "copy_to": "name"
      }
    }
  }
}


# 创建数据
POST my_index/_doc/1
{
  "name": "张三",
  "title": "法外狂徒"
}

POST my_index/_doc/2
{
  "title": "亚洲舞王"
}

GET my_index/_doc/1
GET my_index/_doc/2

# 下面两个,都能查到数据,但是_source里只展示了title,没有name.
# 虽然不现实,但是还是能使用查询的.
POST my_index/_search
{"query":{"term":{"title":{"value":"亚洲舞王"}}}}

POST my_index/_search
{"query":{"term":{"name":{"value":"亚洲舞王"}}}}


# copy_to 和 store联合使用, 就可以查到
# 可以查到name的值
# title换成name也一样
POST my_index/_search
{
  "stored_fields": ["name","title"],
  "query": {
    "term": {
      "title": {
        "value": "亚洲舞王"
      }
    }
  }
}
```

 ![image-20220804003349321](https://public-1257059699.cos.ap-beijing.myqcloud.com/PicGo/image-20220804003349321.png)





## enable

默认是`true`

`enable` 只适用于 `type`为`object`，当然,使用enable时候,可以不设置类型,因为设置了enable,就默认type为object了

`enable:false`表示字段不能查询,也不能被`store`



`store index 和 enable`

 ![image-20220804004102873](https://public-1257059699.cos.ap-beijing.myqcloud.com/PicGo/image-20220804004102873.png)

