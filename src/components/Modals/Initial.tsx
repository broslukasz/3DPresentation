import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { Modal } from './modal';

const customStyles: React.CSSProperties = {
  position: 'absolute',
  inset: '5% auto auto 5%',
  transform: 'translate(0, 0)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  border: '5px solid #8b4513',
  borderRadius: '15px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  fontFamily: "'Uncial Antiqua', cursive",
  textAlign: 'center',
  width: '25vw'
  // minHeight: '172px',
};

export const Initial = () => {
  const { setNotification } = useNotifications();

  return (
    <Modal onClose={() => {
      setNotification({ type: null });
    }}
    style={customStyles}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>Welcome to the tour in 3D space</h2>
      <div style={{ marginTop: '30px'}}>
        <p style={{ margin: '0 0 20px 0' }}>Switch between slids using keybord left / right arrow. Or simply double click somwhere on the scene :)</p>
      </div>
    </Modal>
  );
};
