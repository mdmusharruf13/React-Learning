import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import store from './utils/store';
import Cart from './components/Cart';

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import ("./components/About"));

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Musharruf",
        email: "musharruf@gmail.com",
    });

    return (
        <Provider store={store}>
        <UserContext.Provider value={{user: user, setUser: setUser}}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurantMenu/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);