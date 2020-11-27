import React from "react";
import Link from "next/Link";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <Link href="/">
        <a>
          <img src="/vercel.svg" alt="logo" />
        </a>
      </Link> */}
      {children}
    </div>
  );
};

export default Layout;
