//! GLOBAL
import "../styles/globals.css";

//! COMPONENTS
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/*  dark:bg-zinc-800  dark:text-white */}
      <body className="bg-[#C7D3D4FF] text-black  transition duration-700">
        <Header />
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
