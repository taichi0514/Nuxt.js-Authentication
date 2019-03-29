import firebase from 'firebase'
// Initialize Firebase
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

export default firebase

