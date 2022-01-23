import Layout from "components/layout/layout";
import Characters from "pages/characters/characters";
import Episodes from "pages/episodes/episodes";
import { Outlet, useRoutes } from "react-router-dom";
import Location from "pages/location/location";
import CardDetails from "components/carddetails/cardDetails";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const AppRoutes = () => {
  const allroutes = useRoutes([
    {
      path: "",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Characters />,
        },
        { path: "/character/:id", element: <CardDetails /> },
        { path: "/episodes", element: <Episodes /> },
        { path: "/location", element: <Location /> },
      ],
    },
  ]);
  return allroutes;
};

export default AppRoutes;
