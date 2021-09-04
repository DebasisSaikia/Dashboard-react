import { RiArtboard2Fill } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";

const miningData = [
  {
    id: 1,
    miningName: "GPUs mining",
    status: "Running...",
    icon: <RiArtboard2Fill />,
    isRunning: "rgb(46, 213, 115)",
    backGround: "#ffa502",
    isCheckbox: true,
  },
  {
    id: 2,
    miningName: "Est. daily USD",
    icon: <RiCalendarTodoLine />,
    status: "$25.03",
    backGround: "#5f27cd",
  },
  {
    id: 3,
    miningName: "CPUs mining",
    icon: <RiArtboard2Fill />,
    status: "Running...",
    isRunning: "rgb(46, 213, 115)",
    backGround: "#ff7f50",
    isCheckbox: true,
  },
  {
    id: 4,
    miningName: "Est. daily USD",
    icon: <RiCalendarTodoLine />,
    status: "$25.03",
    backGround: "#5f27cd",
  },
];

export { miningData };
