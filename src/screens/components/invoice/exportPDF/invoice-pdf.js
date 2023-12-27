import PropTypes from 'prop-types';
import { useLocales } from 'src/locales';
import { useMemo } from 'react';
import { Page, View, Text, Image, Document, Font, StyleSheet, Link } from '@react-pdf/renderer';
// utils
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }],
});

Font.register({
  family: 'Amiri',
  fonts: [{ src: '/fonts/Amiri-Regular.ttf' }, { src: '/fonts/Amiri-Bold.ttf' }],
});



const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        col4: { width: '25%' },
        col8: { width: '75%' },
        col6: { width: '50%' },
        mb2: { marginBottom: 2 },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb10: { marginBottom: 10 },
        mb15: { marginBottom: 15 },
        mb40: { marginBottom: 40 },
        mb100: { marginBottom: 100 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: 'right' },
        page: {
          fontSize: 12,
          lineHeight: 1.6,
          fontFamily: 'Amiri',
          backgroundColor: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '40px 24px 120px 24px',
        },
        footer: {
          left: 0,
          right: 0,
          bottom: 0,
          padding: 24,
          margin: 'auto',
          borderTopWidth: 1,
          borderStyle: 'solid',
          position: 'absolute',
          borderColor: '#DFE3E8',
        },
        gridContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        table: {
          display: 'flex',
          width: 'auto',
        },
        tableRow: {
          padding: '8px 0',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#DFE3E8',
        },
        noBorder: {
          paddingTop: 8,
          paddingBottom: 0,
          borderBottomWidth: 0,
        },
        tableCell_1: {
          width: '5%',
        },
        tableCell_2: {
          width: '50%',
          paddingRight: 16,
        },
        tableCell_3: {
          width: '15%',
        },
      }),
    []
  );

// ----------------------------------------------------------------------

export default function InvoicePDF({ invoice }) {
  const {
    department,
    invoiceNo,
    issueInvoiceDate,
    invoiceAmount,
    currency,
    customerCode,
    customerNameEn,
    customerNameAr,
    productNameEn,
    productNameAr,
    customerPO,
    poValue,
    region,
    contractNo,
    deliveryDate,
    installationDate,
    installationStatus,
    daysToCollected,
    acknowledgeStatus,
    collectionSource,
    claimStatus,
    claimsDetailStatus,
    salesConfirm,
    createdBy,
    salesTakerName,
    collectorName,
    responsibleEngineerName,
    notes,
    attachments
  } = invoice;

  const { t } = useLocales()
  const Translate = (text) => t(text)

  const styles = useStyles();
  const dateFormat = "yyyy-MM-dd";
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb15]}>
          <Image source="/assets/illustrations/Login-Image.jpeg" style={{ width: 48, height: 48 }} />

          {/* <View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.h3}>{department}</Text>
            <Text> {invoiceNo} </Text>
          </View> */}
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("issueDate")}</Text>
            <Text style={styles.body2}>{fDate(issueInvoiceDate, dateFormat) }</Text>
          </View>

          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("amount")}</Text>
            <Text style={styles.body2}>{invoiceAmount}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("currency")}</Text>
            <Text style={styles.body2}>{currency}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("currency")}</Text>
            <Text style={styles.body2}>{customerCode}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("nameEnglish")}</Text>
            <Text style={styles.body2}>{customerNameEn}</Text>
          </View>

          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("nameArabic")}</Text>
            <Text style={styles.body2}>{customerNameAr}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("productNameEn")}</Text>
            <Text style={styles.body2}>{productNameEn}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("productNameAr")}</Text>
            <Text style={styles.body2}>{productNameAr}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("PoNumber")}</Text>
            <Text style={styles.body2}>{customerPO}</Text>
          </View>

          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("POValue")}</Text>
            <Text style={styles.body2}>{poValue}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("region")}</Text>
            <Text style={styles.body2}>{region}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("contractNumber")}</Text>
            <Text style={styles.body2}>{contractNo}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("deliveryDate")}</Text>
            <Text style={styles.body2}>{fDate(deliveryDate, dateFormat)}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("installationDate")}</Text>
            <Text style={styles.body2}>{fDate(installationDate, dateFormat)}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("department")}</Text>
            <Text style={styles.body2}>{department}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("installationStatus")}</Text>
            <Text style={styles.body2}>{installationStatus}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("daysToCollected")}</Text>
            <Text style={styles.body2}>{daysToCollected}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("acknowledgeStatus")}</Text>
            <Text style={styles.body2}>{acknowledgeStatus}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("collectionSource")}</Text>
            <Text style={styles.body2}>{collectionSource}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("claimStatus")}</Text>
            <Text style={styles.body2}>{claimStatus}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("claimsDetailStatus")}</Text>
            <Text style={styles.body2}>{claimsDetailStatus}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("salesConfirm")}</Text>
            <Text style={styles.body2}>{salesConfirm}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb10]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("createdBy")}</Text>
            <Text style={styles.body2}>{createdBy}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("salesTakerName")}</Text>
            <Text style={styles.body2}>{salesTakerName}</Text>
          </View>
        </View>

        <View style={[styles.gridContainer, styles.mb100]}>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("collectorName")}</Text>
            <Text style={styles.body2}>{collectorName}</Text>
          </View>
          <View style={styles.col6}>
            <Text style={[styles.subtitle2, styles.mb4]}>{Translate("responsibleEngineerName")}</Text>
            <Text style={styles.body2}>{responsibleEngineerName}</Text>
          </View>
        </View>

        <Text style={[styles.subtitle1, styles.mb8]}>{Translate('notes')}</Text>

        <View style={[styles.table, styles.mb15]}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.subtitle2}>#</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.subtitle2}>{Translate("note")}</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>{Translate("user")}</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>{Translate("createDate")}</Text>
              </View>

            </View>
          </View>

          <View>
            {notes.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCell_1}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.tableCell_2}>
                  <Text style={styles.subtitle2}>{item.noteText}</Text>
                </View>

                <View style={styles.tableCell_3}>
                  <Text>{item.createdBy}</Text>
                </View>

                <View style={styles.tableCell_3}>
                  <Text>{fDate(item.createdDate, dateFormat)}</Text>
                </View>

              </View>
            ))}

           
          </View>
        </View>

        <Text style={[styles.subtitle1, styles.mb8]}>{Translate('attachments')}</Text>

        <View style={styles.table}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell_1}>
                <Text style={styles.subtitle2}>#</Text>
              </View>

              <View style={styles.tableCell_2}>
                <Text style={styles.subtitle2}>{Translate("name")}</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>{Translate("user")}</Text>
              </View>

              <View style={styles.tableCell_3}>
                <Text style={styles.subtitle2}>{Translate("createDate")}</Text>
              </View>

            </View>
          </View>

          <View>
            {attachments.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCell_1}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.tableCell_2}>
                {/* <Text onClick={handleLinkClick} style={{ color: 'blue', textDecoration: 'underline' }}>
                  Click me to simulate a link
                </Text> */}
                  <Link style={styles.subtitle2} src={item.attachmentPath} >{item.fileName}</Link>
                </View>

                <View style={styles.tableCell_3}>
                  <Text >{item.createdBy}</Text>
                </View>

                <View style={styles.tableCell_3}>
                  <Text>{fDate(item.createdDate, dateFormat)}</Text>
                </View>

              </View>
            ))}


          </View>
        </View>

        <View style={[styles.gridContainer, styles.footer]} fixed>
          <View style={styles.col8}>
            <Text style={styles.subtitle2}>NOTES</Text>
            <Text>
              We appreciate your business. Should you need us to add VAT or extra notes let us know!
            </Text>
          </View>
          <View style={[styles.col4, styles.alignRight]}>
            <Text style={styles.subtitle2}>Have a Question?</Text>
            <Text>support@abcapp.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

InvoicePDF.propTypes = {
  invoice: PropTypes.object,
};
