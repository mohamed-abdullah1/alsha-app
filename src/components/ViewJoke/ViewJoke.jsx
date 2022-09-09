import { useState } from "react";
import { useViewJokes } from "../../hooks/useAlshaData";

const ViewJoke = () => {
  const { data: jokes } = useViewJokes({
    select: (data) => {
      return data?.docs.map((doc) => ({ ...doc.data() }));
    },
  });
  const [index, setIndex] = useState(0);
  console.log({ jokes });
  const nextHandler = () => {
    setIndex((prev) => prev + 1);
  };
  return (
    <>
      <div>{jokes[index]?.content}</div>
      <button disabled={index === jokes.length - 1} onClick={nextHandler}>
        NEXT
      </button>
    </>
  );
};

export default ViewJoke;
