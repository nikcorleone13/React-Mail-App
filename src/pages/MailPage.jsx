import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { EmailDataContext } from "../contexts/EmailDataContext";
import { EmailCard } from "../components/EmailCard";
import { mails } from "../contexts/fakeFetch";
const response = mails;

export const MailPage = () => {
  const { mailId } = useParams();
  const { emailData } = useContext(EmailDataContext);

  const findObj = response.filter((item) => item.mId === mailId);
  console.log("find", findObj);

  return (
    <>
      {findObj.map(({ subject, content }) => {
        return (
          <div
            style={{
              margin: " 2rem 0",
              padding: "2rem",
              maxWidth: "50vw",
              border: "2px solid black",
              justifyContent: "center",
            }}
          >
            <h2>Subject: {subject}</h2>
            <p style={{ fontSize: "20px" }}>{content}</p>
          </div>
        );
      })}
      <Link id="more-link" to="/">
        Go to Home
      </Link>
    </>
  );
};
