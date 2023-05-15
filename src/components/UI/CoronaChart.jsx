import { Line } from 'react-chartjs-2';
//eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// ! Default options to configure Line chart
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Corona Cases in 2022',
    },
  },
};

//! Actual component to print chart
export default function CoronaChart() {
  // Getting all corona cases
  const allCases = useSelector((state) => state.coronaData.allCases);
  //  Creating states
  const [filterDate, setFilterDate] = useState('21');
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);

  // Filtering chart data
  useEffect(() => {
    let cases = [];
    let deaths = [];
    let recovered = [];
    let ctr = 1;
    let sum = 0;

    // Extracting all cases
    for (const key in allCases.cases) {
      if (key.endsWith(filterDate)) {
        if (key.indexOf(ctr) === 0) {
          sum += allCases.cases[key];
        } else {
          ctr++;
          cases.push(sum);
          sum = allCases.cases[key];
        }
      }
    }
    cases.push(sum);

    // Extracting all deaths
    ctr = 1;
    sum = 0;
    for (const key in allCases.deaths) {
      if (key.endsWith(filterDate)) {
        if (key.indexOf(ctr) === 0) {
          sum += allCases.deaths[key];
        } else {
          ctr++;
          deaths.push(sum);
          sum = allCases.deaths[key];
        }
      }
    }
    deaths.push(sum);

    // Extracting all recovered cases
    ctr = 1;
    sum = 0;
    for (const key in allCases.recovered) {
      if (key.endsWith(filterDate)) {
        if (key.indexOf(ctr) === 0) {
          sum += allCases.recovered[key];
        } else {
          ctr++;
          recovered.push(sum);
          sum = allCases.recovered[key];
        }
      }
    }
    recovered.push(sum);

    // Setting states
    setCases(cases);
    setDeaths(deaths);
    setRecovered(recovered);
  }, [filterDate, allCases]);

  // Handling the filter change
  const handleChange = (e) => {
    setFilterDate(e.target.value);
  };

  // Configuring Line chart data options
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Cases',
        data: cases,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Deaths',
        data: deaths,
        fill: false,
        borderColor: '#742774',
      },
      {
        label: 'Recovered',
        data: recovered,
        fill: false,
        borderColor: 'lime',
      },
    ],
  };

  return (
    <Box
      sx={{
        borderRadius: '20px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        p: '1rem',
        mb: 4,
        height: '22rem',
      }}
    >
      <Box
        sx={{
          height: '16rem',
          mb: 2,
        }}
      >
        {/* Actual Chart from chartJS 2 for React */}
        <Line data={data} options={options} />
      </Box>
      <FormControl fullWidth size='small'>
        <InputLabel id='demo-simple-select-label'>Filter By Year</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filterDate}
          label='Filter By Year'
          onChange={handleChange}
        >
          <MenuItem value={'21'}>2021</MenuItem>
          <MenuItem value={'22'}>2022</MenuItem>
          <MenuItem value={'23'}>2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
