import {getCounterValue} from "../store/reducers/selectors/getCounterValue/getCounterValue";


describe('Test store', () => {
    test('selector state', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('work with filled state', () => {
        expect(getCounterValue({counter: {value: 111}})).toBe(111)
    })


})