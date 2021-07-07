import React,{useState} from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MiniDrawer from '../MiniDrawer';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

const Budget = () => {
 
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

  const classes = useStyles();

    const [view, setView] = React.useState('');
    const handleChangeView = (event) => {
      setView(event.target.value);
    }

    const [snapshot, setSnapshot] = React.useState('');
    const handleChangeSnapshot = (event) => {
      setSnapshot(event.target.value);
    }

    const [group, setGroup] = React.useState('');
    const handleChangeGroup = (event) => {
      setGroup(event.target.value);
    }

    const [filter, setFilter] = React.useState('');
    const handleChangeFilter = (event) => {
      setFilter(event.target.value);
    }

   
    return (
        <div>
          <MiniDrawer/>
          <br />
          <ul class="nav nav-tabs">
           <a href="/budgetSettings"> <SettingsIcon /></a><h3 style={{paddingLeft: 10, paddingRight: 50}}> BUDGET</h3>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/budget">Budget</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/changeHistory">Change History</a>
            </li>
          </ul>
          <br />
          <ul class="nav nav-tabs">
            <div className="col-md-8">
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">View</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={view}
          onChange={handleChangeView}
          label="View"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Edifice Standard</MenuItem>
          <MenuItem value={2}>Custom</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Snapshot</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={snapshot}
          onChange={handleChangeSnapshot}
          label="Snapshot"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Current</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={group}
          onChange={handleChangeGroup}
          label="Group"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Group 1</MenuItem>
          <MenuItem value={1}>Group 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChangeFilter}
          label="Add Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Filter 1</MenuItem>
          <MenuItem value={1}>Filter 2</MenuItem>
        </Select>
      </FormControl>
      </div><div className="col-md-4">
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Export
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">.xsl</a></li>
    <li><a href="#">csv</a></li>
    <li><a href="#">html</a></li>
  </ul>
  <span><ZoomOutMapIcon/></span>
</div>
</div>
</ul>
    </div>
    );
};

export default Budget;