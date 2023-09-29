import { Route, Routes } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
