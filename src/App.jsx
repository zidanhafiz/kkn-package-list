import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BarangPribadi from "./pages/BarangPribadi";
import BarangKelompok from "./pages/BarangKelompok";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="barang-pribadi" element={<BarangPribadi />} />
      <Route path="barang-kelompok" element={<BarangKelompok />} />
    </Routes>
  );
}

export default App;
