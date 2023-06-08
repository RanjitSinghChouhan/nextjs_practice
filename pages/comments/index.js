import React, { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async() => {
    const response = await fetch("api/comments",{
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: {
            'Content-type':'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleComments}>List of comments</button>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      {comments.map((comment) => {
        return (
          <>
            <h3>
              {comment.id}: {comment.text}
            </h3>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default Comments;
