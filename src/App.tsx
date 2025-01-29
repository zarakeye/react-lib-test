import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  address: GeographicAddress;
  department: string;
}

export interface GeographicAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

function App() {
  // const [count, setCount] = useState(0)

  const data: Employee[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      startDate: '2020-01-01',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345'
      },
      department: 'Sales'
    },
    {
    id: '2',
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: '1988-03-14',
    startDate: '2018-06-15',
    address: { 
      street: '456 Elm Ave',
      city: 'Riverside',
      state: 'CA', 
      zipCode: '92507'
    },
    department: 'Marketing'
  },
  {
    id: '3',
    firstName: 'James',
    lastName: 'Miller',
    dateOfBirth: '1975-11-30',
    startDate: '2015-02-20',
    address: {
      street: '789 Oak Ln',
      city: 'Boulder',
      state: 'CO',
      zipCode: '80302'
    },
    department: 'Engineering'
  },
  {
    id: '4',
    firstName: 'Sophia',
    lastName: 'Wilson',
    dateOfBirth: '1993-07-22',
    startDate: '2020-08-10',
    address: {
      street: '321 Pine Rd',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301'
    },
    department: 'IT'
  },
  {
    id: '5',
    firstName: 'Liam',
    lastName: 'Taylor',
    dateOfBirth: '1982-09-05',
    startDate: '2019-04-01',
    address: {
      street: '654 Birch St',
      city: 'Orlando',
      state: 'FL',
      zipCode: '32801'
    },
    department: 'Finance'
  },
  {
    id: '6',
    firstName: 'Olivia',
    lastName: 'Anderson',
    dateOfBirth: '1995-12-25',
    startDate: '2021-03-15',
    address: {
      street: '987 Cedar Blvd',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101'
    },
    department: 'HR'
  },
  {
    id: '7',
    firstName: 'Noah',
    lastName: 'Thomas',
    dateOfBirth: '1979-04-18',
    startDate: '2017-11-22',
    address: {
      street: '135 Maple Dr',
      city: 'Boston',
      state: 'MA',
      zipCode: '02108'
    },
    department: 'Legal'
  },
  {
    id: '8',
    firstName: 'Ava',
    lastName: 'Jackson',
    dateOfBirth: '1991-06-09',
    startDate: '2016-09-05',
    address: {
      street: '246 Walnut Cir',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202'
    },
    department: 'Sales'
  },
  {
    id: '9',
    firstName: 'William',
    lastName: 'White',
    dateOfBirth: '1987-02-14',
    startDate: '2022-01-10',
    address: {
      street: '369 Spruce Way',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30301'
    },
    department: 'Marketing'
  },
  {
    id: '10',
    firstName: 'Isabella',
    lastName: 'Harris',
    dateOfBirth: '1984-08-03',
    startDate: '2014-07-01',
    address: {
      street: '579 Ash Ct',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601'
    },
    department: 'Engineering'
  },
  {
    id: '11',
    firstName: 'Benjamin',
    lastName: 'Martin',
    dateOfBirth: '1996-05-19',
    startDate: '2023-02-14',
    address: {
      street: '753 Redwood Ln',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201'
    },
    department: 'IT'
  },
  {
    id: '12',
    firstName: 'Mia',
    lastName: 'Thompson',
    dateOfBirth: '1972-10-31',
    startDate: '2010-08-20',
    address: {
      street: '159 Willow Ave',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001'
    },
    department: 'Finance'
  },
  {
    id: '13',
    firstName: 'Lucas',
    lastName: 'Garcia',
    dateOfBirth: '1998-01-12',
    startDate: '2022-06-01',
    address: {
      street: '426 Cypress Rd',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101'
    },
    department: 'HR'
  },
  {
    id: '14',
    firstName: 'Charlotte',
    lastName: 'Martinez',
    dateOfBirth: '1989-07-07',
    startDate: '2018-12-10',
    address: {
      street: '753 Palm St',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101'
    },
    department: 'Legal'
  },
  {
    id: '15',
    firstName: 'Henry',
    lastName: 'Robinson',
    dateOfBirth: '1965-03-25',
    startDate: '2005-05-15',
    address: {
      street: '852 Sequoia Dr',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201'
    },
    department: 'Sales'
  },
  {
    id: '16',
    firstName: 'Amelia',
    lastName: 'Clark',
    dateOfBirth: '1994-09-08',
    startDate: '2020-10-22',
    address: {
      street: '951 Magnolia Ave',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37201'
    },
    department: 'Marketing'
  },
  {
    id: '17',
    firstName: 'Alexander',
    lastName: 'Rodriguez',
    dateOfBirth: '1981-12-17',
    startDate: '2019-07-07',
    address: {
      street: '264 Sycamore Ln',
      city: 'New Orleans',
      state: 'LA',
      zipCode: '70112'
    },
    department: 'Engineering'
  },
  {
    id: '18',
    firstName: 'Harper',
    lastName: 'Lewis',
    dateOfBirth: '1997-04-29',
    startDate: '2023-01-30',
    address: {
      street: '687 Juniper Way',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89101'
    },
    department: 'IT'
  },
  {
    id: '19',
    firstName: 'Daniel',
    lastName: 'Lee',
    dateOfBirth: '1978-06-13',
    startDate: '2016-04-18',
    address: {
      street: '396 Acacia Blvd',
      city: 'Salt Lake City',
      state: 'UT',
      zipCode: '84101'
    },
    department: 'Finance'
  },
  {
    id: '20',
    firstName: 'Evelyn',
    lastName: 'Walker',
    dateOfBirth: '1986-02-09',
    startDate: '2013-09-05',
    address: {
      street: '531 Olive St',
      city: 'Minneapolis',
      state: 'MN',
      zipCode: '55401'
    },
    department: 'HR'
  },
  {
    id: '21',
    firstName: 'Matthew',
    lastName: 'Hall',
    dateOfBirth: '1990-08-24',
    startDate: '2017-10-17',
    address: {
      street: '753 Peach Ave',
      city: 'Charlotte',
      state: 'NC',
      zipCode: '28201'
    },
    department: 'Legal'
  },
  {
    id: '22',
    firstName: 'Abigail',
    lastName: 'Allen',
    dateOfBirth: '1983-11-11',
    startDate: '2021-05-19',
    address: {
      street: '159 Cherry Ln',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48201'
    },
    department: 'Sales'
  },
  {
    id: '23',
    firstName: 'Joseph',
    lastName: 'Young',
    dateOfBirth: '1974-05-02',
    startDate: '2008-03-12',
    address: {
      street: '426 Apple Rd',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19102'
    },
    department: 'Marketing'
  },
  {
    id: '24',
    firstName: 'Ella',
    lastName: 'King',
    dateOfBirth: '1999-03-19',
    startDate: '2023-08-01',
    address: {
      street: '753 Pear St',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201'
    },
    department: 'Engineering'
  },
  {
    id: '25',
    firstName: 'Samuel',
    lastName: 'Wright',
    dateOfBirth: '1980-10-05',
    startDate: '2015-11-25',
    address: {
      street: '852 Plum Cir',
      city: 'Columbus',
      state: 'OH',
      zipCode: '43201'
    },
    department: 'IT'
  },
  {
    id: '26',
    firstName: 'Sofia',
    lastName: 'Scott',
    dateOfBirth: '1992-07-30',
    startDate: '2019-02-14',
    address: {
      street: '369 Grape Blvd',
      city: 'Indianapolis',
      state: 'IN',
      zipCode: '46201'
    },
    department: 'Finance'
  },
  {
    id: '27',
    firstName: 'David',
    lastName: 'Green',
    dateOfBirth: '1968-01-15',
    startDate: '2000-09-09',
    address: {
      street: '159 Orange Dr',
      city: 'Kansas City',
      state: 'MO',
      zipCode: '64101'
    },
    department: 'HR'
  },
  {
    id: '28',
    firstName: 'Scarlett',
    lastName: 'Baker',
    dateOfBirth: '1985-04-21',
    startDate: '2014-12-03',
    address: {
      street: '753 Lemon Way',
      city: 'Louisville',
      state: 'KY',
      zipCode: '40201'
    },
    department: 'Legal'
  },
  {
    id: '29',
    firstName: 'Jackson',
    lastName: 'Adams',
    dateOfBirth: '1991-09-12',
    startDate: '2018-08-22',
    address: {
      street: '426 Lime Ave',
      city: 'Baltimore',
      state: 'MD',
      zipCode: '21201'
    },
    department: 'Sales'
  },
  {
    id: '30',
    firstName: 'Grace',
    lastName: 'Nelson',
    dateOfBirth: '1977-12-08',
    startDate: '2003-06-15',
    address: {
      street: '852 Berry Ln',
      city: 'Memphis',
      state: 'TN',
      zipCode: '37501'
    },
    department: 'Marketing'
  },
  {
    id: '31',
    firstName: 'Anthony',
    lastName: 'Carter',
    dateOfBirth: '1989-06-25',
    startDate: '2016-05-10',
    address: {
      street: '369 Kiwi St',
      city: 'Milwaukee',
      state: 'WI',
      zipCode: '53201'
    },
    department: 'Engineering'
  },
  {
    id: '32',
    firstName: 'Chloe',
    lastName: 'Mitchell',
    dateOfBirth: '1995-02-14',
    startDate: '2022-07-01',
    address: {
      street: '753 Mango Rd',
      city: 'Albuquerque',
      state: 'NM',
      zipCode: '87101'
    },
    department: 'IT'
  },
  {
    id: '33',
    firstName: 'Christopher',
    lastName: 'Perez',
    dateOfBirth: '1973-08-19',
    startDate: '2007-04-18',
    address: {
      street: '159 Papaya Cir',
      city: 'Tucson',
      state: 'AZ',
      zipCode: '85701'
    },
    department: 'Finance'
  },
  {
    id: '34',
    firstName: 'Victoria',
    lastName: 'Roberts',
    dateOfBirth: '1987-11-27',
    startDate: '2011-10-10',
    address: {
      street: '426 Guava Blvd',
      city: 'Fresno',
      state: 'CA',
      zipCode: '93650'
    },
    department: 'HR'
  },
  {
    id: '35',
    firstName: 'Ryan',
    lastName: 'Turner',
    dateOfBirth: '1993-04-05',
    startDate: '2020-09-15',
    address: {
      street: '753 Fig Ave',
      city: 'Sacramento',
      state: 'CA',
      zipCode: '95814'
    },
    department: 'Legal'
  },
  {
    id: '36',
    firstName: 'Luna',
    lastName: 'Phillips',
    dateOfBirth: '1984-01-31',
    startDate: '2019-11-11',
    address: {
      street: '852 Coconut Ln',
      city: 'Honolulu',
      state: 'HI',
      zipCode: '96813'
    },
    department: 'Sales'
  },
  {
    id: '37',
    firstName: 'Dylan',
    lastName: 'Campbell',
    dateOfBirth: '1979-07-23',
    startDate: '2017-03-25',
    address: {
      street: '369 Pineapple Dr',
      city: 'Anchorage',
      state: 'AK',
      zipCode: '99501'
    },
    department: 'Marketing'
  }
];

  

  // const data: Employee[] = [JohnDoe, JaneDoe];
  console.log('data', data);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Table data={data} />
    </>
  )
}

export default App
