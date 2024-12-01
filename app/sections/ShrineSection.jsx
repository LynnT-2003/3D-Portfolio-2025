import React from "react";
import Shrine from "../components/Shrine";
// import Gojo from "../components/Gojo";
// import Room from "../components/Room";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";

const ShrineSection = () => {
  return (
    <div className="w-full h-screen pb-0 px-10 flex flex-col lg:flex-row">
      {/* Left section - 3D Canvas */}
      <div className="w-full lg:w-2/3 h-1/2 lg:h-full">
        <Canvas className="w-full h-full">
          <Suspense>
            <Leva hidden />
            <PerspectiveCamera makeDefault />
            <HeroCamera>
              <Shrine scale={0.4} position={[0, -4, 0]} />
              {/* <Gojo /> */}
              {/* <Room scale={2} position={[0, -4, 0]} /> */}
            </HeroCamera>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Right section - Description */}
      <div className="mt-16 md:mt-0 w-full lg:w-1/3 h-1/2 lg:h-full p-6 flex justify-center items-center bg-[#181818]">
        <div>
          <h2 className="text-5xl font-sans leading-snug text-blue-50 font-bold mb-8">
            Bringing Ideas <br /> Come to Life <br /> Line by Line
          </h2>
          <h2 className="text-2xl font-sans leading-snug text-blue-50 font-thin mb-8">
            Always a step into the future.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ShrineSection;
