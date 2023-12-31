import React from 'react';
import ExcelJS from 'exceljs';

export const exportToExcel = (data, headers, language, currency, reportName, fileName) => {
  console.log(data);
  let filteredData = [];
  
  if(reportName.toLowerCase() === 'invoicebydepartments')
    filteredData = prepareDataForInvoiceByDepartment(data, headers, language);

  if(reportName.toLowerCase() === 'allinvoices')
    filteredData = prepareDataForAllInvoices(data, headers, language);

  if(reportName.toLowerCase() === 'customers')
    filteredData = prepareDataForCustomers(data, headers);

  if(reportName.toLowerCase() === 'users')
    filteredData = prepareDataForUsers(data, headers);

  if(reportName.toLowerCase() === 'products')
    filteredData = prepareDataForProducts(data, headers, language);

  if(reportName.toLowerCase() === 'aging')
    filteredData = prepareDataForAgingReport(data, headers, language, currency);
  
  if(reportName.toLowerCase() === 'invoicebycustomers') 
    filteredData = prepareDataForInvoicesByCustomer(data, headers, language, currency);

  if(reportName.toLowerCase() === 'invoicesbyuser') 
    filteredData = prepareDataForInvoicesByUser(data, headers, language, currency);

  if(reportName.toLowerCase() === 'gmreport') 
    filteredData = prepareDataForGMReport(data, headers, currency);

  if(reportName.toLowerCase() === 'gmreasonreport') 
    filteredData = prepareDataForGMReasonReport(data, headers, currency);
  // console.log("Headers: ", headers);
  // console.log("filteredData: ", filteredData);

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

  // console.log("Rows count: ", worksheet.rowCount);
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
  const list = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn,
    [headers[2]]: invoice.issueInvoiceDate,
    [headers[3]]: invoice.invoiceAmount,
    [headers[4]]: invoice.region,
    [headers[5]]: language === 'ar' ? invoice.productNameAr : invoice.productNameEn
  }
  return list;
});

const prepareDataForAllInvoices = (data, headers, language) => data.map((invoice) => {
  const list = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn,
    [headers[2]]: invoice.issueInvoiceDate,
    [headers[3]]: invoice.daysToCollected,
    [headers[4]]: invoice.invoiceAmount,
    [headers[5]]: invoice.paidStatus,
    [headers[6]]: invoice.department
  }
  return list;
});

const prepareDataForCustomers = (data, headers) => data.map((customer) => {
  const list = {
    [headers[0]]: customer.customerCode,
    [headers[1]]: customer.customerNameEn,
    [headers[2]]: customer.customerNameAr
  }
  return list;
});

const prepareDataForUsers = (data, headers) => data.map((users) => {
  const roles =  users.roles.reduce((acc, role) => `${acc}, ${role} `, '').slice(1, -1);
  const list = {
    [headers[0]]: users.firstName,
    [headers[1]]: users.lastName,
    [headers[2]]: users.userName,
    [headers[3]]: roles
  }
  return list;
});

const prepareDataForProducts = (data, headers, language) => data.map((product) => {
  const name = language === 'ar' ? product.nameAr : product.nameEn;
  const description = language === 'ar' ? product.descriptionAr : product.descriptionEn;

  const list = {
    [headers[0]]: product.code,
    [headers[1]]: name,
    [headers[2]]: description
  }
  return list;
});

const prepareDataForAgingReport = (data, headers, language, currency) => {
  let list = data.map((record) => {

    const customerName = language === 'ar' ? record.customerNameAr : record.customerNameEn;
    const total = record.zeroToThirty + record.thirtyOneToSixty + record.sixtyOneToNinety + record.ninetyOneToOneTwenty + record.oneTwentyOnePlus;

    const item = {
      [headers[0]]: customerName,
      [headers[1]]: `${total.toLocaleString()} ${currency}`,
      [headers[2]]: `${record.zeroToThirty.toLocaleString()} ${currency}`,
      [headers[3]]: `${record.thirtyOneToSixty.toLocaleString()} ${currency}`,
      [headers[4]]: `${record.sixtyOneToNinety.toLocaleString()} ${currency}`,
      [headers[5]]: `${record.ninetyOneToOneTwenty.toLocaleString()} ${currency}`,
      [headers[6]]: `${record.oneTwentyOnePlus.toLocaleString()} ${currency}`
    }

    return item;
  })

  const summaryList = prepareAgingReportSummary(data, headers, language, currency);
  list = list.concat(summaryList);

  return list;
};

const prepareAgingReportSummary = (data, headers, language, currency) =>  {

  const calculate0to30Total = data.reduce((acc, item) => acc + item.zeroToThirty, 0);
  const calculate31to60Total = data.reduce((acc, item) => acc + item.thirtyOneToSixty, 0);
  const calculate61to90Total = data.reduce((acc, item) => acc + item.sixtyOneToNinety, 0);
  const calculate91to120Total = data.reduce((acc, item) => acc + item.ninetyOneToOneTwenty, 0);
  const calculateAbove120Total = data.reduce((acc, item) => acc + item.oneTwentyOnePlus, 0);

  const totalText = language === 'ar' ? "Total" : "المجموع الكلي";
  const totalValue = calculate0to30Total + calculate31to60Total + calculate61to90Total + calculate91to120Total + calculateAbove120Total;

  const percentageText = language === 'ar' ? "Percentage" : "النسبة";


  const list = [{
    [headers[0]]: totalText,
    [headers[1]]: `${totalValue.toLocaleString()} ${currency}`,
    [headers[2]]: `${calculate0to30Total.toLocaleString()} ${currency}`,
    [headers[3]]: `${calculate31to60Total.toLocaleString()} ${currency}`,
    [headers[4]]: `${calculate61to90Total.toLocaleString()} ${currency}`,
    [headers[5]]: `${calculate91to120Total.toLocaleString()} ${currency}`,
    [headers[6]]: `${calculateAbove120Total.toLocaleString()} ${currency}`
  }];

  list.push({
    [headers[0]]: percentageText,
    [headers[1]]: "100%",
    [headers[2]]: `${((calculate0to30Total / totalValue) * 100).toFixed(2)}%`,
    [headers[3]]: `${((calculate31to60Total / totalValue) * 100).toFixed(2)}%`,
    [headers[4]]: `${((calculate61to90Total / totalValue) * 100).toFixed(2)}%`,
    [headers[5]]: `${((calculate91to120Total / totalValue) * 100).toFixed(2)}%`,
    [headers[6]]: `${((calculateAbove120Total / totalValue) * 100).toFixed(2)}%`
  })


  return list;
};

const prepareDataForInvoicesByCustomer = (data, headers, language, currency) => data.map((invoice) => {
  const customerName = language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn;

  const list = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: customerName,
    [headers[2]]: new Date(invoice.issueInvoiceDate).toLocaleDateString(),
    [headers[3]]: invoice.daysToCollected,
    [headers[4]]: `${invoice.invoiceAmount.toLocaleString()} ${currency}`,
    [headers[5]]: invoice.paidStatus,
    [headers[6]]: invoice.department,
  }
  return list;
});

const prepareDataForInvoicesByUser = (data, headers, language, currency) => data.map((invoice) => {
  const customerName = language === 'ar' ? invoice.customerNameAr : invoice.customerNameEn;

  const list = {
    [headers[0]]: invoice.invoiceNo,
    [headers[1]]: customerName,
    [headers[2]]: new Date(invoice.issueInvoiceDate).toLocaleDateString(),
    [headers[3]]: invoice.daysToCollected,
    [headers[4]]: `${invoice.invoiceAmount.toLocaleString()} ${currency}`,
    [headers[5]]: invoice.paidStatus,
    [headers[6]]: invoice.department,
  }
  return list;
});

const prepareDataForGMReport = (data, headers, currency) => data.map((record) => {
  const list = {
    [headers[0]]: `${subtractDaysFromDate(new Date(record.date), 7)} -  ${formatDate(new Date(record.date))} `,
    [headers[1]]: `${record.ready.toLocaleString()} ${currency}`,
    [headers[2]]: `${record.notReady.toLocaleString()} ${currency}`,
    [headers[3]]: `${record.reject.toLocaleString()} ${currency}`
  }
  return list;
});

const prepareDataForGMReasonReport = (data, headers, currency) => data.map((record) => {
  const list = {
    [headers[0]]: `${subtractDaysFromDate(new Date(record.date), 7)} -  ${formatDate(new Date(record.date))} `,
    [headers[1]]: record.reason,
    [headers[2]]: `${record.totalAmount.toLocaleString()} ${currency}`
  }
  return list;
});

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
}

const subtractDaysFromDate = (date, days) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return formatDate(dateCopy);
}
