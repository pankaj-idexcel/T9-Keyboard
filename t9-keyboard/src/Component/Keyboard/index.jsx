import React, { Fragment, memo, useEffect, useState } from "react";
import DisplayInput from "../DisplayInput";

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
  const [input, setInput] = useState([]);
  const [count, setCount] = useState(0);
  const [char, setChar] = useState("");
  const [flag, setFlag] = useState(false);
  const [click, setClick] = useState(0);

  let timer;

  const handleInput = (item) => {
    if (count < item.chars.length && !flag) {
      setCount((prev)=> prev+1);
      setChar( item.chars[count]);
    } else {
      setCount(0);
      setChar("")
    }
    setClick(prev=> prev+1)
  };

  useEffect(() => {
    handleTimer()
  }, [click])
  
  const handleTimer=()=>{
    clearTimeout(timer);
    timer = setTimeout(() => {
      // setCount(0);
      setFlag(false);
      setChar("")
      setCount(0)
      setInput([...input, char]);
    }, 800);
  }

  return (
    <Fragment>
      <DisplayInput input={input} />
      <div
        style={{
          width: "20rem",
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
                margin: "1.5rem",
                width: "1.5rem",
                height: "3rem",
                borderRadius:"2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.5rem",
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
