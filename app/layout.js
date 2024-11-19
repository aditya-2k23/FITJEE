import "./globals.css";

export const metadata = {
  title: "FIITEE",
  description: "FIITJEE is a coaching institute for the IIT JEE exam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
