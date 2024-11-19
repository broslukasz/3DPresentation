import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  style?: React.CSSProperties;
}

const defaultStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: 'rgba(253, 245, 230, 0.9)',
  border: '5px solid #8b4513',
  borderRadius: '15px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  fontFamily: "'Uncial Antiqua', cursive",
  textAlign: 'center',
};

export const Modal = ({children, onClose, style }: ModalProps) => (
  <div style={{ ...defaultStyles, ...style }}>
      {children}
      <button 
        onClick={onClose} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#8b4513',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: "'Uncial Antiqua', cursive",
        }}
      >
        Close
      </button>
    </div>
  );