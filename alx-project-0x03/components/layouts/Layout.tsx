// components/layouts/Layout.tsx

import React from "react";
import { LayoutProps } from "@/interface";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
