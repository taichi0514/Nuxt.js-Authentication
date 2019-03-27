console.log("dfdfs");
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const config = {
  messagingSenderId: "592441780686"
}
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  console.log('Message received. ', payload);
  // ...
});
