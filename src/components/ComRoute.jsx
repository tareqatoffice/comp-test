import { ComBrowserRouter, ComRouterProvider } from "react-ant-comp-test";
import Home from "./Home";
import Contact from "./Contact";

const ComRoute = () => {
    const router = ComBrowserRouter([
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
        <>
            <ComRouterProvider router={router} />
        </>
    );
};

export default ComRoute;