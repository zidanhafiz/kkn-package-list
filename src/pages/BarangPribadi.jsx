import { useState } from "react";
import BackButton from "../components/BackButton";

const BarangPribadi = () => {
  const [isMale, setIsMale] = useState(true);
  const [isClothCheck, setIsClothCheck] = useState(false);
  const [isIbadahCheck, setIsIbadahCheck] = useState(false);
  const [isMandiCheck, setIsMandiCheck] = useState(false);
  const [isGadgetCheck, setIsGadgetCheck] = useState(false);
  const [isAlatCheck, setIsAlatCheck] = useState(false);
  const [isLainnyaCheck, setIsLainnyaCheck] = useState(false);
  const maleClothes = [
    "almamater",
    "kemeja putih",
    "kemeja bebas",
    "kemeja coksu",
    "kemeja hitam",
    "kemeja kotak-kotak",
    "batik",
    "kaos hitam",
    "kaos bebas",
    "celana hitam",
    "celana coksu",
    "celana training",
    "celana bebas",
    "jaket/ sweater",
    "kaos kaki",
    "pakaian dalam",
    "sepatu",
    "sandal",
  ];

  const femaleClothes = [
    "almamater",
    "kemeja putih",
    "kemeja coksu",
    "kemeja batik",
    "kemeja kotak-kotak",
    "kemeja hitam",
    "kemeja bebas",
    "kaos hitam",
    "kaos bebas",
    "rok/ celana hitam",
    "rok/ celana bebas",
    "celana training",
    "kerudung hitam",
    "kerudung coksu",
    "kerudung abu",
    "kerudung bebas",
    "jaket/ sweater",
    "kaos kaki",
    "pakaian dalam",
    "sepatu",
    "sandal",
  ];

  const alatIbadah = ["sajadah", "sarung/ mukenah", "peci", "al-qur'an"];
  const alatMandi = [
    "sabun",
    "shampoo",
    "sikat gigi",
    "odol",
    "sabun muka",
    "deodorant (lu bau bego!)",
    "handuk",
    "parfum (minimal wangi)",
  ];
  const gadget = [
    "handphone",
    "laptop",
    "charger hp",
    "charger laptop",
    "powerbank",
    "headset/ earphone",
  ];
  const alatTulis = ["buku tulis", "pulpen"];

  const lainnyaMale = [
    "masker",
    "sisir",
    "selimut",
    "bantal",
    "gunting kuku",
    "skincare/ makeup",
    "minyak kayu putih",
    "vitamin dsb",
  ];
  const lainnyaFemale = [
    "masker",
    "sisir",
    "selimut",
    "bantal/ boneka",
    "gunting kuku",
    "skincare/ makeup",
    "pembalut",
    "peniti/ jarum pentul",
    "minyak kayu putih",
    "vitamin dsb",
  ];

  const clearRadioCheck = () => {
    setIsClothCheck(false);
    setIsMandiCheck(false);
    setIsIbadahCheck(false);
    setIsAlatCheck(false);
    setIsGadgetCheck(false);
    setIsLainnyaCheck(false);
  };

  return (
    <div className="max-w-md m-auto pt-7 px-3 min-h-screen">
      <BackButton />
      <div className="text-center mt-7">
        <h1 className="text-2xl font-semibold">BARANG PRIBADI</h1>
        <div className="mt-7 tabs tabs-boxed">
          <a
            className={
              isMale == true
                ? "tab w-1/2 tab-active font-semibold"
                : "tab w-1/2"
            }
            onClick={() => setIsMale(true)}
          >
            COWOK
          </a>
          <a
            className={
              isMale == false
                ? "tab w-1/2 tab-active font-semibold"
                : "tab w-1/2"
            }
            onClick={() => setIsMale(false)}
          >
            CEWEK
          </a>
        </div>
        <div className="mt-7">
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isClothCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsClothCheck(!isClothCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">PAKAIAN</div>
            <div className="collapse-content">
              <div className="form-control">
                {isMale
                  ? maleClothes.map((e) => {
                      return (
                        <label className="cursor-pointer label" key={e}>
                          <span className="label-text">{e.toUpperCase()}</span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-success"
                          />
                        </label>
                      );
                    })
                  : femaleClothes.map((e) => {
                      return (
                        <label className="cursor-pointer label" key={e}>
                          <span className="label-text">{e.toUpperCase()}</span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-success"
                          />
                        </label>
                      );
                    })}
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isMandiCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsMandiCheck(!isMandiCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">MANDI</div>
            <div className="collapse-content">
              <div className="form-control">
                {alatMandi.map((e) => {
                  return (
                    <label className="cursor-pointer label" key={e}>
                      <span className="label-text">{e.toUpperCase()}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isIbadahCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsIbadahCheck(!isIbadahCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">IBADAH</div>
            <div className="collapse-content">
              <div className="form-control">
                {alatIbadah.map((e) => {
                  return (
                    <label className="cursor-pointer label" key={e}>
                      <span className="label-text">{e.toUpperCase()}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isGadgetCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsGadgetCheck(!isGadgetCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">GADGET</div>
            <div className="collapse-content">
              <div className="form-control">
                {gadget.map((e) => {
                  return (
                    <label className="cursor-pointer label" key={e}>
                      <span className="label-text">{e.toUpperCase()}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isAlatCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsAlatCheck(!isAlatCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">ALAT TULIS</div>
            <div className="collapse-content">
              <div className="form-control">
                {alatTulis.map((e) => {
                  return (
                    <label className="cursor-pointer label" key={e}>
                      <span className="label-text">{e.toUpperCase()}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isLainnyaCheck && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsLainnyaCheck(!isLainnyaCheck);
              }}
            />
            <div className="collapse-title text-lg font-medium">LAINNYA</div>
            <div className="collapse-content">
              <div className="form-control">
                {isMale
                  ? lainnyaMale.map((e) => {
                      return (
                        <label className="cursor-pointer label" key={e}>
                          <span className="label-text">{e.toUpperCase()}</span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-success"
                          />
                        </label>
                      );
                    })
                  : lainnyaFemale.map((e) => {
                      return (
                        <label className="cursor-pointer label" key={e}>
                          <span className="label-text">{e.toUpperCase()}</span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-success"
                          />
                        </label>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarangPribadi;
