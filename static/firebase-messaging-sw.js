import firebase from "~/plugins/firebase";

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BK05JP91BVFnCHgDYRM-q0I7dqgCwyTlFs2k4Z152HHU2Ben9NfuZjz9duR2y7TSBfJh1r7Im2FOdT-7i8SXy34");


messaging.getToken().then(function (currentToken) {
  if (currentToken) {

  }
});
