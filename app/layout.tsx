import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "@/app/(shared-components)/Navbar";
import Footer from "@/app/(shared-components)/Footer";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";

const openSans = Open_Sans({
    subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dallas Formula Racing",
    description: "Website for Dallas Formula Racing FSAE team",
};

const antDCustomizeTheme = {
    token: {
        colorPrimary: "#2D8B49",
    },
    components: {
        Menu: {
            darkItemBg: "#0F0F0F",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={openSans.className} lang="en">
            <body>
                <StyledComponentsRegistry>
                    <ConfigProvider theme={antDCustomizeTheme}>
                        <Navbar />
                        {children}
                        <Footer />
                    </ConfigProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
