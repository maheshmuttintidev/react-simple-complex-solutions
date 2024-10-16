/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";
// @ts-ignore
import { navbarData } from "../lib";
import { useMemo } from "react";

// @ts-ignore
export const Protected = ({ children }) => {
  const location = useLocation();

  return (
    <main className="min-h-screen from-slate-100 to-lime-300 bg-gradient-to-r">
      <section className="container p-2 mx-auto">
        <nav>
          <ul className="flex gap-2">
            {/* @ts-ignore */}
            {navbarData?.map((navbarItem, navbarItemIndex) => {
              return (
                <li
                  key={`navbar_item_${navbarItemIndex}`}
                  className={
                    "text-violet-700 transition-all hover:underline shadow-md px-3"
                  }
                >
                  <a
                    href={navbarItem?.link}
                    // @ts-ignore
                    alt={`nav_link_${navbarItem?.link}`}
                    className="text-4xl font-semibold"
                  >
                    {navbarItem?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="mt-5">{children}</section>
      </section>
    </main>
  );
};
