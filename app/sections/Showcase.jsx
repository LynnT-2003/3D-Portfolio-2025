import React from "react";

const Showcase = () => {
  return (
    <div className="pb-24 text-white">
      <p className="head-text mt-24 mb-12 ml-[5vw]">Other Showcases</p>
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="w-[90vw] space-x-12 flex flex-row">
          <div className="w-1/2">
            <video
              className="w-full max-w-[800px] h-[450px] object-cover"
              style={{ aspectRatio: "16/9" }}
              controls
              autoPlay
              loop
              muted
            >
              <source src="others/emotion.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-1/2 flex flex-col">
            <p className="text-4xl font-bold font-sans text-gray-400 mb-6">
              Hugging Face Emotion Classifier
            </p>
            <p className="leading-loose spacing-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-[90vw] h-screen mt-64 space-x-12 flex flex-row">
          <div className="w-1/2 flex flex-col">
            <p className="text-4xl mt-1 font-bold font-sans text-gray-400 mb-6">
              Gesture Controlled Catch Game in NextJS
            </p>
            <p className="leading-loose spacing-loose">
              An interactive web game utilizing TensorFlow.js and the Handpose
              model, allowing players to control a basket via hand gestures to
              catch randomized falling objects. Everything, including the object
              and animations, are built using pure Javascript. Real-time hand
              tracking aligns the basket with the player’s movements, while
              randomized visuals keep gameplay engaging. This project highlights
              advanced computer vision applications, responsive interactions,
              and creative design for an immersive experience.
            </p>
          </div>
          <div className="w-1/2">
            <video
              className="w-full max-w-[800px] h-[450px] object-cover"
              style={{ aspectRatio: "16/9" }}
              controls
              autoPlay
              loop
              muted
            >
              <source src="others/hand.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
