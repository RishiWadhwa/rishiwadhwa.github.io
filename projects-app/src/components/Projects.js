import { useState } from "react";
import ProjectRow from "./ProjectRow";
import "./Projects.css";

const INITIAL_PROJECTS = [
  {
    id: 1,
    name: "Project Name 1",
    users: "list of authorized users",
    joined: false,
    hardware: [
      { id: "HWSet1", checkedOut: 50, capacity: 100 },
      { id: "HWSet2", checkedOut: 0, capacity: 100 },
    ],
  },
  {
    id: 2,
    name: "Project Name 2",
    users: "list of authorized users",
    joined: true,
    hardware: [
      { id: "HWSet1", checkedOut: 50, capacity: 100 },
      { id: "HWSet2", checkedOut: 0, capacity: 100 },
    ],
  },
  {
    id: 3,
    name: "Project Name 3",
    users: "list of authorized users",
    joined: false,
    hardware: [
      { id: "HWSet1", checkedOut: 0, capacity: 100 },
      { id: "HWSet2", checkedOut: 0, capacity: 100 },
    ],
  },
];

function changeCheckedOut(projects, projectId, hwId, delta) {
  return projects.map((project) => {
    if (project.id !== projectId) {
      return project;
    }
    return {
      ...project,
      hardware: project.hardware.map((set) => {
        if (set.id !== hwId) {
          return set;
        }
        const checkedOut = Math.min(
          set.capacity,
          Math.max(0, set.checkedOut + delta)
        );
        return { ...set, checkedOut };
      }),
    };
  });
}

export default function Projects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  function handleJoinLeave(projectId) {
    setProjects((current) =>
      current.map((project) =>
        project.id === projectId
          ? { ...project, joined: !project.joined }
          : project
      )
    );
  }

  function handleCheckIn(projectId, hwId, qty) {
    if (!qty) {
      return;
    }
    setProjects((current) => changeCheckedOut(current, projectId, hwId, -qty));
  }

  function handleCheckOut(projectId, hwId, qty) {
    if (!qty) {
      return;
    }
    setProjects((current) => changeCheckedOut(current, projectId, hwId, qty));
  }

  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectRow
          key={project.id}
          name={project.name}
          users={project.users}
          joined={project.joined}
          hardware={project.hardware}
          onJoinLeave={() => handleJoinLeave(project.id)}
          onCheckIn={(hwId, qty) => handleCheckIn(project.id, hwId, qty)}
          onCheckOut={(hwId, qty) => handleCheckOut(project.id, hwId, qty)}
        />
      ))}
    </div>
  );
}
