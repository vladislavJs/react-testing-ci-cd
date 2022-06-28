import {renderWithRouter} from "./helpers/helperWithRouter";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import NavBar from "../components/NavBar";

describe('Navbar Test Group', () => {
    test('NavBar Test About', () => {
        renderWithRouter(<NavBar />)
        const aboutBtn = screen.getByTestId("about-link")
        userEvent.click(aboutBtn)
        expect(screen.getByTestId("about-page"))

    })

    test('NavBar Test Main Page', () => {
        renderWithRouter(<NavBar />)
        const aboutBtn = screen.getByTestId("main-link")
        userEvent.click(aboutBtn)
        expect(screen.getByTestId("main-page"))

    })

    test('NavBar Test Users', () => {
        renderWithRouter(<NavBar />)
        const aboutBtn = screen.getByTestId("about-users")
        userEvent.click(aboutBtn)
        expect(screen.getByTestId("users-page"))

    })
})