import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "../lib";
import { WebsiteTrackerClient } from "@/components/website-tracker";

export const Protected = ({
  children,
  selectedName,
}: React.ReactElement | any) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/react-19");
  }, []);
  return (
    <>
      <head>
        <title>React Practice Examples | Mahesh Muttinti</title>
        <meta property="og:title" content="React Practice Reference" />
        <meta
          property="og:description"
          content="A comprehensive reference for React practice, tutorials, and tips."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.react-all.maheshmuttintidev.in"
        />
        <meta property="og:image" content="https://i.imgur.com/WpO85EM.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="React Practice Reference Logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React Practice Reference" />
        <meta
          name="twitter:description"
          content="A comprehensive reference for React practice, tutorials, and tips."
        />
        <meta name="twitter:image" content="https://i.imgur.com/WpO85EM.png" />
      </head>
      <main className="min-h-screen bg-black bg-gradient-to-r">
        <section className="container p-2 mx-auto flex gap-3">
          <nav className="md:flex-1/3">
            <ul className="space-y-2">
              {navbarData?.map((navbarItem, navbarItemIndex) => {
                return (
                  <li
                    key={`navbar_item_${navbarItemIndex}`}
                    className={
                      "text-slate-300 transition-all hover:underline shadow-md px-3"
                    }
                  >
                    <a
                      href={navbarItem?.link}
                      title={`nav_link_${navbarItem?.link}`}
                      className={"text-xl md:text-2xl font-semibold"}
                    >
                      {navbarItem?.name}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section className="mt-5 md:flex-2/3 w-full text-base">
            {children}
          </section>
          <Outlet />
        </section>
        <WebsiteTrackerClient />
      </main>
    </>
  );
};
