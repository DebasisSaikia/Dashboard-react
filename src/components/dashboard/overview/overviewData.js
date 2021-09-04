import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

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
    backGround: "rgb(190, 248, 208)",
  },
  {
    id: 1,
    currencyName: "XRP/USD",
    value: 0.616818,
    icon: <FiArrowUpLeft />,
    backGround: "rgba(160, 203, 243, 0.4)",
  },
  {
    id: 1,
    currencyName: "Litecoin/USD",
    value: 87.99117,
    icon: <FiArrowDownRight />,
    backGround: "#f7f1e3",
  },
];

export { currencyData };
