import React, { useState } from "react";
import LoadingSc from "./LoadingSC/LoadingSc";
import PC from "./PC/PC";

export default function Design() {
  const [st, setSt] = useState(true);
  setTimeout(() => {
    setSt(false);
  }, 4000);
  return (
    <div>
      {st && <LoadingSc />}
      {!st && <PC />}
    </div>
  );
}
