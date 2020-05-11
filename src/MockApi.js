export const row = {
    "row": 222,
    "Submission date": "01/01/2019",
    "Entity": "The Greenhouse Gases",
    "DBA": "Boss Nass's",
    "Facility Address": "197 N Electric Ave",
    "Facility Suite #": "",
    "Facility Zip": "97204",
    "Mailing Address": "100 NE Tabor Dr",
    "MRL": "MRL48",
    "Neighborhood Association": "Arbor Lodge",
    "Compliance Region": "SE",
    "Primary Contact First Name": "Ashley",
    "Primary Contact Last Name": "Clark",
    "Email": "ac@example.com",
    "Phone": "971-245-0996",
    "Endorse Type": "EX,CT",
    "License Type": "MR",
    "Repeat location?": "N",
    "App complete?": "Y",
    "Fee Schedule": "2020",
    "Receipt No.": 67,
    "Cash Amount": "$1500",
    "Check Amount": "0",
    "Card Amount": "",
    "Check No. / Approval Code": "512",
    "MRL#": "MRL48",
    "Notes": ""
  }

export async function getIntakeTable() {
  let table = [];

  for (let i = 0; i < 30; i++) {
    table.push({...row}); // {...row} because if we just push row it'll pass the row by reference
    table[i]["row"] = i + 1;

    for (let key in table[i]) {
      if (key !== "row" && key !== "Submission date") {
        table[i][key] = table[i][key].toString() + i.toString();
      }
    }
  }

  return {
    returnCode: 200,
    data: table,
  }
}

export async function filterIntakeTable(query) {
  let table = [];

  for (let i = 0; i < 4; i++) {
    table.push({...row}); // {...row} because if we just push row it'll pass the row by reference
    table[i]["row"] = i + 1;
  }

  return {
    returnCode: 200,
    data: table,
  }
}

export async function addRow(row) {
  return {
    returnCode: 200,
    rowAdded: row,
  }
}

export async function addFile(file) {
  return {
    returnCode: 200,
  }
}

export async function deleteRow(row) {
  return {
    returnCode: 200,
  }
}

export async function editRow(row) {
  return {
    returnCode: 200,
    rowEdited: row,
  }
}
