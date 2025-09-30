import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Open_Sans, Raleway, Questrial } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
import { icons } from "antd/es/image/PreviewGroup";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

const questrial = Questrial({
  weight: '400',
  subsets: ["latin"]
});

export const metadata = {
  title: "Dallas Formula Racing",
  description: `Dallas Formula Racing is a student-led organization and is the
    chapter for SAE International at the University of Texas at Dallas.
    Our team was founded in 2014 and has successfully built three
    formula-style vehicles for the Formula SAE competition. The diverse
    array of projects on our team results in student collaboration among
    four different schools at UT Dallas.`,
  icons: {
    icon: "/dfr-logo-tyre.png",
  },
};

const antDCustomizeTheme = {
  token: {
    colorPrimary: "#2D8B49",
  },
  components: {
    Menu: {
      darkItemBg: "#0F0F0F",
      darkItemHoverColor: "#ff841c",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={questrial.className} lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={antDCustomizeTheme}>
            <Navbar />
            {children}
            <Analytics mode={"production"} />
            <Footer />
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
