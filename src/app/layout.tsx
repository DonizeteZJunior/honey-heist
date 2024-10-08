import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const lato = Lato({
  weight: ['100','300','400','700','900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Roubo do Mel",
  description: "Site simulador de ficha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any"></link>
      </head>
      <body className={lato.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
