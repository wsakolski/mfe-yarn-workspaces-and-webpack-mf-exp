import React, { Suspense, useState, useEffect } from "react";
import { pubsub } from "shared";

const MFE1Widget = React.lazy(() => import("mfe1/Widget"));
const MFE2Widget = React.lazy(() => import("mfe2/Widget"));

export const App = () => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    pubsub.notify("Message", state);
  }, [state]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🏠 Host App</h1>
      <div style={{ display: "flex" }}>
        <button onClick={() => setState((prev) => prev - 1)}>-</button>
        <button>State {state}</button>
        <button onClick={() => setState((prev) => prev + 1)}>+</button>
      </div>
      <Suspense fallback={<p>Loading MFE1 Widget...</p>}>
        <MFE1Widget />
      </Suspense>
      <Suspense fallback={<p>Loading MFE2 Widget...</p>}>
        <MFE2Widget />
      </Suspense>
    </div>
  );
};
