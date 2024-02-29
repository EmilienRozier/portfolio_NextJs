import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Emilien Rozier",
  description: "étudiant en 2ème année de BUT MMI à Troyes, originaire de Nevers et passionné par le monde du numérique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <meta name="google" content="notranslate" />
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
