import {
  // RouterProvider,
  // createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
import Navbar from "~/layouts/navbar/Navbar";
import Footer from "~/layouts/footer/Footer";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
// import { Test } from "~/pages/test/Test";

const App = () => {
  const { user } = useAuthContext();

  console.log("ROUTES SAYFASI USER Contexten gelio", user);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={!user ? <Navigate to="/login" /> : <Home />} />
        <Route
          path="/home"
          element={!user ? <Navigate to="/login" /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      <Footer />
    </Router>
  );

  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Mainlayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "explore",
  //         element: <Explore />,
  //       },
  //       {
  //         path: "hotel",
  //         element: <Hotel />,
  //       },
  //       {
  //         path: "test",
  //         element: <Test />,
  //       },

  //       {
  //         path: "*",
  //         element: <Notfound />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  // ]);

  // return <RouterProvider router={routes} />;
};

export default App;
