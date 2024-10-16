import { Protected } from "../../layouts/Protected";
import { ComingSoon } from "../../components/ComingSoon";
import { Link, Outlet } from "react-router-dom";

export function React18All() {
  return (
    // @ts-ignore
    <Protected selectedName="react-18">
      <h1 className="text-3xl font-bold">React 18 Assignments/Practice</h1>

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
      <Outlet />
      <ComingSoon />
    </Protected>
  );
}
