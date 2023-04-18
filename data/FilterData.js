const filterData = [
  {
    id: 'classical_bloom_filter',
    name: 'Classical Bloom FIlter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/classical',
    active: true,
  },
  {
    id: 'cuckoo_filter',
    name: 'Cuckoo FIlter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/cuckoo',
    active: false,
  },
  {
    id: 'classical_bloom_filter',
    name: 'Classical Bloom FIlter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/classical',
    active: true,
  },
  {
    id: 'cuckoo_filter',
    name: 'Cuckoo FIlter',
    baseRoute: 'https://blumea-serverless.vercel.app',
    customRoute: '/api/cuckoo',
    active: false,
  },
  {
    id: 'cuckoo_filter',
    name: 'Cuckoo FIlter',
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
    id: 'fetch_all',
    name: 'Fetch all username',
  },
  {
    id: 'create_user',
    name: 'Create user',
  },
  {
    id: 'search_user',
    name: 'Search user',
  },
]

export { filterData, ApiActions, FilterVarient } 
