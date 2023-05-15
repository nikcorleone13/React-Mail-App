import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import "src/App.css";

import { EmailDataContext } from "../contexts/EmailDataContext";

export const EmailCard = ({ emailObj }) => {
  const { isStarred, subject, content, unread, mId } = emailObj;
  const { buttonResponse } = useContext(EmailDataContext);
  return (
    <>
      <div
        style={{
          margin: "1rem",
          border: "3px solid #6c757d",
          borderRadius: "30px",
          padding: "1rem",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="head">
          <h2>Subject: {emailObj.subject}</h2>
          <button
            style={
              isStarred
                ? { backgroundColor: "gold", color: "black" }
                : {
                    backgroundColor: "whitesmoke",
                    border: "solid gold",
                    color: "gold",
                  }
            }
            id="star-button"
            onClick={() =>
              buttonResponse({ operation: "star", id: emailObj.mId })
            }
          >
            Star
          </button>
        </div>
        <div className="message-div">
          <p className="message">{content}......</p>
        </div>
        <div className="buttons-div">
          <div className="button-left">
            <Link id="more-link" to={`/mail/${mId}`}>
              More Details
            </Link>
          </div>
          <div className="button-right">
            <button
              className="card-buttons-3"
              id="delete-button"
              onClick={() =>
                buttonResponse({ operation: "delete", id: emailObj.mId })
              }
            >
              Delete
            </button>
            {unread ? (
              <div>
                <button
                  style={{ backgroundColor: "orange", color: "whitesmoke" }}
                  className="card-buttons-3"
                  id="read-button"
                  onClick={() =>
                    buttonResponse({ operation: "read", id: emailObj.mId })
                  }
                >
                  Mark as Read
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="card-buttons-3"
                  id="read-button"
                  onClick={() =>
                    buttonResponse({ operation: "unread", id: emailObj.mId })
                  }
                >
                  Mark as Unread
                </button>
              </div>
            )}

            <button
              className="card-buttons-3"
              id="spam-button"
              onClick={() =>
                buttonResponse({ operation: "spam", id: emailObj.mId })
              }
            >
              Report Spam
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
