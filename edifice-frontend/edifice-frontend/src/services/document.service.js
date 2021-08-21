import http from "../http-common";

class UploadFilesService {
  upload(file, title, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file, title);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();