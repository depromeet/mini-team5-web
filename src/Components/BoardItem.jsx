import React from "react";
import { Link } from "react-router-dom";


export default ({ keyword }) => {
  const url = `boards/${keyword}/comments`;
  return (
    <div>
      <Link to={{ pathname: url, state: { keyword } }}>{keyword}</Link>
    </div>
  );
};
