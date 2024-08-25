import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
// import Typography from 'typography'
function DocumentForm() {
  // TODO: Implement form state and submission
  const [formData , setFormData] = useState({
      name :'',
      content : '',
      type :''
  })
  const [error , setError] = useState({
    name :'',
    content:"",
    type :""

  })

  const validateStep = () => {
    const { name, content , type } = formData;
    let valid = true;
    const newErrors = {
      name: '',
      content :'',
      type :""
    };
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }else if(!content.trim()){
       newErrors.content = "Content is required"  
       valid = false;
      }else{
       if(!type.trim()){
        newErrors.type = "Type is required"
        valid = false;
        
       }
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
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
        // TODO: Add value and onChange
      />
      {error.name && <p className="text-red-500 text-xs italic">{error.name}</p>}
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
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Document
      </Button>
    </Box>
  );
}

export default DocumentForm;