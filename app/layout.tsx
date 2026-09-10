import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT ONE · In sieben Tagen weißt du, was er dir anbietet",
  description:
    "7 Audios. 7 Tage. Damit du siehst, was er dir anbietet und entscheidest, ob du das willst.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
