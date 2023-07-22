import { useState } from "react";
import BackButton from "../components/BackButton";

const BarangKelompok = () => {
  const perlap = [
    "kabel rol/ terminal",
    "kipas angin",
    "sapu",
    "pel",
    "sabun pel",
    "keset",
    "karpet",
    "slot pintu toilet",
    "betadine",
    "kapas",
    "kasa",
    "hansaplas",
    "alkohol",
    "paracetamol",
    "promag",
    "hot in cream",
    "rice cooker",
    "pisau",
    "cobek",
    "termos",
    "label",
    "tali tambang",
    "spons",
    "sabun cuci piring",
  ];

  const acara = [
    "proyektor",
    "mic",
    "sound/ speaker",
    "plakat",
    "trashbag",
    "bingkai foto",
    "spidol",
    "gunting",
    "steples",
    "pulpen",
    "isi steples",
    "tip ex",
    "amplop",
  ];
  const dekorasi = [
    "cutter",
    "lem fox",
    "double tape besar & kecil",
    "solasi sedang  & besar",
    "cat acrilic",
    "kuas lukis",
    "palet cat",
    "kardus polos",
    "kertas karton",
    "kertas crepe",
    "bg rumbai metalic",
    "origami",
    "balon",
    "lampu tumbler",
    "balon metalic",
    "banner umum",
  ];

  const dokumentasi = [
    "kabel roll panjang",
    "tripod kamera",
    "tripod hp",
    "memory card",
    "baterai kamera",
    "camera + charger",
    "id card",
  ];

  const clearRadioCheck = () => {
    setIsPerlap(false);
    setIsDekorasi(false);
    setIsDokumentasi(false);
    setIsAcara(false);
  };

  // const [isMaintenance, setIsMaintenance] = useState(true);
  const [isPerlap, setIsPerlap] = useState(false);
  const [isDekorasi, setIsDekorasi] = useState(false);
  const [isDokumentasi, setIsDokumentasi] = useState(false);
  const [isAcara, setIsAcara] = useState(false);

  return (
    <div className="max-w-md m-auto pt-7 px-3 min-h-screen">
      <BackButton />
      <div className="text-center mt-7">
        <h1 className="text-2xl font-semibold">BARANG KELOMPOK</h1>
      </div>
      <div className="mt-7 text-start">
        <div className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            checked={isPerlap && "checked"}
            onChange={() => {
              clearRadioCheck();
              setIsPerlap(!isPerlap);
            }}
          />
          <div className="collapse-title text-lg font-medium">PERLAP</div>
          <div className="collapse-content">
            <div className="form-control">
              {perlap.map((e) => {
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
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              checked={isAcara && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsAcara(!isAcara);
              }}
            />
            <div className="collapse-title text-lg font-medium">ACARA</div>
            <div className="collapse-content">
              <div className="form-control">
                {acara.map((e) => {
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
              checked={isDekorasi && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsDekorasi(!isDekorasi);
              }}
            />
            <div className="collapse-title text-lg font-medium">
              PDD DEKORASI
            </div>
            <div className="collapse-content">
              <div className="form-control">
                {dekorasi.map((e) => {
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
              checked={isDokumentasi && "checked"}
              onChange={() => {
                clearRadioCheck();
                setIsDokumentasi(!isDokumentasi);
              }}
            />
            <div className="collapse-title text-lg font-medium">
              PDD DOKUMENTASI
            </div>
            <div className="collapse-content">
              <div className="form-control">
                {dokumentasi.map((e) => {
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

export default BarangKelompok;
