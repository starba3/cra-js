import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function InvoiceCountByStatus({ title, subheader, list, ...other }) {
  return (
    <Card {...other} sx={{ 
      width: "100%"
     }}>
      {/* <CardHeader title={title} subheader={subheader} /> */}

      <Box
        sx={{
          p: 3,
          gap: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {list.map((item) => (
          <Paper
            key={item.name}
            variant="outlined"
            sx={{ py: 2.5, textAlign: 'center', borderStyle: 'solid' }}
          >
            <Box sx={{ mb: 0.5 }}>{item.icon}</Box>

            <Typography variant="h6">{fShortenNumber(item.count)}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.status}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Card>
  );
}

InvoiceCountByStatus.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};