import { Fragment, useContext } from 'react';

import Notification from '../ui/notification/notification';
import MainHeader from './main-header';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotication = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotication && (
        <Notification
          title={activeNotication.title}
          message={activeNotication.message}
          status={activeNotication.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
