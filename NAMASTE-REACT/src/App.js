import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider}  from "react-redux";
import store  from "./utils/store";
import Cart from "./components/Cart";

// const heading=React.createElement("h1",{id:"title",key:"h1",},"headin2");
// const heading2=React.createElement("h1",{id:"title", key:"h2",},"headin2");
// const container=React.createElement("h1",{id:"container",hello:"world"},"headin2");
// const heading3=(<h1 id="h1" key="h2">Namaste React</h1>);
// jsx=>React.createElement=>object=>HTML(DOM)
// const confige=[
//     {
//         type:"carousal",
//          cards:[
//             {
//                 offerName:"50% off"
//             },
//             {
//                 offerName:"No Delivery charge"
//             }
//          ]
//     },
//     {
//         type:"restaturant",
//          cards:[
//             {
//                 name:"Happy8wraps",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8c78040597b866bf87bf6c154ab4c919",
//                 cusines:["Snacks"],
//                 rating:"4.7"
//             },
//             {
//                 name:"Happy8wraps",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8c78040597b866bf87bf6c154ab4c919",
//                 cusines:["Snacks"],
//                 rating:"4.7"
//             }
//          ]
//     }
// ]
const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Meenu Yadav",
    email: "support@namastedev.com",
  });
  return (
    <React.Fragment>
      <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
