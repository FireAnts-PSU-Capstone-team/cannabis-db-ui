const endpoints = {
  getIntakeTable: 'https://capstone.sugar.coffee/list?table=intake',
  filterIntakeTable: 'https://capstone.sugar.coffee/list',
  addRow: 'https://capstone.sugar.coffee/load?table=intake',
  addFile: 'https://capstone.sugar.coffee/load?table=intake',
  deleteRow: 'https://capstone.sugar.coffee/delete?table=intake',
  editRow: 'https://capstone.sugar.coffee/update',
  signup: 'https://capstone.sugar.coffee/signup',
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
  return fetch(endpoints.getIntakeTable, { credentials: 'include' }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function filterIntakeTable(queryWhere) {
  try {
    const query = {
      table: 'intake',
      where: JSON.parse(queryWhere),
    }

    return fetch(endpoints.filterIntakeTable, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(query),
    }).then(response => {
      if (!response.ok) throw response;
      return response.json();
    });
  } catch (error) {
    return Promise.reject(`${queryWhere} is not a valid JSON object`);
  }
}

export async function addRow(row) {
  return fetch(endpoints.addRow, {
    credentials: 'include',
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
    credentials: 'include',
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

  return fetch(url, { credentials: 'include' }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function editRow(row) {
  return fetch(endpoints.editRow, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(row),
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function signup(credentials) {
  return fetch(endpoints.signup, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(credentials),
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function login(credentials) {
  return fetch(endpoints.login, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(credentials),
  }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function logout() {
  return fetch(endpoints.logout, { credentials: 'include' }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function enableReadOnly() {
  return fetch(endpoints.enableReadOnly, { credentials: 'include' }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}

export async function disableReadOnly() {
  return fetch(endpoints.disableReadOnly, { credentials: 'include' }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}
