importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyCFt8oCEccawoxNvSl02Pdfa9XsNndDCag",
  authDomain: "nuxtjs-authentication.firebaseapp.com",
  databaseURL: "https://nuxtjs-authentication.firebaseio.com",
  projectId: "nuxtjs-authentication",
  storageBucket: "nuxtjs-authentication.appspot.com",
  messagingSenderId: "592441780686"
};
if (!firebase.apps[0]) {
  firebase.initializeApp(config);
}


const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
