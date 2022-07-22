import React, { memo } from "react";

const DisplayInput = ({ input }) => {
  return (
    <form>
      <input
        value={input}
        readOnly
        type={"text"}
        style={{ width: "300px", height: "50px", fontSize: "30px" }}
      ></input>
    </form>
  );
};

export default memo(DisplayInput);
