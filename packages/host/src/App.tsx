import React, { Suspense } from "react";

const MFE1Widget = React.lazy(() => import("mfe1/Widget"));
const MFE2Widget = React.lazy(() => import("mfe2/Widget"));

export const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🏠 Host App</h1>
      <Suspense fallback={<p>Loading MFE1 Widget...</p>}>
        <MFE1Widget />
      </Suspense>
      <Suspense fallback={<p>Loading MFE2 Widget...</p>}>
        <MFE2Widget />
      </Suspense>
    </div>
  );
};
