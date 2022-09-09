import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useMutation, useQuery } from "react-query";

const jokesRef = collection(db, "jokes");

const addJoke = (joke) => {
  return addDoc(jokesRef, joke);
};
const getJokes = () => {
  return getDocs(jokesRef);
};
export const useAddJoke = () => {
  return useMutation(addJoke);
};

export const useViewJokes = (options) => {
  return useQuery("jokes-query", getJokes, options);
};
