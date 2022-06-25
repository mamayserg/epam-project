import { useState, useEffect } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  sortBy,
  queryParamsKeys,
  sortOrder,
} from "../../constants/searchParams";
import "./sortMovieSelect.css";
import { useQueryParam } from "../../hooks/use-query-param";

export default function SortMoviesSelect() {
  const [sortByParam, setSortByParam, allQueryParams] = useQueryParam(
    queryParamsKeys.SORT_BY
  );
  const [sortOrderParam ] = useQueryParam(
    queryParamsKeys.SORT_ORDER
  );

  const [value, setValue] = useState("");
 
  useEffect(() => {  
    if (sortByParam && sortOrderParam) {
      setValue(sortByParam);
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);

    const queryParams = {
      ...allQueryParams,
      [queryParamsKeys.SORT_ORDER]: sortOrder.DESC,
    };
    setSortByParam(event.target.value, queryParams )
  };

  return (
    <div className="pt-1">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
        >
          {sortBy.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <span className="text-xs text-white font-light uppercase">
                {item.name}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
