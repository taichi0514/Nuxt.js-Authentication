export default function ({store, redirect}) {
  // ユーザーが認証されていないとき
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("できてる");
      return redirect('/mypage')
    } else {
      // No user is signed in.
      console.log("できてない");
    }
  });
}



