import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import DialogsInterface from "./components/dialogs-interface/dialogs-interface";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {  
  return (
    <>
      <Leva collapsed />
        <Canvas shadows>
          <color attach="background" args={["#000000"]} />
          <Suspense fallback={<Loader />}>
              <Experience />
          </Suspense>
        </Canvas>
        <DialogsInterface></DialogsInterface>
    </>
  );
}

export default App;
