import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { Modal } from './modal';

const customStyles: React.CSSProperties = {
  position: 'absolute',
  inset: '2% auto auto 5%',
  transform: 'translate(0, 0)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  border: '5px solid #8b4513',
  borderRadius: '15px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  fontFamily: "'Uncial Antiqua', cursive",
  textAlign: 'center',
  width: '25vw',
  minHeight: '172px',
};

export const CastleWall = () => {
  const { setNotification } = useNotifications();

  return (
    <Modal onClose={() => {
      setNotification({ type: null });
    }}
    style={customStyles}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>Learn 3D in javascript</h2>
      <div style={{ marginTop: '30px'}}>
        <p style={{ margin: '0 0 20px 0' }}>If you want to lear about Three.js and React Three Fiber find here the best materials:</p>
        <p style={{ margin: '0 0 20px 0' }}>https://threejs-journey.com/ - The best cours ever</p>
        <p style={{ margin: '0 0 20px 0' }}>https://www.youtube.com/c/wawasensei - Instructing movies for different application types or effects (know-how)</p>
      </div>
    </Modal>
  );
};
