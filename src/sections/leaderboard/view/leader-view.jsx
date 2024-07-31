import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';

import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import StockTableRow from '../user-table-row';

// Mock data
const mockUsers = [
  { rank: 1, name: 'Alice', interestGenerated: '12.5%', lastUpdated: '2024-07-28' },
  { rank: 2, name: 'Bob', interestGenerated: '10.8%', lastUpdated: '2024-07-27' },
  { rank: 3, name: 'Charlie', interestGenerated: '9.6%', lastUpdated: '2024-07-26' },
  { rank: 4, name: 'David', interestGenerated: '8.3%', lastUpdated: '2024-07-25' },
  { rank: 5, name: 'Eve', interestGenerated: '7.4%', lastUpdated: '2024-07-24' },
  { rank: 6, name: 'Frank', interestGenerated: '7.1%', lastUpdated: '2024-07-23' },
  { rank: 7, name: 'Grace', interestGenerated: '6.9%', lastUpdated: '2024-07-22' },
  { rank: 8, name: 'Hank', interestGenerated: '6.5%', lastUpdated: '2024-07-21' },
  { rank: 9, name: 'Ivy', interestGenerated: '6.3%', lastUpdated: '2024-07-20' },
  { rank: 10, name: 'Jack', interestGenerated: '6.0%', lastUpdated: '2024-07-19' },
  { rank: 11, name: 'Kara', interestGenerated: '5.8%', lastUpdated: '2024-07-18' },
  { rank: 12, name: 'Liam', interestGenerated: '5.5%', lastUpdated: '2024-07-17' },
  { rank: 13, name: 'Mia', interestGenerated: '5.3%', lastUpdated: '2024-07-16' },
  { rank: 14, name: 'Nina', interestGenerated: '5.0%', lastUpdated: '2024-07-15' },
  { rank: 15, name: 'Oscar', interestGenerated: '4.8%', lastUpdated: '2024-07-14' },
  { rank: 16, name: 'Paul', interestGenerated: '4.5%', lastUpdated: '2024-07-13' },
  { rank: 17, name: 'Quinn', interestGenerated: '4.3%', lastUpdated: '2024-07-12' },
  { rank: 18, name: 'Ruth', interestGenerated: '4.0%', lastUpdated: '2024-07-11' },
  { rank: 19, name: 'Sam', interestGenerated: '3.8%', lastUpdated: '2024-07-10' },
  { rank: 20, name: 'Tina', interestGenerated: '3.5%', lastUpdated: '2024-07-09' },
]

// ----------------------------------------------------------------------

export default function LeaderView() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('rank');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState(mockUsers); // Use mock data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUsers(mockUsers); // Use mock data here
      setLoading(false);
    }, 1000);
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
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
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users, // Use users here
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Leaderboard</Typography>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            {loading ? ( // Show loading icon if loading
              <Stack alignItems="center" justifyContent="center" height={400}>
                <CircularProgress />
              </Stack>
            ) : (
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead
                  order={order}
                  orderBy={orderBy}
                  rowCount={users.length} // Use users here
                  numSelected={selected.length}
                  onRequestSort={handleSort}
                  onSelectAllClick={handleSelectAllClick}
                  headLabel={[
                    { id: 'rank', label: 'Rank' },
                    { id: 'name', label: 'User Name' },
                    { id: 'interestGenerated', label: 'Profit Generated %' },
                    { id: 'lastUpdated', label: 'Last Updated' },
                    { id: '' },
                  ]}
                />
                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <StockTableRow
                        key={row.name}
                        rank={row.rank}
                        name={row.name}
                        interestGenerated={row.interestGenerated}
                        lastUpdated={row.lastUpdated}
                        selected={selected.indexOf(row.name) !== -1}
                        handleClick={(event) => handleClick(event, row.name)}
                      />
                    ))}

                  <TableEmptyRows
                    height={77}
                    emptyRows={emptyRows(page, rowsPerPage, users.length)} // Use users here
                  />

                  {notFound && <TableNoData query={filterName} />}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length} // Use users here
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
