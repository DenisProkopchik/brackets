module.exports = function check(str, bracketsConfig) {
  let result = [];
  let openPar = bracketsConfig.reduce((sum, item, index) => sum = `${sum} ${item[0]}${index}`, '').split(' ').slice(1);
  let closedPar = bracketsConfig.reduce((sum, item, index) => sum = `${sum} ${item[1]}${index}`, '').split(' ').slice(1);
  str.split('').forEach(item => {
    let o = openPar.find(item2 => item === item2.slice(0, 1));
    let c = closedPar.find(item2 => item === item2.slice(0, 1));

    if (c && result.length > 0) {
      result[result.length - 1].slice(-1) === c.slice(-1) ? result.splice(-1) : c === o ? result.push(o) : result;
    } else {
      result.push(o);
    }
    return result
  });

  return result.length > 0 ? false : true;
}