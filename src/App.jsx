import { Routes, Route } from "react-router-dom";
import "./App.css";
import MemesPage from "./pages/MemesPage/MemesPage";
// import SingleMemePage from "./pages/SingleMemePage/SingleMemePage";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import CustomMemePage from "./pages/CustomMemePage/CustomMemePage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <div>
      {/* //className="pageWrp" */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index="true" element={<HomePage />} />
          <Route path="/memes" element={<MemesPage />} />
          <Route path="/custom" element={<CustomMemePage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
//"homepage": "https://gannakov.github.io/template-react-vite-modcss/",
