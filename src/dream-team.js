module.exports = function createDreamTeam(arr) {
  return arr.filter( item => typeof(item) == 'string').map( item => item[0]).sort().join('').toUpperCase()
};