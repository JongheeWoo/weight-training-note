import * as firebase from 'firebase';
import uuid from "uuid";
import moment from "moment";
import _ from "lodash";

export const saveRoutine = async ({
  id,
  userId,
  title,
  status,
  exercises
}) => {
  const exerciseResponses = await Promise.all(_.map(exercises, exercise => {
    return saveExercise(exercise);
  }));
  const routine = {
    userId,
    title,
    status,
    exerciseIds: _.map(exerciseResponses, exercise => exercise.id),
    updatedAt: moment().valueOf(),
    ...(Boolean(id) ? {} : {
      id: uuid(),
      createdAt: moment().valueOf()
    })
  };
  await firebase.database().ref('routine/' + routine.id).set(routine);
  return routine;
};

export const saveExercise = async ({
  id,
  name,
  minWeight,
  maxWeight,
  unit,
  sets,
  reps
}) => {
  const exercise = {
    name,
    minWeight,
    maxWeight,
    unit,
    sets,
    reps,
    updatedAt: moment().valueOf(),
    ...(Boolean(id) ? {} : {
      id: uuid(),
      createdAt: moment().valueOf()
    })
  };
  await firebase.database().ref('exercise/' + exercise.id).set(exercise);
  return exercise;
};

export const storeHighScore = (userId, score) => {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}