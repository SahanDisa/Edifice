import http from "./../http-common.js";

const bupload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/excel/upload/budget", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};


const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/excel/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/excel/directcosts");
};

const getBFiles = () => {
  return http.get("/excel/budgets/list");
};

export default {
  upload,
  bupload ,
  getFiles,
  getBFiles 
};