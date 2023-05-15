import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MainNav } from "../components/MainNav";
import { EmailCard } from "../components/EmailCard";
import { EmailDataContext } from "../contexts/EmailDataContext";

export const Spam = () => {
  const { emailData } = useContext(EmailDataContext);
  const { spamData } = emailData;
  console.log("trash page data", spamData);
  // console.log(Array.isArray(trashData));
  // const trash

  return (
    <>
      <div>
        <MainNav />
        {Object.values(spamData).map((item) => {
          const { isStarred, subject, content, unread, mId } = item;
          return (
            <div
              key={mId}
              style={{
                margin: "1rem",
                borderRadius: "30px",
                border: "3px solid #6c757d",
                padding: "1rem",
                backgroundColor: "#f8f9fa",
              }}
            >
              <div className="head">
                <h2>Subject: {subject}</h2>
              </div>
              <div className="message-div">
                <p className="message">{content}......</p>
              </div>
              <div className="buttons-div">
                <div className="button-left"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
