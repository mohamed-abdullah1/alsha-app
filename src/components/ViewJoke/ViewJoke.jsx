import { useState } from "react";
import { useQueryClient } from "react-query";
import { useUpdateJoke, useViewJokes } from "../../hooks/useAlshaData";
import { BarLoader } from "react-spinners";
import styles from "./View.module.scss";

const ViewJoke = () => {
  const queryClient = useQueryClient();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  const {
    data: jokes,
    isLoading,
    isError,
    error,
  } = useViewJokes({
    select: (data) => {
      return data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    },
  });
  const { mutate } = useUpdateJoke({
    onSuccess: (res) => {
      queryClient.invalidateQueries("jokes-query");
    },
  });
  const [index, setIndex] = useState(0);

  console.log({ jokes });
  //##################### HANDLERS #######################
  const nextHandler = () => {
    setIndex((prev) => prev + 1);
    setLiked(false);
    setDisLiked(false);
  };
  const likeHandler = () => {
    if (jokes && !liked) {
      console.log("😀", jokes[index]);
      mutate({ ...jokes[index], likes: +jokes[index].likes + 1 });
      setLiked(true);
    } else if (jokes && liked) {
      mutate({ ...jokes[index], likes: +jokes[index].likes - 1 });
      setLiked(false);
    }
  };
  const dislikeHandler = () => {
    if (jokes && !disliked) {
      console.log("😀", jokes[index]);
      mutate({ ...jokes[index], dislikes: +jokes[index].dislikes + 1 });
      setDisLiked(true);
    } else if (jokes && disliked) {
      mutate({ ...jokes[index], dislikes: +jokes[index].dislikes - 1 });
      setDisLiked(false);
    }
  };
  const addHandler = () => {
    console.log("Handle Adding");
  };
  //##################### END HANDLERS #######################
  const likingStyle = {
    "border-bottom": "solid 2px black",
  };
  if (isError) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error?.message}</p>
      </div>
    );
  }
  if (jokes && jokes.length - 1 === index) {
    return (
      <>
        <div className={styles.container}>
          <p className={styles.alert}>😥النكت خلصت</p>
          <button onClick={addHandler} className={styles.mainBtn}>
            زود انت
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <BarLoader color="#ffa580" loading={isLoading} />
        ) : (
          <>
            <p className={styles.jokeContent}>
              {jokes && jokes[index]?.content}
            </p>
            <div className={styles.buttons}>
              <button
                disabled={index === jokes?.length - 1 || liked}
                onClick={dislikeHandler}
                style={disliked ? likingStyle : {}}
              >
                <img
                  height="15px"
                  width="15px"
                  src="https://img.icons8.com/emoji/344/egg-emoji.png"
                  alt="egg"
                />
                <p>{jokes && jokes[index]?.dislikes}</p>
              </button>

              <button
                className={styles.mainBtn}
                disabled={index === jokes?.length - 1}
                onClick={nextHandler}
              >
                اللى بعده
              </button>

              <button
                disabled={index === jokes?.length - 1 || disliked}
                onClick={likeHandler}
                style={liked ? likingStyle : {}}
              >
                <img
                  height="15px"
                  width="15px"
                  src="https://img.icons8.com/color/344/facebook-like-skin-type-3.png"
                  alt="egg"
                />
                <p>{jokes && jokes[index]?.likes}</p>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ViewJoke;
