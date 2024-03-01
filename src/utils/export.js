
import ExcelJS from 'exceljs';

export const exportToExcel = (data, headers, fileName) => {

  let filteredData = [];
  filteredData = prepareData(data, headers)

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  
  // Add headers
  const headerRow = worksheet.addRow(headers.map(header => header.value));
  

  // Add data
  filteredData.forEach(row => {
    const rowValues = headers.map(header => row[header.value]);
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

const prepareData = (data, headers) => data.map(item => {
  const dataObject = {}

  headers.forEach(header => {
    if(header.localization && header.language) {
      // header.language always in ar, en
      const localizedKey = header.key +  header.language[0].toUpperCase() + header.language.slice(1)
      // console.log("localizedKey ", localizedKey)
      dataObject[header.value] =  item[header.key] ? item[localizedKey] : ""
    }
    else if(header.isCurreny && header.iscurreny) {
      dataObject[header.value] = item[header.key] ? `${item[header.key]} ${header.currency}` : ""
    }
    else if(header.isDate) {
      dataObject[header.value] = item[header.key] ? new Date(item[header.key]).toLocaleDateString() : ""
    }
    else if(header.isArray) {
      dataObject[header.value] = item[header.key] ? item[header.key][0] : ""
    }
    else {
      dataObject[header.value]=  item[header.key] ? item[header.key] : ""
    }
    
  })

  return dataObject
})