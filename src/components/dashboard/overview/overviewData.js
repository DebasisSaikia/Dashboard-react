import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import foodPanda from "../../../assets/foodpandalogo.png";
import vodafoneLogo from "../../../assets/vodafonelogo.png";
import facebookLogo from "../../../assets/facebook.png";
import uberLogo from "../../../assets/uberlogo.png";
import citiBank from "../../../assets/citibanklogo.png";

const currencyData = [
  {
    id: 1,
    currencyName: "BTC/USD",
    value: 18928.15,
    icon: <FiArrowUpLeft />,
    backGround: "rgba(238, 218, 248, 0.9)",
  },
  {
    id: 2,
    currencyName: "ETH/USD",
    value: 591.8874,
    icon: <FiArrowUpLeft />,
    backGround: "rgba(190, 248, 208,0.5)",
  },
  {
    id: 3,
    currencyName: "XRP/USD",
    value: 0.616818,
    icon: <FiArrowUpLeft />,
    backGround: "rgba(160, 203, 243, 0.4)",
  },
  {
    id: 4,
    currencyName: "Litecoin/USD",
    value: 87.99117,
    icon: <FiArrowDownRight />,
    backGround: "#f7f1e3",
  },
];

// company data
const companyData = [
  {
    id: "foodpanda",
    name: "Foodpanda",
    category: "Meal",
    logo: foodPanda,
    value: "-$15.85",
    time: "10:00 PM",
  },
  {
    id: "vodaphone",
    name: "Vodafone",
    category: "Phone",
    logo: vodafoneLogo,
    value: "-$58",
    time: "04:13 PM",
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "Salary",
    logo: facebookLogo,
    value: "+$7000",
    time: "11:45 AM",
    primary: "rgba(46, 213, 115,1.0)",
  },
  {
    id: "uber",
    name: "Uber Premier",
    category: "Transport",
    logo: uberLogo,
    value: "-$8.75",
    time: "8:30 AM",
  },
  {
    id: "citibank",
    name: "Citi Bank",
    category: "Credited",
    logo: citiBank,
    value: "-$2,318.75",
    time: "8:30 AM",
  },
];

export { currencyData, companyData };
