var assert = require('assert');

// function sum(num) {
//   console.log(num)
//   return (n1) => {
//     console.log(num + n1)
//     return (n2) => console.log(num + n1 + n2)
//   }
// }

// Рефактор 1
// function sum(num) {
//   console.log(num)
//   return (n1) => {
//     sum(num + n1)
//     return (n2) => sum(num + n1 + n2)
//   }
// }

// Рефактор 2
// function sum(num) {
//   console.log(num)
//   return (n1) => {
//     sum(num + n1)
//     return (n2) => {
//       return sum(num + n1 + n2)
//     }
//   }
// }

// Рефактор 3
// function sum(num) {
//   console.log(num)
//   return (n1) => {
//     return sum(num + n1)
//   }
// }

// Рефактор 4
// function sum(num) {
//   console.log(num)
//   return (n1) => sum(num + n1)
// }

// Рефактор 4
// function sum(num) {
//   num = num || 0
//   console.log(num)
//   return (n1) => sum(num + n1)
// }

// Рефактор 5
function sum(num) {
  num = parseInt(num) || 0
  console.log(num)
  return (n1) => sum(num + n1)
}



// Testing

let history = []
const old_console = console.log

describe('test sum function', () => {

  before(() => {
    console.log = (...args) => {
      history.push(args)
      old_console.apply(this, args)
    }
  })

  afterEach(() => {
    history = []
  })

  it('sum(1) // 1', () => {
    sum(1);
    assert.equal(history[0][0], 1)
  })

  it('sum(1)(2) // 1 3', () => {
    sum(1)(2);
    assert.equal(history[0][0], 1)
    assert.equal(history[1][0], 3)
  })

  it('sum(1)(2)(3) // 1 3 6', () => {
    sum(1)(2)(3);
    assert.equal(history[0][0], 1)
    assert.equal(history[1][0], 3)
    assert.equal(history[2][0], 6)
  })

  it('sum(1)(2)(3)(4)(5) // 1 3 6 10 15', () => {
    sum(1)(2)(3)(4)(5);
    assert.equal(history[0][0], 1)
    assert.equal(history[1][0], 3)
    assert.equal(history[2][0], 6)
    assert.equal(history[3][0], 10)
    assert.equal(history[4][0], 15)
  })

  it('sum() // ?', () => {
    sum();
    assert.equal(history[0][0], 0)
  })

  it('sum(NaN) // ?', () => {
    sum(NaN);
    assert.equal(history[0][0], 0)
  })

  it('sum(null) // ?', () => {
    sum(null);
    assert.equal(history[0][0], 0)
  })

  it('sum([]) // ?', () => {
    sum([]);
    assert.equal(history[0][0], 0)
  })

  // Включаем проверку массива )))
  it('sum([]) // ?', () => {
    sum([]);
    assert.equal(history[0][0] === 0, true)
  })

  // А если объект )
  it('sum({}) // ?', () => {
    sum({});
    assert.equal(history[0][0] === 0, true)
  })
})