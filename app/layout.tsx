import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "../node_modules"
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';



export const metadata: Metadata = {
  title: "Luke Jackson Guitar",
  description: "Official website of Luke Jackson - central KY based guitarist, educator and composer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
