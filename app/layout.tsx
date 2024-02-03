import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const font = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Online Shop of Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <StoreProvider>
        <body className={font.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
