import React, { useEffect, useReducer, useState } from "react";

import { mails } from "./fakeFetch";
import { EmailDataContext } from "./EmailDataContext";

//3 types of mails folder
const response = mails;
const trashData = [];
const spamData = [];

const allData = { response, trashData, spamData };

//=============reducer function definition=============
const handleButtonsFunctionality = (state, action) => {
  const { response, trashData, spamData } = state;
  const { operation, id } = action;

  //=============Star operation//=============
  if (operation === "star") {
    const updateObj = response.map((item) =>
      item.mId === id ? { ...item, isStarred: !item.isStarred } : item
    );
    return { response: updateObj, trashData, spamData };
  }

  //=============read/unread//=============
  else if (operation === "read" || operation === "unread") {
    const updateObj = response.map((item) =>
      item.mId === id ? { ...item, unread: !item.unread } : item
    );
    console.log("read obj", updateObj);
    return { response: updateObj, trashData, spamData };
  }

  //=============delete op//=============
  else if (operation === "delete") {
    const deletedObj = response.find((item) => item.mId === id);
    const updateObj = response.filter((item) => item.mId !== id);

    console.log("new delete", updateObj);
    return {
      response: updateObj,
      trashData: [...trashData, deletedObj],
      spamData,
    };
  }

  //=============spam//=============
  else if (operation === "spam") {
    const spamObj = response.find((item) => item.mId === id);
    const updateObj = response.filter((item) => item.mId !== id);
    return {
      response: updateObj,
      trashData,
      spamData: [...spamData, spamObj],
    };
  }
  //=============default=============
  else {
    return state;
  }
};

export const EmailDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleButtonsFunctionality, allData);

  // <<<<---------response from button--------->>>
  const buttonResponse = (obj) => {
    console.log("btn resp", { btnResp: obj });
    dispatch(obj);
  };

  return (
    <EmailDataContext.Provider
      value={{
        emailData: state,
        buttonResponse: buttonResponse,
      }}
    >
      {children}
    </EmailDataContext.Provider>
  );
};
