import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import style from "../Style/from.module.scss";
import { createDocument } from "../api/documents";
import { Typography } from "@mui/material";

function DocumentForm() {
  // TODO: Implement form state and submission
  // form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "",
  });
  // error messages
  const [error, setError] = useState({
    title: "",
    content: "",
    type: "",
  });
 
  
  // check data is valid or not and check in inputs user type or not something
  const checkValidData = () => {
    const { title, content, type } = formData;
    let valid = true;
    const newErrors = {
      title: "",
      content: "",
      type: "",
    };
    // if title not type in input box then show error
    if (!title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }
    // if content not type in input box then show error
    if (!content.trim()) {
      newErrors.content = "Content is required";
      valid = false;
    }
    // if type of document not typed in input box then show error
    if (!type.trim()) {
      newErrors.type = "Type is required";
      valid = false;
    }
    setError(newErrors);
    return valid;
  };

  // handle change inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // submit data
  const handleSubmit = async(e) => {
    e.preventDefault();
    //first check data is valid or not
    if (!checkValidData()) {
      return;
    }

    // send data
    await createDocument(formData) 
    // after submit data set form data inputs empty
    setFormData({
     ...formData,
     title :'',
     content :'',
     type :'' 
   }) 
  };

  // return JSX
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Document
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        // TODO: Add value and onChange
      />
      {error.title && <p className={style.errorMsg}>{error.title}</p>}
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
        // TODO: Add value and onChange
      />
      {error.content && <p className={style.errorMsg}>{error.content}</p>}
      <TextField
        label="Document Type"
        variant="outlined"
        fullWidth
        margin="normal"
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        // TODO: Add value and onChange
      />
      {error.type && <p className={style.errorMsg}>{error.type}</p>}
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add Document
      </Button>
    </Box>
  );
}

export default DocumentForm;
