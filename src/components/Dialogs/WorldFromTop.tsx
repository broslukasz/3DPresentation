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
  width: '25vw',
  minHeight: '172px',
};

export const WorldFromTop = () => {
  const { setNotification } = useNotifications();

  return (
    <Modal onClose={() => {
      setNotification({ type: null });
    }}
    style={customStyles}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>Thank you for your attention :)</h2>
      <div style={{ marginTop: '30px'}}>
        <p>Models:</p>
        <p>
          <a href="https://sketchfab.com/3d-models/medieval-fantasy-book-06d5a80a04fc4c5ab552759e9a97d91a">Medival Book</a>
          <span> (Pixel)</span>
        </p>
        <p>
          <a href="https://sketchfab.com/3d-models/pine-tree-e52769d653cd4e52a4acff3041961e65">Pine Tree</a>
          <span> (Andriy Shekh)</span>
        </p>
      </div>
    </Modal>
  );
};
