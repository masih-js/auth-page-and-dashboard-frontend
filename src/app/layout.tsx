import type { Metadata } from "next";
import "../styles/globals.scss";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "Test Frontend App",
  description: "Created by Masih Amiri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>{" "}
      </body>
    </html>
  );
}
