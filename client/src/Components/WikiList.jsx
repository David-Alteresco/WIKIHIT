import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function WikiList(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">
            {props.listResults.length < 1 ? "No Results" : "Results"}
          </Typography>
          <div>
            <List>
              {props.listResults.map((obj) => {
                return (
                  <ListItem key={obj.pageid}>
                    <ListItemText primary={obj.title} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WikiList;
