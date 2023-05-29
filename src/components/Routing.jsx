import { createBrowserRouter } from "react-router-dom";
import Homepage from "./HomePage";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import SinglePage from "./SinglePage";
import App from "./App";
import SearchPage from "./SearchPage";
import Popular from "./Popular";


const Routing = createBrowserRouter(
    [
        {
            path: "/", element: <App />,
            children: [
                { path: "/", element: <Popular /> },
                { path: "/popular", element: <Popular /> },
                { path: "/topRated", element: <TopRated /> },
                { path: "/upcoming", element: <Upcoming /> },
                { path: "/singlePage/:id", element: <SinglePage /> },
                { path: "/search", element: <SearchPage /> },
            ]
        },
    ]
)

export default Routing;