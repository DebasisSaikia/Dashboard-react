import { ImHome } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import mobile from "../../assets/smartphone.png";
import laptop from "../../assets/laptop.png";

const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: ImHome,
  },
  {
    id: 2,
    title: "Wallet",
    icon: FaWallet,
  },
  {
    id: 3,
    title: "Statistics",
    icon: BiShuffle,
  },
  {
    id: 4,
    title: "Transactions",
    icon: FaGlobe,
  },
  {
    id: 5,
    title: "Exchange",
    icon: FaStoreAlt,
  },
  {
    id: 6,
    title: "News",
    icon: AiFillCreditCard,
  },
];

const deviceData = [
  {
    id: 1,
    name: "Iphone 6s plus",
    status: "Active",
    deviceIcon: mobile,
  },
  {
    id: 2,
    name: "Macbook 2017",
    status: "Active",
    deviceIcon: laptop,
  },
];

export { sidebarData, deviceData };
