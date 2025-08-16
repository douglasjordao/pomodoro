import { useToast } from 'primevue';
import { useConfirm } from 'primevue';
import { ref } from 'vue';

type AppNotification = {
  body: string;
};

const procedeWithoutNotification = ref<boolean>();

export const useNotification = () => {
  const confirm = useConfirm();
  const toast = useToast();

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
    if (isPermissionDenied()) {
      toast.add({
        severity: 'error',
        summary: 'Notifications blocked',
        detail:
          'It looks like notifications have been blocked for this site. To receive alerts, please enable notifications again in your browser settings or reset the permissions.',
        closable: true,
      });

      procedeWithoutNotification.value = true;

      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Pomodoro', {
          body: "We'll keep you updated! Every time one of your timers finishes, we'll send you a reminder here.",
        });
      }
    });
  }

  function notify(title: string, notification: AppNotification) {
    if (!isNavigatorSupported()) return;

    if (isPermissionGranted()) {
      new Notification(title, notification);
    } else if (isPermissionDenied()) {
      askPermission();
    }
  }

  function showNotificationDisclaimer() {
    confirm.require({
      message: `This app can show reminders as notifications on your computer.
      For a better experience, we recommend allowing them. If you agree, your browser will ask for permission first.`,
      header: 'Notifications',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptProps: {
        label: 'Accept',
        outlined: true,
      },
      accept: () => {
        askPermission();
      },
      reject: () => {
        procedeWithoutNotification.value = true;
      },
    });
  }

  return {
    notify,
    isNavigatorSupported,
    isPermissionGranted,
    isPermissionDenied,
    askPermission,
    showNotificationDisclaimer,
    procedeWithoutNotification,
  };
};
