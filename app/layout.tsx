import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
