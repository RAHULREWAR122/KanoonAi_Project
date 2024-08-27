import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";

function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
//   get user details from session storage 
  const checkUser = JSON.parse(sessionStorage.getItem("user"));
  
//  check user present or not if present then send user to "/" page 
  useEffect(() => {
    if (checkUser?.name || checkUser?.password) {
      navigate("/");
    }
  }, [checkUser]);

//   handle input control
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

//   handle submit user details
  const handleUserDetails = () => {
    // destructure user
    const { name, password } = user;
    // check user give something in input or not if not and try to submit data then give a alert 
    if (!name.trim() || !password.trim()) {
      alert("input fields are required");
      return;
    }
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/");
//   after submit input fields empty
   setUser({
    ...user,
    name :'',
    password :''
   })
};


  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{ p: 2, width: 400, height: 400, textAlign: "center" }}
      >
        <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 2, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Username"
            variant="outlined"
            fullWidth
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
            size="large"
            onClick={handleUserDetails}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
    </ThemeProvider>
  );
}

export default Login;