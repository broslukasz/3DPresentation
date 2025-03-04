import { CastleEnter } from '../Dialogs/CastleEnter';
import { CastleInside } from '../Dialogs/CastleInside';
import { CastleWall } from '../Dialogs/CastleWall';
import { Deer } from '../Dialogs/Deer';
import { Farm } from '../Dialogs/Farm';
import { FarmCloser } from '../Dialogs/FarmCloser';
import { Fisher } from '../Dialogs/Fisher';
import { Hill } from '../Dialogs/Hill';
import { Initial } from '../Dialogs/Initial';
import { Mill } from '../Dialogs/Mill';
import { WorldFromTop } from '../Dialogs/WorldFromTop';
import { useNotifications } from '../NotificationProvider/NotificationProvider';
import { positionNames } from '../TypescriptModels/position-names.enum';
import './dialogs-interface.css';

const DialogsInterface = () => {
  const {notification} = useNotifications();
  return (
    <>
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
    </>
  );
};

export default DialogsInterface;