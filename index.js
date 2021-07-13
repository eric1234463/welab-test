const filterNumberArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw Error('input is not arr');
  }

  return arr.filter(el => !Number.isNaN(Number.parseInt(el)));
}

const transformArrayInverse = (arr) => {
    if (!Array.isArray(arr)) {
      throw Error('input is not arr');
    }
  
    const length = arr.shift()
    
    if (Number.isNaN(length)) {
        throw Error('input length is not number');
    }

    if (arr.length - 1 < length) {
        throw Error('cannot be inverse');
    }

    let newArr = [arr.shift()]

    for(let i = length - 3; i >= 0; i--) {
        newArr.push(arr[i])
    }

    newArr.push(arr[length - 2]);

    return newArr;
  }

module.exports = {
  filterNumberArray,
  transformArrayInverse,
  
}