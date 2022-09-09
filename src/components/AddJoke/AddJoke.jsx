import { useRef } from "react";
import Select from "react-select";
import { useAddJoke } from "../../hooks/useAlshaData";
const AddJoke = () => {
  const contentRef = useRef(); //content
  const authorRef = useRef(); // author
  const approvedRef = useRef(); // approved
  const categoryIdRef = useRef(); // categoryId
  const likesRef = useRef(); // likes
  const dislikesRef = useRef(); // dislikes

  const { mutate, isLoading, isError, error } = useAddJoke();

  const approvedOptions = [
    {
      value: true,
      label: "Approved",
    },
    { value: false, label: "not-Approved" },
  ];
  const categoriesOptions = [
    {
      value: 1,
      label: "Job",
    },
    { value: 2, label: "Life" },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    const joke = {
      content: contentRef.current.value,
      author: authorRef.current.value,
      approved: approvedRef.current.getValue()[0].value,
      categoryId: categoryIdRef.current.getValue()[0].value,
      likes: likesRef.current.value,
      dislikes: dislikesRef.current.value,
    };
    console.log(joke);
    mutate(joke);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <textarea
          type="text"
          placeholder="content"
          rows="4"
          cols="50"
          //   maxLength="200"
          ref={contentRef}
        ></textarea>
        <input type="text" placeholder="author" ref={authorRef} />
        <Select options={approvedOptions} ref={approvedRef} />
        <Select options={categoriesOptions} ref={categoryIdRef} />
        <input type="number" placeholder="likes" ref={likesRef} />
        <input type="number" placeholder="dislikes" ref={dislikesRef} />
        <button type="submit">Add Joke</button>
      </form>
      {isLoading && <p>LOADING ...</p>}
      {!isLoading && isError && <p>{error?.message}</p>}
    </>
  );
};

export default AddJoke;
