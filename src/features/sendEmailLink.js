import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000/',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};
const auth = getAuth();

export default function sendEmailLink(email) {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          alert('The link was successfully sent. Please check your email.')
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message)
        });
}