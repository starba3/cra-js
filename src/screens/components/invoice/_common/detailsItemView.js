// react
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// ----------------------------------------------------------------------

export default function DetailsItemView({
    invoice,
    properity,
    isDate = false,
    marginButtom = 0
  }) {
  const { t } = useLocales()
  const Translate = (text) => t(text)

  console.log("data ", { invoice, properity })

  return (
    <Stack sx={{ typography: 'body2', mb: marginButtom }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
            {Translate(properity)}
        </Typography>
        <Typography>{ isDate
            ? invoice[properity] && invoice[properity].substring(0, invoice[properity].indexOf("T"))
            : invoice[properity] && invoice[properity]   
        }</Typography> 
    </Stack>   
  );
}

DetailsItemView.propTypes = {
    invoice: PropTypes.object,
    properity: PropTypes.string,
    isDate: PropTypes.bool,
    marginButtom: PropTypes.number
} 
