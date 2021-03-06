//http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-multi-term-query.html

var ESQ = require('../esq');
var esq = new ESQ();

esq.query('span_multi', 'match', 'prefix', 'user', 'value', 'ki');
console.log(JSON.stringify(esq.getQuery(), null, 2));

esq = new ESQ();
esq.query('span_multi', 'match', 'prefix', 'user', 'value', 'ki');
esq.query('span_multi', 'match', 'prefix', 'user', 'boost', 1.08);
console.log(JSON.stringify(esq.getQuery(), null, 2));
