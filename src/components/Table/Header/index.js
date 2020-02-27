import React from "react";
import PropTypes from "prop-types";

const Header = ({ heading }) => {
  return (
    <tr>
      {heading.map((key, index) => (
        <th key={`th-${index}`}>{key.toUpperCase()}</th>
      ))}
    </tr>
  );
};

Header.propTypes = {
  heading: PropTypes.array.isRequired
};
export default Header;
