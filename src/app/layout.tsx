import "~/styles/globals.css";

import type { Metadata } from "next";

import { Inter, DM_Serif_Display } from "next/font/google";
import TRPCReactProvider from "~/trpc/trpc_react_provider";

const main_font = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-secondary",
  display: "swap",
});
const sherif = DM_Serif_Display({
  subsets:["latin"],
  weight:"400",
  variable:"--font-main",
  display:"swap"
})

export const metadata: Metadata = {
  title: "Voiting",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={` ${sherif.variable} ${ main_font.variable} font-main`}
    >
        <body>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
    </html>
  );
}
