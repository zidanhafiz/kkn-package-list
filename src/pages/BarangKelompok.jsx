import { useState } from "react";
import BackButton from "../components/BackButton";
import Maintenance from "../components/Maintenance";

const BarangKelompok = () => {
  const [isMaintenance, setIsMaintenance] = useState(true);
  return (
    <div className="max-w-md m-auto pt-7 px-3 min-h-screen">
      <BackButton />
      <div className="text-center mt-7">
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <h1 className="text-2xl font-semibold">BARANG KELOMPOK</h1>
        )}
      </div>
    </div>
  );
};

export default BarangKelompok;
