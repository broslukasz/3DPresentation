import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { Modal } from './modal';

const customStyles: React.CSSProperties = {
  position: 'absolute',
  inset: 'auto 25% 5% auto',
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

export const FarmCloser = () => {
  const { setNotification } = useNotifications();

  return (
    <Modal onClose={() => {
      setNotification({ type: null });
    }}
    style={customStyles}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>HTML / CSS / objects live edit</h2>
      <div style={{ marginTop: '30px'}}>
        <p style={{ margin: '0 0 20px 0' }}>You can edit html / css and objects on the scene with live reload</p>
      </div>
    </Modal>
  );
};
