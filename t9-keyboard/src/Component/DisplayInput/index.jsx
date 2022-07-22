import React, { memo } from "react";

const DisplayInput = ({ input }) => {
  return (
    <form>
      <input
        value={input}
        readOnly
        type={"text"}
        style={{ width: "20rem", height: "3rem", fontSize: "2rem" }}
      ></input>
    </form>
  );
};

export default memo(DisplayInput);
