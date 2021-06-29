const db = require("./../models/index");
const Project = db.projects;
const Drawing = db.drawings;

exports.createDrawing = (projectId, drawing) => {
    return Drawing.create({
      name: drawing.name,
      description: drawing.description,
      drawtype: drawing.drawtype,
      projectId: projectId,
    })
      .then((drawing) => {
        console.log(">> Created drawing: " + JSON.stringify(drawing, null, 4));
        return drawing;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

exports.findTutorialById = (projectId) => {
    return Project.findByPk(projectId, { include: ["drawings"] })
      .then((project) => {
        return project;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      });
  };

exports.findCommentById = (id) => {
    return Drawing.findByPk(id, { include: ["projects"] })
      .then((drawing) => {
        return drawing;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };

exports.findAll = () => {
    return Project.findAll({
      include: ["drawings"],
    }).then((projects) => {
      return projects;
    });
  };