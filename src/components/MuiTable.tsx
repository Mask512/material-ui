import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Stack
} from '@mui/material';

export const MuiTable = () => {
  return (
    <Stack width='650px' m='10px auto'>    
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: '300px',
      }}
    >
      <Table aria-label="simple-table" stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
              hover
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Raynor',
    last_name: 'Dressel',
    email: 'rdressel0@deliciousdays.com',
    gender: 'Male',
    ip_address: '221.219.5.230',
  },
  {
    id: 2,
    first_name: 'Pandora',
    last_name: 'Popland',
    email: 'ppopland1@gizmodo.com',
    gender: 'Genderqueer',
    ip_address: '76.68.49.71',
  },
  {
    id: 3,
    first_name: 'Nerta',
    last_name: 'Gresly',
    email: 'ngresly2@mit.edu',
    gender: 'Female',
    ip_address: '36.18.14.237',
  },
  {
    id: 4,
    first_name: 'Bill',
    last_name: 'Paulmann',
    email: 'bpaulmann3@businesswire.com',
    gender: 'Male',
    ip_address: '153.116.33.233',
  },
  {
    id: 5,
    first_name: 'Roth',
    last_name: 'Jaquet',
    email: 'rjaquet4@g.co',
    gender: 'Male',
    ip_address: '217.126.92.97',
  },
  {
    id: 6,
    first_name: 'Mariya',
    last_name: 'Treadwell',
    email: 'mtreadwell5@over-blog.com',
    gender: 'Female',
    ip_address: '233.162.67.55',
  },
  {
    id: 7,
    first_name: 'Flin',
    last_name: 'Groger',
    email: 'fgroger6@blogspot.com',
    gender: 'Male',
    ip_address: '24.118.181.20',
  },
  {
    id: 8,
    first_name: 'Abeu',
    last_name: 'Hassell',
    email: 'ahassell7@purevolume.com',
    gender: 'Male',
    ip_address: '40.211.56.219',
  },
  {
    id: 9,
    first_name: 'Kennith',
    last_name: 'Galland',
    email: 'kgalland8@tripadvisor.com',
    gender: 'Male',
    ip_address: '107.25.105.204',
  },
  {
    id: 10,
    first_name: 'Bronnie',
    last_name: 'Looney',
    email: 'blooney9@disqus.com',
    gender: 'Male',
    ip_address: '63.176.188.80',
  },
];
