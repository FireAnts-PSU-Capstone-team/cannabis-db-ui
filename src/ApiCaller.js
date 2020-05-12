export async function getIntakeTable() {
  return fetch('https://capstone.sugar.coffee/list?table=intake').then(res => res.json());
}

export async function filterIntakeTable(query) {
  return {
    returnCode: 200,
    data: [],
  }
}

export async function addRow(row) {
  return fetch('https://capstone.sugar.coffee/load?table=intake', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: row,
  }).then(res => res.json())
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

export async function login(credentials) {
  return {
    returnCode: 200,
  }
}

export async function logout(credentials) {
  return {
    returnCode: 200,
  }
}
