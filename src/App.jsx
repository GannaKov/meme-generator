import { Routes, Route } from "react-router-dom";
import "./App.css";
import MemesPage from "./pages/MemesPage/MemesPage";
import SingleMemePage from "./pages/SingleMemePage/SingleMemePage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="pageWrp">
      <Routes>
        <Route path="/" element={<MemesPage />} />

        <Route path="/:memeId" element={<SingleMemePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
//"homepage": "https://gannakov.github.io/template-react-vite-modcss/",
