import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Shrine = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/models/shrine.glb");

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Horns1_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Innards_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
          position={[0, 6.241, 0]}
          scale={[11.706, 12.991, 10.75]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Branches_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bull_Skulls1_Bull_Skull_Material_0.geometry}
          material={materials.Bull_Skull_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouths1_Mouths_Material_0.geometry}
          material={materials.Mouths_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Skulls_Human_Skull_Material_0.geometry}
          material={materials.Human_Skull_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ribs_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder52_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrine2_Shrine_Material_0.geometry}
          material={materials.Shrine_Material}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/shrine.glb");

export default Shrine;
