import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { sortByAlphabet, sortByAscending } from "../../utils";
import Header from "./Header";
import Rows from "./Rows";

const Table = ({ heading, data = [] }) => {
  const filterStatus = useRef(-1);
  const [tableData, setTableData] = useState(data);

  const filtersCallback = useCallback(
    ({ type, fieldName }) => {
      let sortedArray = [...data];
      filterStatus.current = filterStatus.current === 1 ? -1 : 1;
      if (type === "number") {
        sortedArray = [
          ...sortByAscending(sortedArray, fieldName, filterStatus.current)
        ];
      } else {
        sortedArray = [
          ...sortByAlphabet(sortedArray, fieldName, filterStatus.current)
        ];
      }
      setTableData(sortedArray);
    },
    [data, filterStatus]
  );

  return (
    <table>
      <tbody>
        <Header heading={heading} filtersCallback={filtersCallback} />
        {tableData.map(function(item, index) {
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
