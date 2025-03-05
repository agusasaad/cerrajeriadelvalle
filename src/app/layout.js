import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ButtonWhatsapp from "@/components/ButtonWhatsapp/ButtonWhatsapp";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cerrajeriadelvalle.com.ar/"),
  title: "Cerrajería del Valle - Soluciones de Cerrajería en CABA",
  description:
    "En Cerrajería del Valle ofrecemos servicios profesionales de cerrajería en CABA. Contamos con más de 15 años de experiencia atendiendo urgencias 24/7 y brindando soluciones para hogares, empresas y vehículos.",
  keywords:
    "Cerrajería del Valle, cerrajería en CABA, servicios de cerrajería, urgencias 24 horas, apertura de puertas, cambio de cerraduras, duplicado de llaves, reparación de puertas, cerrajería automotriz, seguridad para el hogar, soluciones de cerrajería, cerrajero en CABA, servicios de emergencia, cerraduras y llaves, instalación de cerraduras",
  author: "Cerrajería del Valle",
  openGraph: {
    title: "Cerrajería del Valle - Soluciones de Cerrajería en CABA",
    description:
      "Más de 15 años brindando servicios de cerrajería confiables y profesionales en CABA. Urgencias 24/7 para hogares, empresas y vehículos.",
    images: "https://www.cerrajeriadelvalle.com.ar/image.jpg",
    url: "https://www.cerrajeriadelvalle.com.ar/",
    type: "website",
    site_name: "Cerrajería del Valle",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerrajería del Valle - Servicios de Cerrajería en CABA",
    description:
      "Servicios profesionales de cerrajería en CABA. Urgencias 24 horas, apertura de puertas, cambios de cerraduras, y más.",
    images: "https://www.cerrajeriadelvalle.com.ar/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W68S4RMK');`,
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W68S4RMK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NavBar />
        {children}
        <ButtonWhatsapp />
      </body>
    </html>
  );
}
