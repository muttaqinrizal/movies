import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Genre from "./pages/genre";
import Home from "./pages/home";
import Media from "./pages/media";
import MediaList from "./pages/mediaList";
import User from "./pages/user";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/user" element={<User />} />
          <Route path="/media" exact element={<Media />} />
          <Route path="/media-list" element={<MediaList />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
