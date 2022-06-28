import {screen, render} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

describe('Test Routing', ()=> {
    test('Test links', () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)

        const main_link = screen.getByTestId("main-link")
        const about_link = screen.getByTestId("about-link")
        const main_page = screen.queryByTestId("main-page")

        userEvent.click(main_page)
        expect(main_link).toBeInTheDocument()
        userEvent.click(about_link)
        expect(screen.getByTestId("about-page")).toBeInTheDocument()
    });

    test('Testing Error Page', () => {
        render(<MemoryRouter initialEntries={['/1']}>
            <App />
        </MemoryRouter>)

        expect(screen.getByTestId("error-page")).toBeInTheDocument()
    })

})