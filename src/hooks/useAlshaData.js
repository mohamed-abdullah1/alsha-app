import { db } from "../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useMutation, useQuery } from "react-query";

const jokesRef = collection(db, "jokes");

const addJoke = (joke) => {
  return addDoc(jokesRef, {
    ...joke,
    approved: true,
    categoryId: 1,
    dislikes: 0,
    likes: 0,
  });
};
const getJokes = () => {
  return getDocs(jokesRef);
};
const updateJoke = (joke) => {
  const jokeDocRef = doc(db, "jokes", joke?.id);
  return updateDoc(jokeDocRef, joke);
};
export const useAddJoke = (options) => {
  return useMutation(addJoke, options);
};

export const useViewJokes = (options) => {
  return useQuery("jokes-query", getJokes, options);
};
export const useUpdateJoke = (options) => {
  return useMutation(updateJoke, options);
};
