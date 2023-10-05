import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Details from "./pages/Details";
import Providers from "./pages/Providers";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/:category/:id" element={<Details />} />
          <Route path="/movies/:type" element={<Movies />} />
          <Route path="/tv-series/:type" element={<TVSeries />} />
          <Route path="/providers/:category" element={<Providers />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{ backgroundColor: "#6366f1" }}
      />
    </>
  );
};

export default App;
