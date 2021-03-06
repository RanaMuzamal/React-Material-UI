import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ButtonAppBar from './ButtonAppBar';
import SimpleMenu from './SimpleMenu'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
      }}
        showLabels
        className={classes.root}
    >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <ButtonAppBar>ABC</ButtonAppBar>
      <div>
        <SimpleMenu></SimpleMenu>
      </div>

    </div>
  );
}

export default App;
