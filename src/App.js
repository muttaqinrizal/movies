import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Genre from "./pages/genre";
import Home from "./pages/home";
import Media from "./pages/media";
import Movies from "./pages/movies";
import MoviesDetail from "./pages/moviesDetail";
import User from "./pages/user";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
