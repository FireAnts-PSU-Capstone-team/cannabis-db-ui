import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Checkbox, FormControlLabel, Switch, Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import './style.css';
import { getIntakeTable } from './MockApi';

const headers = [
  { id: 'row', numeric: true, label: 'row' },
  { id: 'Submission date', numeric: false, label: 'Submission date' },
  { id: 'Entity', numeric: false, label: 'Entity' },
  { id: 'DBA', numeric: false, label: 'DBA' },
  { id: 'Facility Address', numeric: false, label: 'Facility Address' },
  { id: 'Facility Suite #', numeric: true, label: 'Facility Suite #' },
  { id: 'Facility Zip', numeric: true, label: 'Facility Zip' },
  { id: 'Mailing Address', numeric: false, label: 'Mailing Address' },
  { id: 'MRL', numeric: false, label: 'MRL' },
  { id: 'Neighborhood Association', numeric: false, label: 'Neighborhood Association' },
  { id: 'Compliance Region', numeric: false, label: 'Compliance Region' },
  { id: 'Primary Contact First Name', numeric: false, label: 'Primary Contact First Name' },
  { id: 'Primary Contact Last Name', numeric: false, label: 'Primary Contact Last Name' },
  { id: 'Email', numeric: false, label: 'Email' },
  { id: 'Phone', numeric: false, label: 'Phone' },
  { id: 'Endorse Type', numeric: false, label: 'Endorse Type' },
  { id: 'License Type', numeric: false, label: 'License Type' },
  { id: 'Repeat location?', numeric: false, label: 'Repeat location?' },
  { id: 'App complete?', numeric: false, label: 'App complete?' },
  { id: 'Fee Schedule', numeric: false, label: 'Fee Schedule' },
  { id: 'Receipt No.', numeric: false, label: 'Receipt No.' },
  { id: 'Cash Amount', numeric: false, label: 'Cash Amount' },
  { id: 'Check Amount', numeric: false, label: 'Check Amount' },
  { id: 'Card Amount', numeric: false, label: 'Card Amount' },
  { id: 'Check No. / Approval Code', numeric: true, label: 'Check No. / Approval Code' },
  { id: 'MRL#', numeric: false, label: 'MRL#' },
  { id: 'Notes', numeric: false, label: 'Notes' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  } else if (b[orderBy] > a[orderBy]) {
    return 1;
  } else {
    return 0;
  }
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function IntakeTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headers.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const IntakeTableRow = props => {
  const { onRowClick, isRowSelected, index, row } = props;

  const labelId = `intake-table-checkbox-${index}`;
  const makeCellKey = property => `intake-table-cell-${index}-${property}`;

  return (
    <TableRow
      hover
      onClick={onRowClick}
      role="checkbox"
      aria-checked={isRowSelected}
      tabIndex={-1}
      key={row["row"]}
      selected={isRowSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isRowSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell key={makeCellKey('row')} align="right">{row['row']}</TableCell>
      <TableCell key={makeCellKey('Submission date')} align="left">{row['Submission date']}</TableCell>
      <TableCell key={makeCellKey('Entity')} align="left">{row['Entity']}</TableCell>
      <TableCell key={makeCellKey('DBA')} align="left">{row['DBA']}</TableCell>
      <TableCell key={makeCellKey('Facility Address')} align="left">{row['Facility Address']}</TableCell>
      <TableCell key={makeCellKey('Facility Suite #')} align="right">{row['Facility Suite #']}</TableCell>
      <TableCell key={makeCellKey('Facility Zip')} align="right">{row['Facility Zip']}</TableCell>
      <TableCell key={makeCellKey('Mailing Address')} align="left">{row['Mailing Address']}</TableCell>
      <TableCell key={makeCellKey('MRL')} align="left">{row['MRL']}</TableCell>
      <TableCell key={makeCellKey('Neighborhood Association')} align="left">{row['Neighborhood Association']}</TableCell>
      <TableCell key={makeCellKey('Compliance Region')} align="left">{row['Compliance Region']}</TableCell>
      <TableCell key={makeCellKey('Primary Contact First Name')} align="left">{row['Primary Contact First Name']}</TableCell>
      <TableCell key={makeCellKey('Primary Contact Last Name')} align="left">{row['Primary Contact Last Name']}</TableCell>
      <TableCell key={makeCellKey('Email')} align="left">{row['Email']}</TableCell>
      <TableCell key={makeCellKey('Phone')} align="left">{row['Phone']}</TableCell>
      <TableCell key={makeCellKey('Endorse Type')} align="left">{row['Endorse Type']}</TableCell>
      <TableCell key={makeCellKey('License Type')} align="left">{row['License Type']}</TableCell>
      <TableCell key={makeCellKey('Repeat location?')} align="left">{row['Repeat location?']}</TableCell>
      <TableCell key={makeCellKey('App complete?')} align="left">{row['App complete?']}</TableCell>
      <TableCell key={makeCellKey('Fee Schedule')} align="left">{row['Fee Schedule']}</TableCell>
      <TableCell key={makeCellKey('Receipt No.')} align="left">{row['Receipt No.']}</TableCell>
      <TableCell key={makeCellKey('Cash Amount')} align="left">{row['Cash Amount']}</TableCell>
      <TableCell key={makeCellKey('Check Amount')} align="left">{row['Check Amount']}</TableCell>
      <TableCell key={makeCellKey('Card Amount')} align="left">{row['Card Amount']}</TableCell>
      <TableCell key={makeCellKey('Check No. / Approval Code')} align="right">{row['Check No. / Approval Code']}</TableCell>
      <TableCell key={makeCellKey('MRL#')} align="left">{row['MRL#']}</TableCell>
      <TableCell key={makeCellKey('Notes')} align="left">{row['Notes']}</TableCell>
    </TableRow>
  );
}

const IntakeTableToolbar = props => {
  const { numSelected } = props;

  return (
    <Toolbar>
      <Typography variant="h6">Intake</Typography>
      {numSelected > 0 ? (
        <>
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle1">
            {numSelected} selected
          </Typography>
        </>
      ) : (
          <Tooltip title="Filter">
            <IconButton aria-label="filter">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
};

export default function IntakeTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('row');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    getIntakeTable().then(res => {
      let rows = res.data;
      setRows(rows);
    });
  }, []);

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(row => row["row"]);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
  };

  const handleRowClick = (_, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if (rows.length === 0) {
    return (
      <Container maxWidth="lg">
        <IntakeTableToolbar numSelected={selected.length} />
        <Typography variant="body1" align="center">No data found</Typography>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <IntakeTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="Data table"
          >
            <IntakeTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) =>
                  <IntakeTableRow
                    key={index}
                    onRowClick={event => handleRowClick(event, row["row"])}
                    isRowSelected={isSelected(row["row"])}
                    index={index}
                    row={row}
                  />
                )}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Container>
    );
  }
}
