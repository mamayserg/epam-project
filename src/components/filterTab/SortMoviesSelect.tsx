import React, { useState, useEffect } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  sortBy,
  queryParamsKeys,
  sortOrder,
} from "../../constants/searchParams";
import { useQueryParam, queryParam } from "../../hooks/use-query-param";
import { SelectChangeEvent } from "@mui/material";

type allQueryParamsType =
  | string
  | {
      [k: string]: any;
    }
  | null;

export default function SortMoviesSelect() {
  const [sortByParam, setSortByParam, allQueryParams] = useQueryParam(
    queryParamsKeys.SORT_BY
  );
  const [sortOrderParam ] = useQueryParam(
    queryParamsKeys.SORT_ORDER
  );

  const [value, setValue] = useState<allQueryParamsType>("");
 
  useEffect(() => {  
    if (sortByParam && sortOrderParam) {
      setValue(sortByParam);
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);

    const queryParams = {
      ...allQueryParams as queryParam,
      [queryParamsKeys.SORT_ORDER]: sortOrder.DESC,
    };
    setSortByParam(event.target.value as string, queryParams )
  };

  return (
    <div className="pt-1">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          aria-label="sort-movie"
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