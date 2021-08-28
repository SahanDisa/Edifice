import http from "../http-common";

class UploadPhotoService {
  upload(file, title, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file, title);

    return http.post("/imageupload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/photos");
  }
}

export default new UploadPhotoService();