import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-200 to-purple-300 min-h-screen">
      <div className="max-w-md m-auto p-3">
        <div className="text-center mx-5 mt-20">
          <h1 className="text-3xl font-semibold font-heading">
            KKN PACKING LIST 101
          </h1>
          <p className="text-sm mt-5">
            Silahkan list kembali barang-barang anda jangan sampai ada yang
            terlupa :)
          </p>
        </div>
        <div className="mt-14 mx-5 flex flex-col gap-7 text-center">
          <Link className="btn btn-neutral" to="/barang-pribadi">
            Barang Pribadi
          </Link>
          <Link className="btn btn-neutral" to="/barang-kelompok">
            Barang Kelompok
          </Link>
          <a
            className="btn btn-neutral"
            href="https://docs.google.com/spreadsheets/d/1F7s3t_DbsZvmJmZRLUtpJWSgsRq3Pck5haVJKAC1GdE/edit?usp=sharing"
            target="_blank"
          >
            Spreadsheets RAB Barang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
