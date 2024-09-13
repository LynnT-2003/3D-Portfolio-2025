import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = ({ hidePercentage }) => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="canvas-loader"></span>
        {!hidePercentage && (
          <p className="text-sm mt-2 text-white">{Math.round(progress)}%</p>
        )}
      </div>
    </Html>
  );
};

export default CanvasLoader;
