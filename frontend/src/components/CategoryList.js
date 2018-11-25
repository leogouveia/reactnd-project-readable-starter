import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    !categories.isFetching && (
      <div className="column">
        <div className="buttons tile is-vertical">
          <div className="tile">
            <NavLink className="button is-light is-small is-rounded" exact to={'/'} activeClassName='is-dark'>All</NavLink>
          </div>
          {Array.isArray(categories.items) && categories.items.map(item => (
            <div className="tile" key={item.path} >
              <NavLink className="button is-light is-small is-rounded" to={`/categories/${item.path}`} activeClassName='is-dark'>{item.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
    )
  )
}

const mapStateToProps = ({ categories }) => ({ categories });

export default withRouter(connect(mapStateToProps)(CategoryList));
