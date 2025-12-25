import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mohan Mahesh | AI & Software Engineer",
    description: "Portfolio of Mohan Mahesh, a Full-Stack Developer and AI Engineer specializing in scalable systems and machine learning.",
    icons: {
        icon: [
            { url: "/profile-icon.svg", type: "image/svg+xml" },
        ],
        apple: [{ url: "/profile.jpg", type: "image/jpeg" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
