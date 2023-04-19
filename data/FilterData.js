const filterData = [
  {
    id: 'classical_bloom_filter',
    name: 'Classical Filter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/classical',
    active: true,
  },
  {
    id: 'counting_bloom_filter',
    name: 'Counting Filter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/counting',
    active: true,
  },
  {
    id: 'partitioned_bloom_filter',
    name: 'Partitioned Filter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/partitioned',
    active: false,
  },
  {
    id: 'scalable_bloom_filter',
    name: 'Scalable Filter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/scalable',
    active: true,
  },
  {
    id: 'cuckoo_filter',
    name: 'Cuckoo Filter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/cuckoo',
    active: false,
  },
]

const FilterVarient = [
  {
    id: 'classical',
    name: 'Classical Bloom Filter',
  },
  {
    id: 'counting',
    name: 'Counting Bloom Filter',
  },
  {
    id: 'partitioned',
    name: 'Partitioned Bloom Filter',
  },
  {
    id: 'scalable',
    name: 'Scalable Bloom Filter',
  },
  {
    id: 'cuckoo',
    name: 'Cuckoo Bloom Filter',
  },
]

const ApiActions = [
  {
    id: 'all',
    name: 'Fetch all username',
  },
  {
    id: 'create',
    name: 'Create user',
  },
  {
    id: 'search',
    name: 'Search user',
  },
]

const sampleUser = [
  'Zimple Morison',
  'Youst Young',
  'Yeaton Lewis',
  'Zilesch Robinson',
  'Zvaniga Brown',
  'Yager Lewis',
  'Yeldell Scott',
  'Zug Anderson',
  'Zalewski Anderson',
  'Yeaton Gustavsson',
  'Yelverton Pedersen',
  'Zolleis Berg',
]

const filterFirstName = [
  {
    id: 'classical',
    name: 'Classical',
  },
  {
    id: 'counting',
    name: 'Counting',
  },
  {
    id: 'partitioned',
    name: 'Partitioned',
  },
  {
    id: 'scalable',
    name: 'Scalable',
  },
  {
    id: 'cuckoo',
    name: 'Cuckoo',
  },
]

export { filterData, ApiActions, FilterVarient, sampleUser, filterFirstName }
