import Image from "next/image";

const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFV1UI_IDBwQtyoLBOBbgqzAL89rTZYSVa8TyBB-kOM3uu8E2OBtLinNpHueMUGwQkbHHLNpe3yw35vuROTBZB_LMySvONfkWicj2zRDlRxpYvd-JS_w2vl1zisiWU6Dkxcfc0=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAECspZwHv8wRtpXuBH-XPet376QrJz843yaiH6VrnQO8HVywj4DFPSOFJnz-zl9dgIidfdP7eMxWXZ1SJIpnYMjYYDfd-ReCqIRvbQpuHot32uUs2RYydNlDIOY4p3mIew1qsKR=w800-h533-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGHOvwjIQWf7Si3WXFmA4q9sxOEn2KHh8f8Pjzn9TKMhLcxHkc6d_NDJnp7OIoQBjqX_NXeI4g4SbkKPNghG0V4v_CwBBnVCB1-2nk_npIWjiJybdDIsg88EOLfxqTpq1s5W-0=w800-h533-k-no",
];

export default function Gallery() {
  return (
    <section id="galería" className="py-16 lg:py-24 bg-[#2b2b2b] border-t border-[#e0e0e0]">
      <div className="container">
        <h2 className="text-white font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl text-center mb-3">
          Galería
        </h2>
        <p className="text-white/60 text-sm text-center mb-10 tracking-wide">Fotos del negocio</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={src}
                alt={`Galería Guía su Huella ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
