import "./globals.css";
import { workSans } from "lib/font";
import { Toaster } from "react-hot-toast";
import { TOASTER_PROPS } from "lib/constants";
import { ProviderWrappers } from "components/provider-wrappers";
import { validateEnvironmentVariables } from "lib/util";
import { GoogleAnalytics } from '@next/third-parties/google'

export { metadata } from "./meta";

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
          {children}
        </ProviderWrappers>
      </body>
      <GoogleAnalytics gaId="G-LGXYVMXEQ3" />
    </html>
  );
}
