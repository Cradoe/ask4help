import type { Metadata } from "next";
import "./globals.css";
import { Header } from "components/header";
import { workSans } from "lib/font";
import { Footer } from "components/footer";
import { Toaster } from "react-hot-toast";
import { TOASTER_PROPS } from "lib/constants";
import { ProviderWrappers } from "components/provider-wrappers";
import { validateEnvironmentVariables } from "lib/util";

export const metadata: Metadata = {
  title: "Studying Abroad Should Not Be a Headache",
  description:
    "Ask4help provides an avenue for prospective students who wish to study abroad, to connect with current students and alumni who can provide much needed information and guidance",
};

validateEnvironmentVariables();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} max-w-screen overflow-x-hidden`}>
        <ProviderWrappers>
          <Toaster {...TOASTER_PROPS} />
          <Header />
          {children}
          <Footer />
        </ProviderWrappers>
      </body>
    </html>
  );
}
