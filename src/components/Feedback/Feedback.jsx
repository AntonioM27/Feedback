import { useEffect, useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (reviews.length === 0) return;
    alert("Feedback added");
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || comment.trim() === "") {
      alert("Please give name and leave a comment");
      return;
    }

    const newReview = { id: Date.now(), name, comment };
    setReviews((prev) => [...prev, newReview]);

    setName("");
    setComment("");
  };

  return (
    <div>
      <h2>Give us Feedback</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name'input">Name:</label>
        <input
          id="name'input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="comment'input">Comment:</label>
        <input
          id="comment'input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Post</button>
      </form>
      <div>
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((r) => (
              <li key={r.id}>
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
