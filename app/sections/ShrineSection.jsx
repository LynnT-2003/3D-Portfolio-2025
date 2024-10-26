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
      <div className="mt-16 md:mt-0 w-full lg:w-1/3 h-1/2 lg:h-full p-6 flex justify-center items-center">
        <div>
          <h2 className="text-5xl font-sans leading-snug font-light text-white font-bold mb-8">
            Malevolent Kitchen: Watch Me Cook & Code !
          </h2>
          <p className="text-xl font-sans font-extralight  text-gray-500">
            Inspired by Sukuna&apos;s Malevolent Shrine, Malevolent
            Kitchen&apos;s guaranteed-code ability allows me to relentlessly
            produce high-quality code until nothing but dust remains of all the
            bugs that have been caught in its effective range, via two types of
            coding attacks: Design and Decode.
          </p>
          <p className="text-sm font-light text-gray-500 mt-6">
            The user is able to set which of the two attacks to use against
            specific types of targets, such as using Design for coming up with
            engineering solutions and Decode for getting rid of every bug that
            is Breaking Bad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShrineSection;
