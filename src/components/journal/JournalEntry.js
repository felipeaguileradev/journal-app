import React from "react";

const JournalEntry = ({ value }) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal_entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Duis deserunt reprehenderit ea deserunt sit mollit.
        </p>
        <p className="journal__entry-content">
          Veniam dolore eiusmod consectetur irure velit cillum eiusmod et ad
          consequat duis elit cupidatat culpa.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
