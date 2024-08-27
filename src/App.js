import React from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import theme from "./theme";
import DocumentList from "./components/DocumentList";
import DocumentSearch from "./components/DocumentSearch";
import DocumentForm from "./components/DocumentForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import DocumentView from "./components/DocumentView";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./components/Login";

function App() {
  // protect function for protect user personal routes
  const ProtectUser = () => {
    // we get user from session storage
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user?.name && user?.password ? <Outlet /> : <Navigate to="/login" />;
  };

  // return JSX
  return (
    // here i use farmer motion library for transition animation
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
              <h1>Legal Document Management</h1>
              {/* make 2 routes */}
              <Router>
                <Routes>
                  {/* keep safe user routes we give access only if user is login */}
                  <Route element={<ProtectUser />}>
                    {/* route for "/" page */}
                    <Route
                      path="/"
                      element={
                        <>
                          <DocumentSearch /> <DocumentList /> <DocumentForm />{" "}
                        </>
                      }
                    />
                    {/* route for show single document data */}
                    <Route path="/view/:id" element={<DocumentView />} />
                  </Route>

                  {/* user can access without user access*/}
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Router>
            </Box>
          </Container>
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
