import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { searchDocuments } from "../api/documents";
import style from "../Style/documentSearchList.module.scss";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";

function DocumentSearch() {
  // TODO: Implement search functionality
  const [searchData, setSearchData] = useState("");
  const [searchQuery, setSearchQuery] = useState([]);
  const [show, setShow] = useState(false);
  // use navigate 
  const navigate = useNavigate();
 
  useEffect(() => {
    handleSearchData();
  }, [searchData]);

  
  // when user search something using title or content then it send that query in backend to check that title or content is present or not
  const handleSearchData = async () => {
    if (searchData.trim()) {
      try {
        const search = await searchDocuments(searchData);
        // if search have some data then set that data to show using list
        if (search && search.length > 0) {
          setSearchQuery(search);
        } else {
          // else set data empty
          setSearchQuery([]);
        }
        // it set true to show list of data
        setShow(true);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      // default we keep data is empty
      setSearchQuery([]);
      setShow(false);
    }
 };

  //  navigate when user click to list, this will navigate user to that particular list data page 
  const handleNavigate = (id) => {
    navigate(`/view/${id}`);
  };

  const handleLogout = ()=>{
      sessionStorage.removeItem("user")
      navigate(`/login`);
      
  }
  const userName = JSON.parse(sessionStorage.getItem("user"));  
   
  // return JSX
  return (
    <div style={{ position: "relative" }}>
      {" "}
      {userName &&  
      <Typography variant="h4" component="h2" color="primary" textAlign="center" gutterBottom>
        {userName?.name} 
      </Typography>
      } 
      <Button
        onClick={handleLogout}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        LogOut
      </Button> 
      <TextField
        label="Search Documents"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      {show && (
        <div className={style.list_show}>
          {searchQuery.length > 0 ? (
            <List>
              {searchQuery.map((doc) => (
                <ListItem key={doc.id} className={style.list_data}>
                  <ListItemText
                    onClick={() => handleNavigate(doc.id)}
                    primary={doc.title}
                    secondary={`${doc.type} - ${new Date(
                      doc.createdAt
                    ).toLocaleDateString()}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>Data not found</Typography>
          )}
        </div>
      )}
    </div>
  );
}

export default DocumentSearch;
