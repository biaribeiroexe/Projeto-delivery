import React from "react";
import {
  Avatar,
  CardContent,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserProfileCard = ({ user }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        alignItems: "center",
        margin: 2,
      }}
    >
      <Avatar alt={user.name} src={user.photo} sx={{ width: 56, height: 56 }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.currentAddress}
        </Typography>
      </CardContent>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </Card>
  );
};

export default  UserProfileCard;