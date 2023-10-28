import { ComRouterProvider } from "react-ant-comp-test";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

const MixRoute = () => {
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
    return (
        <ComRouterProvider router={router} />
    );
};

export default MixRoute;