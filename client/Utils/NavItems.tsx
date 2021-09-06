import { INavItem } from "../interfaces/NavItems";
import { RiServiceFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa"
import { AiOutlineSchedule } from "react-icons/ai";
 let icon1 = RiServiceFill;
 let icon2 = FaCar;
 let icon3 = AiOutlineSchedule;

export const NavItems: Array<INavItem> = [
  {
    label: "Services",
    icon: icon1,
    children: [
      {
        label: "Services",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Fleet",
    icon: icon2,
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Reservations",
    icon: icon3,
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
];
