import {
  // RouterProvider,
  createBrowserRouter,
  // BrowserRouter as createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Footer from "~/layouts/footer/Footer";
// import Navbar from "~/layouts/navbar/Navbar";
import Home from "~/pages/home/Home";
// import Explore from "~/pages/explore/Explore";
// import Hotel from "~/pages/hotel/Hotel";
// import Notfound from "~/pages/not-found/Notfound";
// import Mainlayout from "~/layouts/main/Mainlayout";
import Register from "~/pages/register/Register";
import Login from "~/pages/login/Login";
// import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { Mainlayout, RequireAuth } from "~/layouts/main/Mainlayout";
import ListPage from "~/pages/explore/Explore";
import SinglePage from "~/pages/hotel/Hotel";
import { Test } from "~/pages/test/Test";
import Notfound from "~/pages/not-found/Notfound";
import { ProfilePage } from "~/pages/profile/ProfilePage";
import { ProfileUpdatePage } from "~/pages/profileupdate/ProfileUpdatePage";
import { NewPostPage } from "~/pages/newpost/NewPostPage";
// import { Test } from "~/pages/test/Test";

const App = () => {
  // const { user } = useAuthContext();

  // console.log("ROUTES SAYFASI USER Contexten gelio", user);

  // return (
  //   <Router>
  //     <Navbar />
  //     <Routes>
  //       <Route index element={<Home />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //     <Footer />
  //   </Router>
  // );

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: ":id",
          element: <SinglePage />,
        },
        {
          path: "test",
          element: <Test />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
