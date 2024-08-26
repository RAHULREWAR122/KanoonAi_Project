import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { fetchDocuments } from "../api/documents";
import { useNavigate } from "react-router-dom";

function DocumentList() {
  // TODO: Implement fetching documents from API
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  
  // use navigate to navigate other page
  const navigate = useNavigate();
  const documents = data;
  
  // use useEffect to fetch data when component render
  useEffect(() => {
    fetchData();
  }, []);
   
  // fetch data 
  const fetchData = async () => {
    try {
      const data = await fetchDocuments();
      setData(data);
    } catch (err) {
      setLoad(true);
    } finally {
      setLoad(false);
    }
  };

  
  // check load is true or false if true then show loading
  if (load) {
    return <h1>Loading...</h1>;
  }

  //handle navigate page
  const handleNavigate = (id) => {
    navigate(`/view/${id}`);
  };

  // return JSX
  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        Document List
      </Typography>
      <List>
        {documents.map((doc) => (
          <ListItem key={doc.id}>
            <ListItemText
              onClick={() => handleNavigate(doc.id)}
              primary={doc.title}
              secondary={`${doc.type} - ${new Date(
                doc.createdAt
              ).toLocaleDateString()}`}
              className="listData"
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DocumentList;
