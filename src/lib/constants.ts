import { HeaderMenu } from "interfaces";
import { ToasterProps } from "react-hot-toast";

export const TOASTER_PROPS: ToasterProps = {
  position: "top-right",
  toastOptions: {
    style: {
      fontSize: "0.875rem",
    },
    duration: 3000,
    success: {
      style: {
        backgroundColor: "#DCFCE7",
        color: "#14532D",
      },
    },
  },
};

export const HEADER_MENU: HeaderMenu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/#about",
  },
  {
    title: "FAQs",
    path: "/#faqs",
  },
];
