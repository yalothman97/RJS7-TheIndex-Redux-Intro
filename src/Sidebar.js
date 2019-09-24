import React from "react";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button
          className="btn btn-block btn-light"
          onClick={props.addAuthorHandler}
        >
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
}

export default Sidebar;
