import { Canvas, useThree } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { Html, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import NotificationProvider from "./components/NotificationProvider/NotificationProvider";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setShowModal(true);
    }
  }, [progress]);
  
  return (
    <>
      <Leva collapsed />
      <NotificationProvider>
        <Canvas shadows>
          <color attach="background" args={["#000000"]} />
          <Suspense fallback={<Loader />}>
              <Experience />
          </Suspense>
        </Canvas>
      </NotificationProvider>
    </>
  );
}

export default App;
