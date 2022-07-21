import React, { Fragment, memo, useEffect, useState } from "react";
// import DisplayInput from "../DisplayInput";

const Keyboard = () => {
  const arr = [
    { number: 1, chars: ["'"] },
    { number: 2, chars: ["a", "b", "c"] },
    { number: 3, chars: ["d", "e", "f"] },
    { number: 4, chars: ["g", "h", "i"] },
    { number: 5, chars: ["j", "k", "l"] },
    { number: 6, chars: ["m", "n", "o"] },
    { number: 7, chars: ["p", "q", "r"] },
    { number: 8, chars: ["s", "t", "u"] },
    { number: 9, chars: ["v", "w", "x", "y", "z"] },
  ];
  const [input, setInput] = useState("");
//   let char = "";
  const [char, setChar]= useState("")
  const [count, setCount] = useState(0);
// let count =0
const [prevItemId, setprevItemID] = useState(0);
// let counts =0;
  let timer;

  const handleInput = async (item) => {
    console.log("handleInput", count);

    if (prevItemId !== item.number) {
      setCount(0)
      setprevItemID(item.number)
      clearTimeout(timer)
    }
    
    if (count <= item.chars.length && count !== item.chars.length) {
      setChar(item.chars[count]);
      setCount((prev) => prev + 1);

      console.log("handleInputIF", count);
    } else {
      setCount(0);
    }
    
  };

  const callTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setInput(input+char);
    }, 1000);
  };

  useEffect(() => {
    callTimer();
  }, [char])
  


console.log("char",char);
  return (
    <Fragment>
      <form>
        <input value={input} readOnly type={"text"}></input>
      </form>
      <div
        style={{
          width: "300px",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        {arr.map((item) => {
          return (
            <button
              type="button"
              style={{
                border: "1px solid black",
                margin: "20px",
                width: "50px",
                height: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
              }}
              key={item.number}
              onClick={() => handleInput(item)}
            >
              {item.number}
              <span>{item.chars.join("")}</span>
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default memo(Keyboard);
