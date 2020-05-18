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
    method: 'put',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(row),
  }).then(res => res.json())
}

export async function addFile(file) {
  const data = new FormData();
  data.append('file', file, file.name);

  return fetch('https://capstone.sugar.coffee/load', {
    method: 'post',
    body: data,
  }).then(res => res.json())
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
    email: 'admin@gmail.com',
    name: 'admin',
    is_admin: true,
  }
}

export async function logout(credentials) {
  return {
    returnCode: 200,
  }
}
