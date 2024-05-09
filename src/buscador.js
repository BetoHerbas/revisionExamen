
export default function searchProject(name, projects) {
  let foundProjects = [];
  if(projects.length != 0) {
    foundProjects.push(projects[0]);
  }
  return foundProjects;
}