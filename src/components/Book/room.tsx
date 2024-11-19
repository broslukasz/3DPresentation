import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Book({ onDoubleClick, onClick }) {
  const gltf = useMemo(() => useLoader(GLTFLoader, 'src/assets/medival_book.glb',), []);
  const model = gltf.scene;

  return <>
    <primitive
      castShadow
      receiveShadow
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      object={model}
      scale={0.2}
     />

  </>
}