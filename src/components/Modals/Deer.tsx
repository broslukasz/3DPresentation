import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { Modal } from './modal';

const customStyles: React.CSSProperties = {
  position: 'absolute',
  top: '62%',
  right: '4%',
  bottom: '14%',
  left: '54%',
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
};

export const Deer = () => {
  const { setNotification } = useNotifications();

  return (
    <Modal onClose={() => {
      setNotification({ type: null });
    }}
    style={customStyles}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>Content presentation</h2>
      <div style={{ marginTop: '30px'}}>
        <p style={{ margin: '0 0 20px 0' }}>You can present some content having in the background interesting elements</p>
      </div>
    </Modal>
  );
};
