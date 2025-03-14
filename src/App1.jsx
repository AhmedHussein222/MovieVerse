import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movies from "./Component/Products/Movies";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import Details from "./Component/Details/Details";
import axios from "axios";

const router2 = createBrowserRouter([
  {
    path: "/Movies/:pageNumber",
    element: <Movies />,
    loader: Loader,
  },
  {
    path: "/Details/:id",
    element: <Details />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

async function Loader() {
   let res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=bf85c6cd8c2021f4fe2f6fdae05710eb&page=1`);
   return res.data.results;
}
    


function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router2} />;
    </>
  );
}

export default App;
