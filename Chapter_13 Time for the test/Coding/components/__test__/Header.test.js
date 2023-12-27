import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {

    // Load Header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
    );

    const logo = header.getAllByTestId("logo")
    // console.log(logo);
    expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU");
})

test("cart should have 0 items on rendering header", () => {

    // Load Header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
    );

    // const cart = header.getByTestId("cart1")
    const cart = header.getByTestId("cart")
    // console.log(cart);
    expect(cart.innerHTML).toBe("Cart 0");
})