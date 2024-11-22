import * as React from 'react';
import { Initial } from '../Modals/Initial';
import { positionNames } from '../Models/position-names.enum';
import { Deer } from '../Modals/Deer';
import { Mill } from '../Modals/Mill';
import { Fisher } from '../Modals/Fisher';
import { Farm } from '../Modals/Farm';
import { FarmCloser } from '../Modals/FarmCloser';
import { CastleEnter } from '../Modals/CastleEnter';
import { CastleInside } from '../Modals/CastleInside';
import { CastleWall } from '../Modals/CastleWall';
import { WorldFromTop } from './WorldFromTop';
import { Hill } from './Hill';

type NotificationContextType = {
  notification: { type: positionNames };
  setNotification: React.Dispatch<React.SetStateAction<{ type: positionNames }>>;
};

const NotificationContext = React.createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = (): NotificationContextType => {
  const context = React.useContext<NotificationContextType | undefined>(NotificationContext);

  if (!context) {
    // Workaround for live editing css
    return { notification: { type: positionNames.initial }, setNotification: () => {} };
    // throw new Error('useNotificationContext must be used within a NotificationProvider');
  }

  return context;
};

export default function NotificationProvider(props: { children: any }) {
  const [notification, setNotification] = React.useState({ type: null });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification.type === positionNames.initial && <Initial />}
      {notification.type === positionNames.deer && <Deer />}
      {notification.type === positionNames.mill && <Mill />}
      {notification.type === positionNames.fisher && <Fisher />}
      {notification.type === positionNames.farm && <Farm />}
      {notification.type === positionNames.hill && <Hill />}
      {notification.type === positionNames.farmCloser && <FarmCloser />}
      {notification.type === positionNames.CastleEnter && <CastleEnter />}
      {notification.type === positionNames.CastleInside && <CastleInside />}
      {notification.type === positionNames.CastleWall && <CastleWall />}
      {notification.type === positionNames.WorldFromTop && <WorldFromTop />}
      {props.children}
    </NotificationContext.Provider>
  );
}
