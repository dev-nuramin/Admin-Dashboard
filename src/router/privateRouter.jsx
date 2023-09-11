import PageLayout from "../components/PageLayout/PageLayout";
import User from "../components/User/User";
import Dashboad from "../pages/Dashboard/Dashboard";

// create private route
const privateRoute = [
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <Dashboad />
            },
            {
                path: '/user',
                element: <User />
            },
        ]
    },
   
];

// export route
export default privateRoute;

