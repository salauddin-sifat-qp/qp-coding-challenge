import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { Canvas } from "./components/Canvas";
import PlayGroundLayout from "./Layout/PlayGroundLayout/PlayGroundLayout";
import Ground from "./components/GroundFlow";
import UseAction from "./components/Experiments/HooksExamples/UseAction";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Canvas />} />
            <Route path="/hooks-play-ground" element={<UseAction/>} />
          </Route>
          <Route element={<PlayGroundLayout/>} >
            <Route path="/play-ground" element={<Ground/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
