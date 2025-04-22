import React, { useEffect, useState } from "react";
import { pubsub, SubscriberFn } from "shared";

export const Widget = () => {
  const [localState, setLocalState] = useState<number>();
  useEffect(() => {
    pubsub.subscribe((e) => setLocalState(e.message as number));
  }, []);

  return (
    <div
      style={{
        border: "2px solid #4caf50",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h2>📦 Widget from MFE1</h2>
      <p>This is content served remotely from MFE1.</p>
      <p>Counter from HOSt: {localState}</p>
    </div>
  );
};

export default Widget;
