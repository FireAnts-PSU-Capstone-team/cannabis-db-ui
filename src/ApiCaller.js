const endpoints = {
  getIntakeTable: 'https://capstone.sugar.coffee/list?table=intake',
  filterIntakeTable: 'https://capstone.sugar.coffee/query',
  addRow: 'https://capstone.sugar.coffee/load?table=intake',
  addFile: 'https://capstone.sugar.coffee/load',
  deleteRow: 'https://capstone.sugar.coffee/delete?table=intake',
  editRow: 'https://capstone.sugar.coffee/update',
  login: 'https://capstone.sugar.coffee/login',
  logout: 'https://capstone.sugar.coffee/logout',
  enableReadOnly: 'https://capstone.sugar.coffee/enablereadonly',
  disableReadOnly: 'https://capstone.sugar.coffee/disablereadonly',
};

export async function getErrorMessage(err) {
  if (err.text) return err.text()
  else return Promise.resolve(err)
}

export async function getIntakeTable() {
  return fetch(endpoints.getIntakeTable).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function filterIntakeTable(queryWhere) {
  const query = {
    table: 'intake',
    where: queryWhere,
  }

  return fetch(endpoints.filterIntakeTable, {
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
  return fetch(endpoints.addRow, {
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

  return fetch(endpoints.addFile, {
    method: 'post',
    body: data,
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function deleteRow(rowNumber) {
  if (isNaN(rowNumber)) return Promise.reject(`${rowNumber} is not a number`);

  const url = `${endpoints.deleteRow}&row=${rowNumber}`;

  return fetch(url).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function editRow(row) {
  return fetch(endpoints.editRow, {
    method: 'post',
    body: row,
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function login(credentials) {
  // return fetch(endpoints.login, {
  //   method: 'post',
  //   body: credentials,
  // }).then(response => {
  //   if (!response.ok) throw response;
  //   return response.json();
  // });

  return {
    email: 'admin@gmail.com',
    name: 'admin',
    is_admin: true,
    read_only: false,
  }
}

export async function logout() {
  // return fetch(endpoints.logout).then(response => {
  //   if (!response.ok) throw response;
  //   return response.json();
  // });

  return {
    returnCode: 200,
  }
}

export async function enableReadOnly() {
  // return fetch(endpoints.enableReadOnly).then(response => {
  //   if (!response.ok) throw response;
  //   return response.json();
  // });

  return {
    returnCode: 200,
  }
}

export async function disableReadOnly() {
  // return fetch(endpoints.disableReadOnly).then(response => {
  //   if (!response.ok) throw response;
  //   return response.json();
  // });

  return {
    returnCode: 200,
  }
}
