import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";


test("Restaurant should load on home page", () => {
    
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
            <Body/>
        </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    // console.log(shimmer);
});