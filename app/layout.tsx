import { Nunito } from "next/font/google";
import { cn } from '@/utils/utils';
import "./globals.css";

import "./globals.css";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link data-rh="true" rel="icon" href="/logo.png" />
            </head>
            <body className={cn(nunito.variable, 'px-3 md:px-12 lg:px-36 py-8')}>{children}</body>
        </html>
    );
}
