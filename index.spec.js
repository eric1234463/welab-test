const { filterNumberArray, transformArrayInverse } = require('./index');

describe('.filterNumberArray', () => {
    const arr = [1, 3, 'a', 'b', 4, 7];
    const result = [1, 3, 4, 7];
    it('return correct arr', () => {
        expect(filterNumberArray(arr)).toEqual(result)
    })

    it('return throw arr', () => {
        try {
            filterNumberArray(1)
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })
})

describe('.transformArrayInverse', () => {
    it('return correct arr', () => {
        const arr = [5, 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
        const result = ['a', 'd', 'c', 'b', 'e'];
        expect(transformArrayInverse(arr)).toEqual(result)
    })

    it('return throw arr', () => {
        try {
            transformArrayInverse(1)
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })
})