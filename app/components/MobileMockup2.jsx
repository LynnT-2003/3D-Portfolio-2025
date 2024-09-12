import React, { useRef, useEffect } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MobileMockup2 = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/models/iphone13-pro.glb");

  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        rotation={[Math.PI / 2, Math.PI, 0]}
        position={[0, 1.6, 0]}
        scale={0.4}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IPHONE13_BlueGlossy_0.geometry}
          material={materials.BlueGlossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IPHONE13_Red_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IPHONE13_BlueMatte_0.geometry}
          material={materials.BlueMatte}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IPHONE13_SpeakerAndMiic_0.geometry}
          material={materials.SpeakerAndMiic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IPHONE13_Silver001_0.geometry}
          material={materials["Silver.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCover_Blue_0.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_Screen_0.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CameraModuleBlack_BlackGlossy_0.geometry}
          material={materials.BlackGlossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CameraModuleBlack_SpeakerAndMiic_0.geometry}
          material={materials.SpeakerAndMiic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bezel_BezelAndNotch_0.geometry}
          material={materials.BezelAndNotch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bezel_SpeakerAndMiic_0.geometry}
          material={materials.SpeakerAndMiic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bezel_CameraGray_0.geometry}
          material={materials.CameraGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bezel_FrontCameraGlass_0.geometry}
          material={materials.FrontCameraGlass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PowerButton_BlueGlossy_0.geometry}
          material={materials.BlueGlossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Volume_Button_BlueGlossy_0.geometry}
          material={materials.BlueGlossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MuteButton_BlueGlossy_0.geometry}
          material={materials.BlueGlossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera1_CameraBlack_0.geometry}
          material={materials.CameraBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera1_CameraMetal_0.geometry}
          material={materials.CameraMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera1_CameraGray_0.geometry}
          material={materials.CameraGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera2_CameraBlack_0.geometry}
          material={materials.CameraBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera2_CameraMetal_0.geometry}
          material={materials.CameraMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera2_CameraGray_0.geometry}
          material={materials.CameraGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera3_CameraBlack_0.geometry}
          material={materials.CameraBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera3_CameraMetal_0.geometry}
          material={materials.CameraMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera3_CameraGray_0.geometry}
          material={materials.CameraGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LiDar_LiDar_0.geometry}
          material={materials.LiDar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flash_Silver_0.geometry}
          material={materials.Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flash_Flash_0.geometry}
          material={materials.Flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CameraModuleGlass_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCam_Lens_0.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Logo_AppleLogo_0.geometry}
          material={materials.AppleLogo}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/iphone13-pro.glb");

export default MobileMockup2;
