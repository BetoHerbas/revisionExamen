export default function searchProject(name, projects) {
  if (projects.length === 0) {
    return []; 
  }

  const foundProjects = projects.filter(project => project === name);

  return foundProjects;
}