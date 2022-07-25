import React, { memo } from "react";

const DisplayInput = ({ input }) => {
  return (
    <form>
      <input
        value={input.join("")}
        readOnly
        type={"text"}
        style={{ width: "20rem", height: "3rem", fontSize: "2rem" }}
      />
    </form>
  );
};

export default memo(DisplayInput);
