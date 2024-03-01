import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
// @mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
// utils
import { fCurrency } from 'src/utils/format-number';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { usePopover } from 'src/components/custom-popover';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

export default function AppNewInvoice({ title, subheader, tableData, tableLabels, ...other }) {
    const router = useRouter()
    const { t, currentLang} = useLocales();
    const Translate = (text) => t(text);
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 680 }}>
            <TableHeadCustom headLabel={tableLabels} checkboxEnabled={false}/>

            <TableBody>
              {tableData.map((row, index) => (
                <AppNewInvoiceRow key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          onClick={() => router.replace(paths.dashboard.invoice.root)}
          endIcon={<Iconify icon={currentLang.value === 'ar' ? "eva:arrow-ios-back-fill" : "eva:arrow-ios-forward-fill"}  width={18} sx={{ ml: -0.5 }} />}
        >
          {t("viewAll")}
        </Button>
      </Box>
    </Card>
  );
}

AppNewInvoice.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function AppNewInvoiceRow({ row }) {
  const popover = usePopover();

  const {t} = useLocales();
    const Translate = (text) => t(text);

  const handleDownload = () => {
    popover.onClose();
    console.info('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    popover.onClose();
    console.info('PRINT', row.id);
  };

  const handleShare = () => {
    popover.onClose();
    console.info('SHARE', row.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', row.id);
  };

  return (
    <TableRow>
        
        <TableCell>{row.invoiceNo}</TableCell>

        <TableCell>{`${row.invoiceAmount.toLocaleString()} ${Translate('currencyShortcut')}`}</TableCell>

        <TableCell>{row.createdBy}</TableCell>

    </TableRow>
  );
}

AppNewInvoiceRow.propTypes = {
  row: PropTypes.object,
};
