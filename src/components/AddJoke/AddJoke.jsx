import { useRef } from "react";
import { BarLoader } from "react-spinners";
import { useAddJoke } from "../../hooks/useAlshaData";
import styles from "./AddJoke.module.scss";
const AddJoke = ({ showHandler }) => {
  const contentRef = useRef(); //content
  const authorRef = useRef(); // author

  const { mutate, isLoading, isError, error } = useAddJoke({
    onSuccess: () => showHandler(),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const joke = {
      content: contentRef.current.value,
      author: authorRef.current.value,
    };
    console.log(joke);
    mutate(joke);
  };
  if (!isLoading && isError) {
    return <form className={styles.form}> {error?.message}</form>;
  }
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        {isLoading ? (
          <BarLoader color="#ffa580" loading={isLoading} />
        ) : (
          <>
            <textarea
              type="text"
              placeholder="النكته"
              rows="4"
              cols="1"
              ref={contentRef}
              required={true}
            ></textarea>
            <input
              required={true}
              type="text"
              placeholder="صاحب النكتة"
              ref={authorRef}
            />
            <button className={styles.btn} type="submit">
              حطها
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddJoke;
