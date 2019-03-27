import firebase from "~/plugins/firebase";

export default function ({route, redirect, store}) {
  function notifyMe() {
    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
      });
    }
  }

  var messaging = firebase.messaging();

  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    }
  });

  notifyMe();
  store.dispatch("Notification_get");
  store.dispatch("Notifications_now");
  store.dispatch("isLoggedIn");
}
