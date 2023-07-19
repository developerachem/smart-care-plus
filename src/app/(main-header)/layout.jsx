import Header from "@/components/ui/header/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <Header />
        <div
          style={{
            backgroundColor: "var(--body)",
          }}
          className="flex items-center justify-center overflow-y-auto"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
