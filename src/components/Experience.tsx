import { CameraControls } from "@react-three/drei";

import { useControls } from "leva";
import { Perf } from "r3f-perf";
import Book from "./Book/room";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { positionNames } from "./Models/position-names.enum";
import { useNotifications } from "./NotificationProvider/NotificationProvider";

const [initialCameraX, initialCameraY, initialCameraZ] = [-0.2706712005791201, 0.1327423701533647, -1.2675163596371863]
const [initialLookAtX, initialLookAtY, initialLookAtZ] = [-4.809206677587866, 0.02836308826955547, 2.5335417798943025]

const [deerCameraX, deerCameraY, deerCameraZ] = [-4.383905161837065, 0.12716192106786917, 3.831773473573123]
const [deerLookAtX, deerLookAtY, deerLookAtZ] = [-4.678141748611585, -0.23772542007754494, 2.68213648978029]

const [millCameraX, millCameraY, millCameraZ] = [-6.471919722434551, 0.9412403259769404, 7.3744976612709054]
const [millLookAtX, millLookAtY, millLookAtZ] = [-8.31227151798829, 0.15360347641825687, 5.385789384104497]

const [fisherCameraX, fisherCameraY, fisherCameraZ] = [0.6084024994651535, 0.14354541779940824, 5.2651255019934045]
const [fisherLookAtX, fisherLookAtY, fisherLookAtZ] = [-1.7770771231359181, -0.23832038332389072, 3.723400139741437]

const [farmCameraX, farmCameraY, farmCameraZ] = [3.7742188207727216, 0.32299786689614113, 5.056047090193775]
const [farmLookAtX, farmLookAtY, farmLookAtZ] = [4.7721708311681805, -0.5953308878489825, 2.16098973357599]

const farmCloserPosition = new Vector3(5.151721612721356, 0.0747318258301197, 0.6401886224897968)
const farmCloserLookAt = new Vector3(4.070376328020293, -0.14401533300541347, -3.324021392678085)

const CastleEnterPosition = new Vector3(0.8520069539797934, 0.12505255062768036, -3.182043440333787)
const CastleEnterLookAt = new Vector3(-3.854344127705979, -0.040233756437079604, -3.1081230303785574)

const CastleInsidePosition = new Vector3(-4.793666602661277, 0.39918493056548954, -3.28476376913095)
const CastleInsideLookAt = new Vector3(3.906189907513216, 0.12243473787768377, -8.207761436530543)

const CastleWallPosition = new Vector3(-2.4260545332110226, 1.8752777198153332, -2.9788195084637548)
const CastleWallLookAt = new Vector3(3.513441888902436, -0.32447349826736205, -0.21663125457619214)

const WorldFromTopPosition = new Vector3(2.50730344895309, 5.494757358267229, 11.39663627087456)
const WorldFromTopLookAt = new Vector3(0.07216707182849413, 1.2526759876229399, 2.6745461274721674)

export const Experience = () => {
  const cameraControlsRef = useRef(null);
  const [cameraPosition, setCameraPosition] = useState(new Vector3());
  const [lookAtPosition, setLookAtPosition] = useState(new Vector3());
  const [slideNumber, setSlideNumber] = useState(null);
  const [hasCameraTransition, setHasCameraTransition] = useState(true);
  const { setNotification } = useNotifications();

  const { performanceVisible } = useControls({ 
    performanceVisible: false,
  });

  const onRoomClick = ($event: any) => {
    $event.stopPropagation();
    const {x, y, z} = $event.point
    console.log('Model clicked:', [x, y, z]);
  }

  const onRoomDoubleClick = ($event: any) => {
    $event.stopPropagation();
    const positionsEnumLength = Object.keys(positionNames).filter(key => isNaN(Number(key))).length;

    const nextSlideNumber = slideNumber + 1;
    setSlideNumber( nextSlideNumber >= positionsEnumLength ? positionNames.initial : slideNumber + 1);
  }

  useFrame(() => {
    if (cameraControlsRef.current) {
      const camera = cameraControlsRef.current.camera;
      const { x, y, z } = camera.position;
      if (x !== cameraPosition.x || y !== cameraPosition.y || z !== cameraPosition.z) {
        setCameraPosition(new Vector3(x, y, z));
      }

      const direction = new Vector3();
      camera.getWorldDirection(direction);
      const lookAtPos = new Vector3().copy(camera.position).add(direction.multiplyScalar(10)); // Adjust scalar as needed
      setLookAtPosition(lookAtPos);
    }
  });

  useEffect(() => {
    setNotification({ type: positionNames[positionNames[slideNumber]] });

    switch (slideNumber) {
      case positionNames.initial:
        cameraControlsRef.current.setLookAt(initialCameraX, initialCameraY, initialCameraZ, initialLookAtX, initialLookAtY, initialLookAtZ, hasCameraTransition);
        break;
      case positionNames.deer:
        cameraControlsRef.current.setLookAt(deerCameraX, deerCameraY, deerCameraZ, deerLookAtX, deerLookAtY, deerLookAtZ, hasCameraTransition);
        break;
      case positionNames.mill:
        cameraControlsRef.current.setLookAt(millCameraX, millCameraY, millCameraZ, millLookAtX, millLookAtY, millLookAtZ, hasCameraTransition);
        break;
      case positionNames.fisher:
        cameraControlsRef.current.setLookAt(fisherCameraX, fisherCameraY, fisherCameraZ, fisherLookAtX, fisherLookAtY, fisherLookAtZ, hasCameraTransition);
        break;
      case positionNames.farm:
        cameraControlsRef.current.setLookAt(farmCameraX, farmCameraY, farmCameraZ, farmLookAtX, farmLookAtY, farmLookAtZ, hasCameraTransition);
        break;
      case positionNames.farmCloser:
        cameraControlsRef.current.setLookAt(farmCloserPosition.x, farmCloserPosition.y, farmCloserPosition.z, farmCloserLookAt.x, farmCloserLookAt.y, farmCloserLookAt.z, hasCameraTransition);
        break;
      case positionNames.CastleEnter:
        cameraControlsRef.current.setLookAt(CastleEnterPosition.x, CastleEnterPosition.y, CastleEnterPosition.z, CastleEnterLookAt.x, CastleEnterLookAt.y, CastleEnterLookAt.z, hasCameraTransition);
        break;
      case positionNames.CastleInside:
        cameraControlsRef.current.setLookAt(CastleInsidePosition.x, CastleInsidePosition.y + 5, CastleInsidePosition.z, CastleInsideLookAt.x, CastleInsideLookAt.y, CastleInsideLookAt.z, hasCameraTransition);
        setTimeout(() => {
          cameraControlsRef.current.setLookAt(CastleInsidePosition.x, CastleInsidePosition.y, CastleInsidePosition.z, CastleInsideLookAt.x, CastleInsideLookAt.y, CastleInsideLookAt.z, hasCameraTransition);
        }, 400);
        break;
      case positionNames.CastleWall:
        cameraControlsRef.current.setLookAt(CastleWallPosition.x, CastleWallPosition.y, CastleWallPosition.z, CastleWallLookAt.x, CastleWallLookAt.y, CastleWallLookAt.z, hasCameraTransition);
        break;
      case positionNames.WorldFromTop:
        cameraControlsRef.current.setLookAt(WorldFromTopPosition.x, WorldFromTopPosition.y, WorldFromTopPosition.z, WorldFromTopLookAt.x, WorldFromTopLookAt.y, WorldFromTopLookAt.z, hasCameraTransition);
        break;
      default:
        break;
      }
// 
  }, [slideNumber]);

  useEffect(() => {
    
    const handleKeyDown = (event) => {
      const positionEnumLength = Object.keys(positionNames).filter(key => isNaN(Number(key))).length;
      if (event.key === 'ArrowLeft') {
        setSlideNumber((prev) => prev - 1 < 0 ? positionEnumLength - 1 : prev - 1
        );
      } else if (event.key === 'ArrowRight') {
        setSlideNumber((prev) => prev === positionEnumLength - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // console.log('Camera position changed:', [cameraPosition.x, cameraPosition.y, cameraPosition.z]);
  }, [cameraPosition]);

  useEffect(() => {
    // console.log('Camera is looking at:', [lookAtPosition.x, lookAtPosition.y, lookAtPosition.z]);
  }, [lookAtPosition]);

  useEffect(() => {
    // Initial look at
    setHasCameraTransition(false);
    setSlideNumber(positionNames.mill);
    setTimeout(() => {
      // TODO: Figure out a better way to handle going back to camera transition true
      setHasCameraTransition(true);
    }, 0);

    setNotification({ type: positionNames.initial });
  }, []);

  
  return (
    <>
      { performanceVisible && <Perf position={'top-left'}></Perf>}
      <CameraControls
          ref={cameraControlsRef}
          enabled={true}
        />
      <ambientLight position={[0, 4.5, 0]} intensity={0.5}></ambientLight>
      <pointLight position={[0, 4.5, 0]} intensity={1.1}></pointLight>
      
      <Book
        onDoubleClick={onRoomDoubleClick}
        onClick={onRoomClick}
      />

      <axesHelper position={[0, 3, 0]} args={[5]} />
    </>
  );
};
