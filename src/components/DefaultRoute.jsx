import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]);
const DefaultRoute = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default DefaultRoute;