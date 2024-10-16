import { ComponentToPdf, Timer } from "../components/react18";
import { React18All, React19All } from "../pages";

export const generalRoutes = [
  {
    path: "/react-18",
    element: <React18All />,
    children: [
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "react-component-to-pdf",
        element: <ComponentToPdf />,
      },
    ],
  },
  {
    path: "/react-19",
    element: <React19All />,
  },
];
