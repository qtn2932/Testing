const funcs = require('./project-2');
describe('getBiggest',()=>{
    test('bigger',()=>{
        expect(funcs.getBiggest(4,5)).toBe(5)
    })
    test('equal',()=>{
        expect(funcs.getBiggest(5,5)).toBe(5)
    })
})
describe('greeting',()=>{
    test('German',()=>{
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })
    test('Spanish',()=>{
        expect(funcs.greeting("Spanish")).toBe('Hola!')
    })
    test('default',()=>{
        expect(funcs.greeting("default")).toBe('Hello!')
    })
})
describe('isTenOrFive',()=>{
    test('true5',()=>{
        expect(funcs.isTenOrFive(5)).toBe(true)
    })
    test('true10',()=>{
        expect(funcs.isTenOrFive(10)).toBe(true)
    })
    test('false',()=>{
        expect(funcs.isTenOrFive(9)).toBe(false)
    })
})
describe('isInRange',()=>{
    test('true',()=>{
        expect(funcs.isInRange(30)).toBe(true)
    })
    test('above50',()=>{
        expect(funcs.isInRange(60)).toBe(false)
    })
    test('lower20',()=>{
        expect(funcs.isInRange(9)).toBe(false)
    })
})
describe('isInteger',()=>{
    test('true',()=>{
        expect(funcs.isInteger(5)).toBe(true)
    })
    test('false',()=>{
        expect(funcs.isInteger(5.1)).toBe(false)
    })
})
describe('fizzBuzz',()=>{
    test('fizzbuzz',()=>{
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    })
    test('buzz',()=>{
        expect(funcs.fizzBuzz(5)).toBe('buzz')
    })
    test('fizz',()=>{
        expect(funcs.fizzBuzz(3)).toBe('fizz')
    })
    test('num',()=>{
        expect(funcs.fizzBuzz(1)).toBe(1)
    })
})
describe('isPrime',()=>{
    test('negative',()=>{
        expect(funcs.isPrime(-1)).toBe(false)
    })
    test('one',()=>{
        expect(funcs.isPrime(1)).toBe(false)
    })
    test('zero',()=>{
        expect(funcs.isPrime(0)).toBe(false)
    })
    test('notPrime',()=>{
        expect(funcs.isPrime(10)).toBe(false)
    })
    test('Prime',()=>{
        expect(funcs.isPrime(7)).toBe(true)
    })
})
describe('returnFirst',()=>{
    test('first',()=>{
        expect(funcs.returnFirst([1,2,3])).toBe(1)
    })
})
describe('returnLast',()=>{
    test('last',()=>{
        expect(funcs.returnLast([1,2,3])).toBe(3)
    })
})
describe('getArrayLength',()=>{
    test('length',()=>{
        expect(funcs.getArrayLength([1,2,3])).toBe(3)
    })
})
describe('incrementByOne',()=>{
    test('increment',()=>{
        expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4])
    })
})
describe('addItemToArray',()=>{
    test('add',()=>{
        expect(funcs.addItemToArray([1,2,3],4)).toEqual([1,2,3,4])
    })
})
describe('addItemToFront',()=>{
    test('addFront',()=>{
        expect(funcs.addItemToFront([1,2,3],0)).toEqual([0,1,2,3])
    })
})
describe('wordToSentence',()=>{
    test('sentence',()=>{
        expect(funcs.wordsToSentence(['q','u','a','n'])).toBe('q u a n')
    })
})
describe('contains',()=>{
    test('true',()=>{
        expect(funcs.contains([1,2,2,4],2)).toBe(true)
    })
    test('false',()=>{
        expect(funcs.contains([1,4],2)).toBe(false)
    })
})
describe('addNumbers',()=>{
    test('sum,',()=>{
        expect(funcs.addNumbers([1,2,3])).toEqual(6)
    })
})
describe('averageTestScore',()=>{
    test('average,',()=>{
        expect(funcs.averageTestScore([1,2,3])).toEqual(2)
    })
})
describe('largestNumber',()=>{
    test('biggest,',()=>{
        expect(funcs.largestNumber([1,2,3])).toEqual(3)
    })
})
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
