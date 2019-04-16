import React from "react";
import { connect } from "react-redux";
import CategoryList from "./CategoryList";

function CategoryListContainer({ categories }) {
  return !categories.isFetching && <CategoryList categories={categories} />;
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(CategoryListContainer);
