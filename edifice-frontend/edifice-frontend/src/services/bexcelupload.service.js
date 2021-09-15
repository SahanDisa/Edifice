import http from "./../http-common.js";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/excel/upload/budget", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/excel/budgets/list");
};

export default {
  upload,
  getFiles,
};