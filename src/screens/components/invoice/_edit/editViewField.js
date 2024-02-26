// react
import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import TextField from '@mui/material/TextField';
// ----------------------------------------------------------------------

export default function EditItemView({
    invoice,
    properity,
    isDate = false,
  }) {
  const { t } = useLocales()
  const Translate = (text) => t(text)

  const customWidth = {
    width: '95%',
    margin: '10px'
  };

  return (
    <TextField
        label={Translate(properity)}
        value={ isDate
            ? invoice[properity] && invoice[properity].substring(0, invoice[properity].indexOf("T"))
            : invoice[properity] && invoice[properity]   
        }
        style={customWidth}
        disabled
    />
  );
}

EditItemView.propTypes = {
    invoice: PropTypes.object,
    properity: PropTypes.string,
    isDate: PropTypes.bool,
} 
