import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import Popup from "@/components/Popup";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Sidebar />
                <Component {...pageProps} />
            <Popup />
        <Footer />
    </>
);

export default MyApp;