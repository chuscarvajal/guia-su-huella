import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFV1UI_IDBwQtyoLBOBbgqzAL89rTZYSVa8TyBB-kOM3uu8E2OBtLinNpHueMUGwQkbHHLNpe3yw35vuROTBZB_LMySvONfkWicj2zRDlRxpYvd-JS_w2vl1zisiWU6Dkxcfc0=w800-h600-k-no"
              alt="Guía su Huella — Adiestramiento Canino"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2b2b2b] font-bold uppercase tracking-[0.12em] text-2xl lg:text-3xl">
              Quiénes Somos
            </h2>
            <p className="text-[#666] text-sm leading-relaxed">
              Somos Guía su Huella, un equipo de adiestradores caninos en Sevilla especializados en educación positiva. Con una valoración de 5.0★ en Google, nuestros clientes nos avalan como referencia en adiestramiento canino en la ciudad.
            </p>
            <p className="text-[#666] text-sm leading-relaxed">
              Trabajamos en entornos naturales de Sevilla, lejos del ruido urbano. Cada perro es diferente y nuestros programas se adaptan a su carácter, edad y necesidades específicas, siempre con técnicas amables y respetuosas.
            </p>
            <div className="flex flex-wrap gap-2">
              {["5.0★ Google", "Refuerzo Positivo", "Sevilla"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#e0e0e0] text-[#2b2b2b] text-xs font-semibold uppercase tracking-[0.1em] px-4 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
