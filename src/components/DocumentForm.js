import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import style  from "../Style/from.module.css"
// import Typography from 'typography'
function DocumentForm() {
  // TODO: Implement form state and submission
  const [formData , setFormData] = useState({
      title :'',
      content : '',
      type :''
  })
  const [error , setError] = useState({
    title :'',
    content:"",
    type :""

  })

  const validateStep = () => {
    const { title, content , type } = formData;
    let valid = true;
    const newErrors = {
      title: '',
      content :'',
      type :""
    };
    if (!title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    } if(!content.trim()){
       newErrors.content = "Content is required"  
       valid = false;
    }
       if(!type.trim()){
        newErrors.type = "Type is required"
        valid = false;
    }
    setError(newErrors);
    return valid;
  }
  
  const handleChange = (e)=>{
      const {name , value} = e.target;
      setFormData({
         ...formData,
         [name] : value
      }) 
  
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      if (!validateStep()) {
        return;
      }
      console.log(formData)     
  }


  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
      {/* <Typography variant="h6" component="h2" gutterBottom>
        Add New Document
      </Typography> */}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        name='title'
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
        name='content'
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
        name='type'
        value={formData.type}
        onChange={handleChange}
        required
        // TODO: Add value and onChange
      />
      {error.type && <p className={style.errorMsg}>{error.type}</p>}
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Document
      </Button>
    </Box>
  );
}

export default DocumentForm;