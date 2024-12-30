import { ComingSoon } from "@/components/ComingSoon";
import { Outlet } from "react-router-dom";
import { Protected } from "../../layouts/Protected";

export function React18All() {
  return (
    <>
      <head>
        <title>React 18 Practice Examples | Mahesh Muttinti</title>
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
      <Protected selectedName="react-18">
        <h1 className="text-3xl font-bold text-white">
          New Features in React 18
        </h1>
        {/* 
      <nav className="flex gap-3">
        <Link
          to="/react-18/timer"
          className="border rounded-sm border-red-400 p-2 text-base"
        >
          Timer
        </Link>
        <Link
          to="/react-18/react-component-to-pdf"
          className="border rounded-sm border-red-400 p-2 text-base"
        >
          React Component to PDF
        </Link>
      </nav>
      <ComingSoon /> */}
        <ComingSoon />
        <Outlet />
      </Protected>
    </>
  );
}
