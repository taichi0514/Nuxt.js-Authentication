import firebase from "~/plugins/firebase";

export default function ({route, redirect, store}) {
  function notifyMe() {
    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
      });
    }
  }

  const messaging = firebase.messaging();
  // messaging.usePublicVapidKey(process.env.NUXT_ENV_USE_PUBLIC_VAPID_KEY);
  messaging.requestPermission().then(() => {
    messaging.onMessage(function (payload) {
      console.log('Message received. ', payload);
      const spawnNotification = (theTitle, theBody, theIcon) => {
        const options = {
          title: theTitle,
          body: theBody,
          icon: theIcon,
          vibrate: [200, 100, 200]
        };
        const n = new Notification(theTitle, options);
        setTimeout(n.close.bind(n), 5000);
      };
      spawnNotification("fdsdf", "ttl");
    });
  });

  notifyMe();
  store.dispatch("Notification_get");
  store.dispatch("Notifications_now");
  store.dispatch("isLoggedIn");
}
