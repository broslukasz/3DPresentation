import { useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Book({ onDoubleClick, onClick }) {
  const group = useRef();
  const { scene, animations } = useMemo(() => useLoader(GLTFLoader, 'src/assets/medival_book.glb',), []);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);


  return <>
  <group 
    ref={group}
    dispose={null}
    onDoubleClick={onDoubleClick}
    onClick={onClick}>
    <primitive
      castShadow
      receiveShadow
      object={scene}
      scale={0.2}
     />
  </group>

  </>
}