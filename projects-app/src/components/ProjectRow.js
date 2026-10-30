import Button from "@mui/material/Button";
import HardwareSet from "./HardwareSet";

export default function ProjectRow({
  name,
  users,
  joined,
  hardware,
  onJoinLeave,
  onCheckIn,
  onCheckOut,
}) {
  return (
    <div className={joined ? "project-row joined" : "project-row"}>
      <div className="project-info">
        <span className="project-name">{name}</span>
        <span className="project-users">{users}</span>
      </div>
      <div className="project-hardware">
        {hardware.map((set) => (
          <HardwareSet
            key={set.id}
            name={set.id}
            checkedOut={set.checkedOut}
            capacity={set.capacity}
            onCheckIn={(qty) => onCheckIn(set.id, qty)}
            onCheckOut={(qty) => onCheckOut(set.id, qty)}
          />
        ))}
      </div>
      <Button
        variant="contained"
        disableElevation
        onClick={onJoinLeave}
        sx={{
          backgroundColor: "#e6e6e6",
          color: "#222",
          textTransform: "none",
          minWidth: 84,
          alignSelf: "center",
          "&:hover": { backgroundColor: "#d5d5d5" },
        }}
      >
        {joined ? "Leave" : "Join"}
      </Button>
    </div>
  );
}
