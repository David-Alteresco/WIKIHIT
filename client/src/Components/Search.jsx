import React, { useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import WikiList from './WikiList';

function Search() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResults, setSearchResults] = useState([]);

   const submit = async() => {
    const wikiData = await axios.post(`${process.env.REACT_APP_API_KEY}api/wikisearch/title`,{title: searchTitle})
    setSearchResults (wikiData.data.query.search);
   }

  return (
    <div>
      <TextField
        onChange={(e) => setSearchTitle(e.target.value)}
        label="Search title from WIKI"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={submit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <WikiList listResults={searchResults}/>
      

    </div>
  );
}

export default Search;
