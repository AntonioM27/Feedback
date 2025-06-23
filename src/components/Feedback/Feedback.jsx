import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const postComment = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Please give name and leave a comment");
      return;
    }

    const newReview = { name, comment };
    setReviews((prev) => [...prev, newReview]);

    setName("");
    setComment("");
  };

  return (
    <div>
      <h2>Give us Feedback</h2>
      <label htmlFor="name'input">Name:</label>
      <input
        id="name'input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="comment'input">Comment:</label>
      <input
        id="comment'input"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button onClick={postComment}>Post</button>
      <div>
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((r) => (
              <li>
                {r.name}: {r.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Feedback;
