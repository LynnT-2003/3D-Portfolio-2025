import React from "react";

const Showcase = () => {
  return (
    <div className="pb-24 text-white">
      <p className="head-text mt-24 mb-12 ml-20">Other Showcases</p>
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="w-[90vw] space-x-12 flex flex-row">
          <div className="w-1/2 flex items-center justify-center">
            <video className="w-full h-auto" controls autoPlay loop muted>
              <source
                src="/textures/project/mv-showcase.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2 flex flex-col">
            <p className="text-2xl mb-6">Maha Vertex Web Platform</p>
            <p className="leading-loose spacing-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
