import {render, screen} from "@testing-library/react";
import Counter from "../pages/Counter";
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "./helpers/helperWithRouter";
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";
import {renderWithProvider} from "./helpers/helperWithProvider";


describe('Test counter component', () => {
    test('increment', () => {
        renderWithProvider(<Counter/>)
        const incrementBtn = screen.getByTestId("counter-increment")
        expect(screen.getByTestId("counter-value")).toHaveTextContent('0')
        userEvent.click(incrementBtn)
        expect(screen.getByTestId("counter-value")).toContainHTML('1')
    })

    test('decrement', () => {
        renderWithProvider(<Counter/>, {counter: {value: 10}})
        expect(screen.getByTestId('counter-value')).toHaveTextContent("10")
        const decrementBtn = screen.getByTestId("counter-decremen1t")
        userEvent.click(decrementBtn)
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9")
    })
})