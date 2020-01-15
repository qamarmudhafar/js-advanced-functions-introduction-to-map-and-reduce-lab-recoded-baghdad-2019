// Your code here
function mapToNegativize(arr) {
  let newarr = []
  for (let i = 0; i < arr.length; i++ ) {
    newarr.push(-1 * arr[i])
  }
  return newarr
}

function mapToNoChange(arr) {
  let newarr = []
  for (let i = 0; i < arr.length; i++ ) {
    newarr.push(arr[i])
  }
  return newarr
}

function mapToDouble(arr) {
  let newarr = []
  for (let i = 0; i < arr.length; i++ ) {
    newarr.push(arr[i]*2)
  }
  return newarr
}


function mapToSquare(arr) {
  let newarr = []
  for (let i = 0; i < arr.length; i++ ) {
    newarr.push(arr[i]*arr[i])
  }
  return newarr
}


function reduceToTotal(arr, startpoint=0) {
  let total = startpoint
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}