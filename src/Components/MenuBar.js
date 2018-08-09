import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function MenuBar() {
  return (
    <div>
      <AppBar color="default" position="sticky">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit">
            Brian Lichliter
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);