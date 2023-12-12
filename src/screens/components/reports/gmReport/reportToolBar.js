import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

// Lists
import {_sourcesList} from 'src/lists/collectionSource';


// ----------------------------------------------------------------------

export default function ReportToolBar({
  onChange,
}) {

  const [selectedValue, setSelectedValue] = useState([]);
  const prevSelected = useRef(selectedValue);
  const sourceList = _sourcesList();

  return (
    <Stack
        spacing={2}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="flex-start"
        direction={{
          xs: 'column',
          md: 'row',
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      >


      <FormControl
        sx={{
          flexShrink: 0,
          width: { xs: 1, md: 180 },
        }}
      >
        <InputLabel>Collection Source</InputLabel>

          <Select
            multiple
            value={selectedValue}  // Ensure that the initial value is set correctly
            onChange={(event) => {

              const allItems = sourceList.map((option) => option.value);
              const selected = event.target.value;
              const lastIndex = selected.length - 1;
              
              if (selected[lastIndex] === "All") { // Selected All option
                setSelectedValue(allItems);
                onChange(allItems);
                prevSelected.current = allItems;
              } else if(selected[0] === "All"){ // Selected All option then deslected another option
                setSelectedValue(selected.slice(1));
                onChange(selected.slice(1));
                prevSelected.current = selected.slice(1);
              } else if(prevSelected.current.length && prevSelected.current.slice()[0] === "All")  { // Selected All option then deslected All
                setSelectedValue([]);
                onChange([]);
                prevSelected.current = [];
              } else { // Selected any option other than all
                setSelectedValue(selected);
                onChange(selected);
                prevSelected.current = selected;
              }
              
            }}  // Use event.target.value to get the selected value
            input={<OutlinedInput label="Collection Source" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize' }}
          >
            {sourceList.map((option, index) => (
              <MenuItem key={index} value={option.value} selected>
                {/* Use Typography inside MenuItem */}
                <Checkbox disableRipple size="small" checked={selectedValue.includes(option.value)} />
                {/* <Typography> */}
                  {option.text}
                {/* </Typography> */}
              </MenuItem>
            ))}
          </Select>
      </FormControl>

    </Stack>
  );
}

ReportToolBar.propTypes = {
  onChange: PropTypes.func,
};
