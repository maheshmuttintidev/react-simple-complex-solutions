import { useState } from "react";
import { Protected } from "../../layouts/Protected";
import { ComingSoon } from "../../components/ComingSoon";

export function React19All() {
  return (
    // @ts-ignore
    <Protected selectedName="react-19">
      <h1 className="text-3xl font-bold">New Features in React 19</h1>
      <div className="flex gap-3 flex-wrap py-3">
        {newHooks?.map((hook, hookIndex) => {
          return (
            <div
              className="flex-grow-1 hover:bg-yellow-100 border border-2 border-yellow-400 rounded-md shadow-md "
              key={`hook_${hookIndex}`}
            >
              {hook.component}
            </div>
          );
        })}
      </div>
      <ComingSoon />
    </Protected>
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
