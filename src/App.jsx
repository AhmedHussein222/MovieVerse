import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./Component/Movies/Movies";
import Home from "./Pages/Home/Home";
import Details from "./Component/Details/Details";
import Favorite from "./Component/Favorite/Favorite";
import Main from "./Component/Main/Main";
import NotFound from "./Pages/Not Found/NotFound";
import store from "./Store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
        element: <Favorite />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
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
      <Provider store={store}>
        <RouterProvider router={router}>
          <Favorite />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
