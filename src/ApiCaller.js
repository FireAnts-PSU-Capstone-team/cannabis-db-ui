export async function getErrorMessage(err) {
  if (err.text) return err.text()
  else return Promise.resolve(err)
}

export async function getIntakeTable() {
  return fetch('https://capstone.sugar.coffee/list?table=intake').then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function filterIntakeTable(queryWhere) {
  const query = {
    table: 'intake',
    where: queryWhere,
  }

  return fetch('https://capstone.sugar.coffee/query', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(query),
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function addRow(row) {
  return fetch('https://capstone.sugar.coffee/load?table=intake', {
    method: 'put',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(row),
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function addFile(file) {
  const data = new FormData();
  data.append('file', file, file.name);

  return fetch('https://capstone.sugar.coffee/load', {
    method: 'post',
    body: data,
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
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
