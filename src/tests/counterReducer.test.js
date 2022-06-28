import counterReducer, {decrement, increment} from "../store/reducers/counterReducer";

describe('Test reducer', () => {
    test('increment', ()=> {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
    })
})