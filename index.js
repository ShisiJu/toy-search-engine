murmurhash = require('murmurhash')
const { BloomFilter } = require('bloom-filters')


let str = murmurhash.v3("some input", "some seed value (optional)")

const bloomFilter = BloomFilter.create(10000000,0.01)

bloomFilter.add('111')
bloomFilter.add('12231')
bloomFilter.add('sfsdfsdfs')
// 如何持久化? 
// https://github.com/Callidon/bloom-filters#export-and-import
bloomFilter.has('sfsdfsdfs')

