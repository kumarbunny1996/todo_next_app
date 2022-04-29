import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const AssignDialog = ({ user, onClose, onAssign, open, todoId, members }) => {
  const handleClose = () => {
    onClose();
  };

  const handleAssining = (userId) => {
    onAssign(todoId, userId);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        Click user to assign tasks
      </DialogTitle>
      <List>
        {members.map((member) => {
          if (member.id === user.id) return null;
          return (
            <ListItem
              button
              onClick={() => handleAssining(member.id)}
              key={member.id}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`${member.firstName} Avatar`}
                  src={member.profilePhoto}
                />
              </ListItemAvatar>
              <ListItemText primary={member.firstName + "" + member.lastName} />
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
};

export default AssignDialog;
