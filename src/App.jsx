import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Movies from "./Component/Movies/Movies";
import Home from "./Pages/Home/Home";
import Details from "./Component/Details/Details";
import Favorite from "./Component/Favorite/Favorite";
import Main from "./Component/Main/Main";
import NotFound from "./Pages/Not Found/NotFound";
import store from "./Store/Store";
import { Provider } from "react-redux";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import Authenticate from "./Component/Singn&Login/Authenticate";
import AuthGuard from "./Pages/AuthGuard/AuthGuard";
import { AuthProvider } from "./Context/IsAuth";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Home" />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Movies/:pageNumber",
        element: <Movies />,
      },
      {
        path: "/Details/:id",
        element: <Details />,
      },
      {
        path: "/Favorite",
        element: (
          <AuthGuard>
            <Favorite />
          </AuthGuard>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/Authenticate",
        element: <Authenticate />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return false;
  }


  const [isAuth, setIsAuth] = useState(getCookie("Token"));
  return (
    <>
      {/* <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Movies/:pageNumber" element={<Movies />}  />
          <Route path="/Details/:id" element={<Details/>} />
          <Route path="/Favorite" element={<Favorite/>} />
        </Routes>
    </BrowserRouter> */}
      <AuthProvider value={{ isAuth, setIsAuth }}>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
