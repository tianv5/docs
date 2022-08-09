## 官网地址

[Specify an analyzer | Elasticsearch Guide [7.10\] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html)

 

 



## Elasticsearch 如何确定索引分析器

Elasticsearch 通过按顺序检查以下参数来确定要使用的索引分析器：

1. 字段[的分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/analyzer.html)映射参数。请参阅[为字段指定分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-index-field-analyzer)。
2. 索引设置。请参阅[指定索引的默认分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-index-time-default-analyzer)。analysis.analyzer.default

如果未指定这些参数，则使用[标准分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/analysis-standard-analyzer.html)。

 

来自 <https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html> 

 

 

 

## Elasticsearch 如何确定搜索分析器

在搜索时，Elasticsearch 通过按顺序检查以下参数来确定要使用的分析器：

1. 搜索查询中的[分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/analyzer.html)参数。请参阅[为查询指定搜索分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-search-query-analyzer)。
2. 字段[的search_analyzer](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-analyzer.html)映射参数。请参阅[为字段指定搜索分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-search-field-analyzer)。
3. 索引设置。请参阅[为索引指定默认搜索分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-search-default-analyzer)。analysis.analyzer.default_search
4. 字段[的分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/analyzer.html)映射参数。请参阅[为字段指定分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html#specify-index-field-analyzer)。

如果未指定这些参数，则使用[标准分析器](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/analysis-standard-analyzer.html)。

 

来自 <https://www.elastic.co/guide/en/elasticsearch/reference/7.10/specify-analyzer.html> 







## 指定分析器的几种方式示例

1. 创建索mappings时,为某个字段指定分析器 [@1](onenote:#指定分析器&section-id={EE48B4F1-2704-4002-9E1F-F98AB7B85936}&page-id={82C27051-CCC8-4542-A7A9-F5C2800C0433}&object-id={850FB99C-01E7-419C-9875-B8BADD12A3AC}&15&base-path=https://d.docs.live.net/0b67edd7cd914a5c/OneNote笔记/编程笔记/ElasticSearch.one)

2. 为索引设置默认的分析器. [@2](onenote:#指定分析器&section-id={EE48B4F1-2704-4002-9E1F-F98AB7B85936}&page-id={82C27051-CCC8-4542-A7A9-F5C2800C0433}&object-id={850FB99C-01E7-419C-9875-B8BADD12A3AC}&2F&base-path=https://d.docs.live.net/0b67edd7cd914a5c/OneNote笔记/编程笔记/ElasticSearch.one)

   

3. 查询时,查询某字段,指定搜索分析器 [@3](onenote:#指定分析器&section-id={EE48B4F1-2704-4002-9E1F-F98AB7B85936}&page-id={82C27051-CCC8-4542-A7A9-F5C2800C0433}&object-id={850FB99C-01E7-419C-9875-B8BADD12A3AC}&4D&base-path=https://d.docs.live.net/0b67edd7cd914a5c/OneNote笔记/编程笔记/ElasticSearch.one)

   (不推荐单独指定,除非充分的测试,否则建议搜索和索引统一分析器)

4. 创建mappings时,为某个字段指定搜索分析器. [@4](onenote:#指定分析器&section-id={EE48B4F1-2704-4002-9E1F-F98AB7B85936}&page-id={82C27051-CCC8-4542-A7A9-F5C2800C0433}&object-id={850FB99C-01E7-419C-9875-B8BADD12A3AC}&69&base-path=https://d.docs.live.net/0b67edd7cd914a5c/OneNote笔记/编程笔记/ElasticSearch.one)

5. 创建mappings时,为搜索指定默认分析器 [@5](onenote:#指定分析器&section-id={EE48B4F1-2704-4002-9E1F-F98AB7B85936}&page-id={82C27051-CCC8-4542-A7A9-F5C2800C0433}&object-id={850FB99C-01E7-419C-9875-B8BADD12A3AC}&87&base-path=https://d.docs.live.net/0b67edd7cd914a5c/OneNote笔记/编程笔记/ElasticSearch.one)

 

2两种,是倒排索引时,使用的分析器.

后3种,是搜索时,分词查询时候的分析器.

如果不设置搜索分析器,则默认使用索引分析器.



```python
# @1
# 为索引某个字段指定分析器
PUT my-index-000001
{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "analyzer": "whitespace"
      }
    }
  }
}


# @2
# 为索引指定默认的分析器
PUT my-index-000001
{
  "settings": {
    "analysis": {
      "analyzer": {
        "default": {
          "type": "simple"
        }
      }
    }
  }
}


# @3
# 为搜索某个字段查询指定分析器
GET my-index-000001/_search
{
  "query": {
    "match": {
      "message": {
        "query": "Quick foxes",
        "analyzer": "stop"
      }
    }
  }
}


# @4
# 创建mappings时候，为某个字段指定搜索分析器
PUT my-index-000001
{
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "analyzer": "whitespace",
        "search_analyzer": "simple"
      }
    }
  }
}


# @5
# 创建mapping时,指定默认分析器 
PUT my-index-000001
{
  "settings": {
    "analysis": {
      "analyzer": {
        "default": {
          "type": "simple"
        },
        "default_search": {
          "type": "whitespace"
        }
      }
    }
  }
}
```

