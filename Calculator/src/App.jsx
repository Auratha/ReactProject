import { useState } from "react";
import DisplayItem from "./components/DisplayItem";

const App = () => {
  const [totalValue, setTotal] = useState("0");
  const [prevCalc, setPrevCalc] = useState("");
  const [mode, setMode] = useState(true);

  const handleClick = (e) => {
    const { innerText } = e.target;

    if (innerText === "AC") {
      setTotal("0");
      setPrevCalc("");
      return;
    } else if (innerText === "b") {
      setMode((prev) => !prev);
      return;
    } else if (innerText === "=") {
      const result = new Function(
        "return " + totalValue.replace("x", "*").replace("÷", "/")
      );

      console.log(result);

      setPrevCalc(totalValue);
      setTotal(result);
    } else {
      totalValue === "0" || totalValue === 0
        ? setTotal(innerText)
        : setTotal((prev) => prev + innerText);
    }
  };

  return (
    <>
      <div
        className={`w-full h-screen flex justify-center items-center ${
          mode ? "bg-white" : "bg-[#1E1E1E]"
        } `}
      >
        <div
          id="calculator"
          className={`w-1/2 h-4/5 ${
            mode ? "bg-[#1E1E1E]" : "bg-white"
          } text-white rounded-3xl overflow-hidden`}
        >
          <div className="h-2/5 relative">
            <p className="text-gray-500 absolute bottom-10 right-2">
              {totalValue === "0" ? "" : prevCalc}
            </p>
            <p
              className={`text-2xl font-bold absolute bottom-2 right-2 ${
                mode ? "text-white" : "text-black"
              }`}
            >
              {totalValue}
            </p>
          </div>
          <div className="h-3/5 px-2 bg-[#27292E] grid grid-cols-4 grid-rows-5 items-center">
            <DisplayItem onClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
