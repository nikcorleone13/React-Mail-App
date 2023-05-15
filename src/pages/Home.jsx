import React, { useContext, useEffect, useState } from "react";

import { MainNav } from "../components/MainNav";
import { EmailDataContext } from "../contexts/EmailDataContext";
import { EmailCard } from "../components/EmailCard";

export const Home = () => {
  const { emailData } = useContext(EmailDataContext);
  const { response } = emailData;

  //===========initialize filter================
  const [filter, setFilter] = useState({
    isStarred: false,
    unread: false,
  });

  const handleFilter = (filterName) => {
    setFilter((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const filteredData = response.filter((item) => {
    if (filter.isStarred && !item.isStarred) {
      return false;
    }
    if (filter.unread && !item.unread) {
      return false;
    }
    return true;
  });

  const unReadNum = response.reduce(
    (sum, item) => (item.unread ? (sum += 1) : sum),
    0
  );

  console.log("filterd data", filteredData);
  return (
    <>
      <div>
        <MainNav />
        <div className="filter-div">
          <label style={{ marginRight: "2rem" }}>
            <input
              type="checkbox"
              onClick={() => handleFilter("isStarred")}
              style={{ backgroundColor: "white" }}
            />
            Show Starred
          </label>
          <label style={{ marginLeft: "2rem" }}>
            <input type="checkbox" onClick={() => handleFilter("unread")} />
            Show Unread Emails
          </label>
        </div>
        <div id="unread-div">
          <h2 id="unread-emails">Unread Emails: {unReadNum}</h2>
        </div>

        {filteredData.map((item) => (
          <React.Fragment key={item.mId}>
            <EmailCard emailObj={item} />
          </React.Fragment>
        ))}
        {/* ============unread emails============ */}
      </div>
    </>
  );
};
