import React from "react";
import PropTypes from "prop-types";

const Rows = ({ row }) => {
  return (
    <tr>
      {Object.keys(row).map((key, index) => (
        <td key={`row-td-${index}`}>{row[key]}</td>
      ))}
    </tr>
  );
};

Rows.propTypes = {
  row: PropTypes.object.isRequired
};

export default Rows;
