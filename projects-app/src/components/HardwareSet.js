import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function HardwareSet({
  name,
  checkedOut,
  capacity,
  onCheckIn,
  onCheckOut,
}) {
  const [qty, setQty] = useState("");

  function readQty() {
    const amount = parseInt(qty, 10);
    return Number.isFinite(amount) && amount > 0 ? amount : 0;
  }

  return (
    <div className="hardware-set">
      <span className="hw-label">
        {name}: {checkedOut}/{capacity}
      </span>
      <TextField
        size="small"
        placeholder="Enter qty"
        value={qty}
        onChange={(event) => setQty(event.target.value)}
        sx={{
          width: 110,
          backgroundColor: "#fff",
          "& .MuiInputBase-input": { padding: "6px 8px" },
        }}
      />
      <Button
        variant="outlined"
        size="small"
        onClick={() => onCheckIn(readQty())}
        sx={{ textTransform: "none", color: "#333", borderColor: "#c8c8c8" }}
      >
        Check In
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => onCheckOut(readQty())}
        sx={{ textTransform: "none", color: "#333", borderColor: "#c8c8c8" }}
      >
        Check Out
      </Button>
    </div>
  );
}
