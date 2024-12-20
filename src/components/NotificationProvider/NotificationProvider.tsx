import * as React from 'react';
import { Initial } from '../Dialogs/Initial';
import { positionNames } from '../TypescriptModels/position-names.enum';
import { Deer } from '../Dialogs/Deer';
import { Mill } from '../Dialogs/Mill';
import { Fisher } from '../Dialogs/Fisher';
import { Farm } from '../Dialogs/Farm';
import { FarmCloser } from '../Dialogs/FarmCloser';
import { CastleEnter } from '../Dialogs/CastleEnter';
import { CastleInside } from '../Dialogs/CastleInside';
import { CastleWall } from '../Dialogs/CastleWall';
import { WorldFromTop } from '../Dialogs/WorldFromTop';
import { Hill } from '../Dialogs/Hill';

type NotificationContextType = {
  notification: { type: positionNames };
  setNotification: React.Dispatch<React.SetStateAction<{ type: positionNames }>>;
};

const NotificationContext = React.createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = (): NotificationContextType => {
  const context = React.useContext<NotificationContextType | undefined>(NotificationContext);

  if (!context) {
    // Workaround for live editing CSS / HTML
    // Tip: uncomment return and comment out throw
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
