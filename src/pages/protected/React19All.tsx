import { TabsControlsForReact19 } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Protected } from "../../layouts/Protected";

export function React19All() {
  return (
    <>
      <head>
        <title>React 19 Practice Examples | Mahesh Muttinti</title>
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
      <Protected selectedName="react-19">
        <h1 className="text-3xl font-bold text-white">
          New Features in React 19
        </h1>
        <div className="flex gap-3 flex-wrap py-3">
          <TabsControlsForReact19 />
          {/* {newHooks?.map((hook, hookIndex) => {
          return (
            <div
              className="flex-grow-1 hover:bg-yellow-100 border-2 border-yellow-400 rounded-md shadow-md "
              key={`hook_${hookIndex}`}
            >
              {hook.component}
            </div>
          );
        })} */}
        </div>
        <Outlet />
      </Protected>
    </>
  );
}

const UseOptimistic = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div
      className="relative"
      onMouseOver={() => {
        setShowToast(true);
      }}
      onMouseOut={() => setShowToast(false)}
      onMouseLeave={() => setShowToast(false)}
    >
      <div className="p-5 cursor-pointer">
        <p>
          Man, This is <code className="bg-gray-100 p-1">useOptimistic</code>{" "}
          hook
        </p>
      </div>
      {showToast ? (
        <div className="absolute right-[-5rem] w-min bottom-[-8rem] bg-red-100 border border-1 border-red-200 p-1 rounded-sm">
          <p>
            My Pardon, Nothing will happen bro. This is under developement..
          </p>
        </div>
      ) : null}
    </div>
  );
};

const newHooks = [{ name: "useOptimistic", component: <UseOptimistic /> }];
