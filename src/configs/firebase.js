import * as firebase from 'firebase';

export const initialize = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCcaZ2xE-qsMwKFms3O2rmx6m84H9UxHOk",
    databaseURL: "https://weight-training-note.firebaseio.com/"
  };

  firebase.initializeApp(firebaseConfig);
};