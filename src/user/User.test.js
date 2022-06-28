import axios from "axios";
import {render, screen} from "@testing-library/react";
import User from "./User";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes, Router} from "react-router-dom";
import UserInfo from "../pages/UserInfo";
import AppRouter from "../router/AppRouter";
import {renderWithRouter} from "../tests/helpers/helperWithRouter";


jest.mock('axios')
describe('Test user component', () => {
    let response

    beforeEach(() => {

        response = { data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }

        axios.get.mockReturnValue(response)
    })

    test('async loading', async () => {
        renderWithRouter(<User/>, 'users')
        const users = await screen.findAllByTestId("div-test")
        expect(users.length).toBe(3)
    })

    test('testing redirect to detail info page', async () => {
        renderWithRouter(<User/>, 'users')

        const users = await screen.findAllByTestId("div-test")
        userEvent.click(users[0])
        expect(screen.getByTestId("user-info-page")).toBeInTheDocument()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})