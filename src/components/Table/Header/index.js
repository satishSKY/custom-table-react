import React from "react";
import PropTypes from "prop-types";

const Header = ({ heading, filtersCallback }) => {
  return (
    <tr>
      {heading.map((item, index) => (
        <th onClick={() => filtersCallback(item)} key={`th-${index}`}>
          {item.title.toUpperCase()}
        </th>
      ))}
    </tr>
  );
};

Header.propTypes = {
  filtersCallback: PropTypes.func.isRequired,
  heading: PropTypes.array.isRequired
};
export default Header;
