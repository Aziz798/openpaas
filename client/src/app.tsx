import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const HomePage = lazy(() => import("@/pages/home-page"));

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
