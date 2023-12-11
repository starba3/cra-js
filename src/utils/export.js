import React from 'react';
import ExcelJS from 'exceljs';

export const exportToExcel = (data, headers, language, reportName, fileName) => {
  console.log(data);
  let filteredData = [];
  if(reportName.toLowerCase() === 'invoicebydepartments')
    filteredData = prepareDataForInvoiceByDepartment(data, headers, language);
  else if(reportName.toLowerCase() === 'allinvoices')
    filteredData = prepareDataForAllInvoices(data, headers, language);
  
  console.log("Headers: ", headers);
  console.log("filteredData: ", filteredData);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  
  // Add headers
  const headerRow = worksheet.addRow(headers);
  

  // Add data
  filteredData.forEach(row => {
    const rowValues = headers.map(header => row[header]);
    worksheet.addRow(rowValues);
  });
  
  // // Set the font for Arabic text
  worksheet.columns.forEach(column => {
    column.width = 19;
    column.eachCell(cell => {
      cell.font = { name: 'Arial', size: 10, family: 4, bold: false, italic: false };
      cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: false };
    });
  });

  // Set font style for the header row
  headerRow.font = { name: 'Arial', bold: true, size: 10,  color: { argb: 'FF000000' } }; 

  console.log("Rows count: ", worksheet.rowCount);
  // Create a buffer and write the workbook to it
  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${fileName}.xlsx`;
    link.click();
  });
};

const prepareDataForInvoiceByDepartment = (data, headers, language) => data.map((invoice) => {
  // console.log(invoice);
  const returnObj = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn,
    [headers[2]]: invoice.issueInvoiceDate,
    [headers[3]]: invoice.invoiceAmount,
    [headers[4]]: invoice.region,
    [headers[5]]: language === 'ar' ? invoice.productNameAr : invoice.productNameEn
  }
  // console.log(returnObj);
  return returnObj;
});

const prepareDataForAllInvoices = (data, headers, language) => data.map((invoice) => {
  // console.log(invoice);
  const returnObj = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn,
    [headers[2]]: invoice.issueInvoiceDate,
    [headers[3]]: invoice.daysToCollected,
    [headers[4]]: invoice.invoiceAmount,
    [headers[5]]: invoice.paidStatus,
    [headers[6]]: invoice.department
  }
  // console.log(returnObj);
  return returnObj;
});

