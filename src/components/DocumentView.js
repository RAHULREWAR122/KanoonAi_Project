import React, { useEffect, useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getDocument } from '../api/documents';
import { motion } from 'framer-motion';
import { IoArrowBackSharp } from "react-icons/io5";
import Button from '@mui/material/Button';


function DocumentView() {
  // TODO: Implement document viewing logic
  
  // take id from params
  const {id} = useParams();
  const [document , setDocument] = useState('');
  const [load , setLoad] =useState(false);
  const navigate = useNavigate();
   
  useEffect(()=>{
    fetchSingleData()       
  },[id])
  
  // fetch a specific id based data
  const fetchSingleData = async()=>{
    try {
       const data = await getDocument(id)
       if(data){
         setDocument(data)
       }
       setLoad(false);
    } catch (error) {
       setLoad(true) 
    }finally {
       setLoad(false)
    }   
}

  //  check load is true if true then show loading 
  if(load){
     return <h1>Loading...</h1>
  }
   

  // return JSX
  return (
    // here i use frame motion library to transition animation
    <motion.div
    initial={{ x: 100 ,opacity: 0 }}
    animate={{ x: 0  , opacity: 1}}
    exit={{ x: -100 , opacity: 0 }}
    transition={{ duration: 0.6 }}     
   >
      <Button onClick={()=>navigate(-1)} variant="outlined" >
        <IoArrowBackSharp size={22}/>
      </Button>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {document?.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {document?.content}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Type: {document?.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {document?.createdAt && new Date(document.createdAt).toLocaleString()}
        </Typography>
      </Box>
    </Paper>
    </motion.div>);
}

export default DocumentView;