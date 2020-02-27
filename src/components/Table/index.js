import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Rows from "./Rows";

const Table = ({ heading, data = [] }) => {
  return (
    <table>
      <tbody>
        <Header heading={heading} />
        {data.map(function(item, index) {
          return <Rows key={`rows-${index}`} row={item} />;
        })}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  data: PropTypes.array.isRequired,
  heading: PropTypes.array.isRequired
};

export default Table;
