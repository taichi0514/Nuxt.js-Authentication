import firebase from "~/plugins/firebase";

export default function ({route, redirect, store}) {
  function notifyMe() {
    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
      });
      // Retrieve Firebase Messaging object.
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey("BK05JP91BVFnCHgDYRM-q0I7dqgCwyTlFs2k4Z152HHU2Ben9NfuZjz9duR2y7TSBfJh1r7Im2FOdT-7i8SXy34");

    }


    notifyMe();
    store.dispatch("Notification_get");
    store.dispatch("Notifications_now");
    store.dispatch("isLoggedIn");
  }
