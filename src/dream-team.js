module.exports = function createDreamTeam(arr) {
  a = arr.filter(item => typeof(item) == 'string' && item[0] != ' ' && item != /[0-9]/g);
  return a.length == 0 ? false :
  a.map(item => item[0].toUpperCase()).sort().join('')
};

