import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TeamList = ({ author, members = [] }) => {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {members.map((member) => {
        const labelId = `checkbox-list-secondary-label-${member.id}`;
        return (
          <ListItem key={member.id}>
            <ListItemAvatar>
              <Avatar
                alt={`${member.firstName} Avatar`}
                src={member.profilePhoto}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={member.firstName + "" + member.lastName}
            />
            {author === member.id && (
              <ListItemSecondaryAction>
                <Chip label="Owner" />
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default TeamList;
