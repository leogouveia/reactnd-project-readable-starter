import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <div className="column">
      <div className="buttons tile is-vertical">
        <div className="tile">
          <NavLink
            className="button is-light is-small is-rounded"
            exact
            to={"/"}
            activeClassName="is-dark"
          >
            All
          </NavLink>
        </div>
        {Array.isArray(categories.items) &&
          categories.items.map(item => (
            <div className="tile" key={item.path}>
              <NavLink
                className="button is-light is-small is-rounded"
                to={`/categories/${item.path}`}
                activeClassName="is-dark"
              >
                {item.name}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
}
CategoryList.propTypes = {
  categories: PropTypes.object
};

export default withRouter(CategoryList);
