type AppNotification = {
  body: string;
};

export const useNotification = () => {
  function isNavigatorSupported() {
    return 'Notification' in window;
  }

  function isPermissionDenied() {
    return Notification.permission === 'denied';
  }

  function isPermissionGranted() {
    return Notification.permission === 'granted';
  }

  function askPermission() {
    if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Pomodoro', {
            body: "We'll keep you updated! Every time one of your timers finishes, we'll send you a reminder here.",
          });
        }
      });
    }
  }

  function notify(title: string, notification: AppNotification) {
    if (!isNavigatorSupported()) return;

    if (isPermissionGranted()) {
      new Notification(title, notification);
    } else if (isPermissionDenied()) {
      askPermission();
    }
  }

  return {
    notify,
    isNavigatorSupported,
    isPermissionGranted,
    isPermissionDenied,
    askPermission,
  };
};
