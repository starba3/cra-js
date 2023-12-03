import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// Lists
import {_sourcesList, _statusList} from 'src/lists/collectionSource';


// ----------------------------------------------------------------------

export default function ReportToolBar({
  onChange,
  onStatusChange
}) {

  const [selectedSource, setSelectedSource] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  

  const sourceList = _sourcesList();
  const statusList = _statusList();

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
            value={selectedSource}  // Ensure that the initial value is set correctly
            onChange={(event) => {
              setSelectedSource(event.target.value);
              setSelectedStatus('Ready');
              onStatusChange('Ready');
              onChange(event.target.value);
            }}  // Use event.target.value to get the selected value
            input={<OutlinedInput label="Collection Source" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize' }}
          >
            {sourceList.map((option, index) => (
              <MenuItem key={index} value={option.value} selected>
                {/* Use Typography inside MenuItem */}
                <Typography>
                  {option.text}
                </Typography>
              </MenuItem>
            ))}
          </Select>
      </FormControl>

      <FormControl
        sx={{
          flexShrink: 0,
          width: { xs: 1, md: 180 },
        }}
      >
        <InputLabel>Collection Source</InputLabel>

          <Select
            value={selectedStatus}  // Ensure that the initial value is set correctly
            onChange={(event) => {
              setSelectedStatus(event.target.value);
              onStatusChange(event.target.value);
            }}  // Use event.target.value to get the selected value
            input={<OutlinedInput label="Collection Source" />}
            renderValue={(selected) => selected}
            sx={{ textTransform: 'capitalize' }}
          >
            {statusList.map((option, index) => (
              <MenuItem key={index} value={option.value} selected>
                {/* Use Typography inside MenuItem */}
                <Typography>
                  {option.text}
                </Typography>
              </MenuItem>
            ))}
          </Select>
      </FormControl>

    </Stack>
  );
}

ReportToolBar.propTypes = {
  onChange: PropTypes.func,
  onStatusChange: PropTypes.func,
};
