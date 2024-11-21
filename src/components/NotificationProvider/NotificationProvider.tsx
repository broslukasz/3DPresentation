import * as React from 'react';
import { Initial } from '../Modals/Initial';
import { positionNames } from '../Models/position-names.enum';
import { Deer } from '../Modals/Deer';

type NotificationContextType = {
  notification: { type: positionNames };
  setNotification: React.Dispatch<React.SetStateAction<{ type: positionNames }>>;
};

const NotificationContext = React.createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = (): NotificationContextType => {
  const context = React.useContext<NotificationContextType | undefined>(NotificationContext);

  if (!context) {
    // Workaround for live editing css
    // return { notification: { type: positionNames.initial }, setNotification: () => {} };
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }

  return context;
};

export default function NotificationProvider(props: { children: any }) {
  const [notification, setNotification] = React.useState({ type: null });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification.type === positionNames.initial && <Initial />}
      {notification.type === positionNames.deer && <Deer />}
      {props.children}
    </NotificationContext.Provider>
  );
}
