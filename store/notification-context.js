import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notifiacationData) {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (props) => {
  const [activeNotication, setActiveNotfication] = useState();

  const showNotficationHandler = (notificationData) => {
    setActiveNotfication(notificationData);
  };

  const hideNotficationHandler = (notificationData) => {
    setActiveNotfication(null);
  };

  const context = {
    notification: activeNotication,
    showNotification: showNotficationHandler,
    hideNotification: hideNotficationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
