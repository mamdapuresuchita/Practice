import React, { useState ,useContext } from "react";
import ThemeContext from '../Context/ThemeContext'

const Comments = () => {
  const {darkMode} = useContext(ThemeContext);
  const [comments, setComments] = useState([]);

  const [message, setMessage] = useState("");

    const commentColor = {
        background :darkMode
    ? "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
    : "linear-gradient(180deg, #e0eafc, #cfdef3)",
    color:darkMode? "white" :"dark"
}

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      message,
    };

    setComments([newComment, ...comments]);

    setMessage("");
  };

  return (
    <div>
      <div className="container m-5 rounded-5" style={commentColor}>
        <h2 className="text-center py-4">Share your Thoughts</h2>
        <form className="text-center d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
          <input
            className="mx-3 w-50 p-2 rounded-2 border border-none"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Share your thoughts about Dr. Kalam..."
          ></input>

          <button className="btn btn-warning p-2 " type="submit">Post Comment</button>
        </form>

        <div className="displayComment d-flex flex-column justify-content-center m-5">
          <h3 className="text-center">Recent Comments</h3>
          {comments.length === 0 ? (
            <p className="text-center">No comments yet. Be the first to comment</p>
          ) : (
            <div className="text-center">
              {comments.map((c) => (
                <div key={c.id}
                className="mx-auto my-3 text-start p-1 rounded-3 shadow-sm"
                style={{
        maxWidth: "500px",
        background: darkMode
          ? "linear-gradient(180deg, #1f1f1f, #2d2d2d)"
          : "linear-gradient(180deg, #ffffff, #f5f7fa)",
        color: darkMode ? "white" : "#222",
        borderLeft: darkMode ? "4px solid #ffb703" : "4px solid #ff9800",
      }}>
                  <p>{c.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
