
export default function searchProject(name, projects) {
  let foundProjects = [];
  if(projects.length != 0) {
    for(let i = 0; i < projects.length; i++) {
      if(projects[i] == name) {
        foundProjects.push(projects[i]);
      }
    }
  }
  return foundProjects;
}