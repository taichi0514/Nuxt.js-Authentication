import GitHub from 'github-api'
import moment from 'moment'

export default function ({route, redirect, store}) {
  function notifyMe() {
    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
      });
    }
  }


  notifyMe();
  store.dispatch('Notification_get');
  store.dispatch('Notifications_now');
  store.dispatch('isLoggedIn');

}
