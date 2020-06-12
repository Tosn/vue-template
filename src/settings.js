export default {
  // vue-ls options
  storageOptions: {
    namespace: 'vuejs__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  },
  storageTime: 7 * 24 * 60 * 60 * 1000
}
