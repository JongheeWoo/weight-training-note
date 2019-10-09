import * as firebase from 'firebase';

export const storeHighScore = (userId, score) => {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}