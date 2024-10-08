import axios from "axios";

const API_URL = "https://backend-vert-eta.vercel.app/api";

export const fetchDocuments = async () => {
  try {
    const req = await axios.get(`${API_URL}/documents`);
    return req.data;
  } catch (error) {
    console.error(error.message);
  }
  // TODO: Implement API call to fetch documents
};

export const createDocument = async (document) => {
  try {
    const req = await axios.post(`${API_URL}/documents`, document);
    if (req.data) {
      return req.data;
    }
  } catch (error) {
    console.error(error.message);
  }
  // TODO: Implement API call to create a document
};

export const searchDocuments = async (query) => {
  try {
    const req = await axios.get(`${API_URL}/document/search?q=${query}`);
    if (req.data) {
      return req.data;
    }
  } catch (error) {
    console.error("Error:", error.message);
  } // TODO: Implement API call to search documents
};

export const getDocument = async (id) => {
  try {
    const req = await axios.get(`${API_URL}/documents/${id}`);
    if (req.data) {
      return req.data;
    }
  } catch (error) {
    console.error(error.message);
  }
  // TODO: Implement API call to get a single document
};
