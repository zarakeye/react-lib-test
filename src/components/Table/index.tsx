/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

interface TableProps<T extends Record<string, any>> {
  data: T[];
}

const getFlattenedKeys = (obj: Record<string, any>, prefix  = ''): string[] => {
  return Object.keys(obj).reduce((a: string[], key) => {
    const pre =prefix ? `${prefix}.` : '';
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return [...a, ...getFlattenedKeys(value, `${pre}${key}`)];
    }
    return [...a, `${pre}${key}`];
  }, []);
};

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((a, b) => a?.[b], obj);
}

const Table: React.FC<TableProps<Record<string, any>>> = ({ data }): JSX.Element => {
  const [displayedEntries, setDisplayedEntries] = useState<number>(10);
  const optionsOfNumberOfDisplayedEntries = [10, 20, 50, 100];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesNumber, setPagesNumber] = useState<number>(10);
  const [restOfEntries, setRestOfEntries] = useState<number>(0);
  const [displayedRange, setDisplayedRange] = useState<Record<string, any>[]>([]);

  const flattenedKeys = data.length > 0 ? getFlattenedKeys(data[0]) : [];
  console.log('keys', flattenedKeys);

  const handleDisplayedEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayedEntries(parseInt(e.target.value));
  }

  useEffect(() => {
    setRestOfEntries(data.length % displayedEntries);
    console.log('restOfEntries', restOfEntries);
    setPagesNumber( Math.ceil(data.length / displayedEntries));
    console.log('pagesNumber', pagesNumber);
  }, [data.length, displayedEntries, pagesNumber, restOfEntries]);

  useEffect(() => {
    // displayedRange = data.slice(displayedEntries * (currentPage - 1), currentPage * displayedEntries);
    // console.log('displayedRange', displayedRange);
    // restOfDisplayedRange = data.slice(data.length - restOfEntries);
    // console.log('restOfDisplayedRange', restOfDisplayedRange);
    if (currentPage < pagesNumber) {
      setDisplayedRange(data.slice(displayedEntries * (currentPage - 1), currentPage * displayedEntries - 1));
      console.log('displayedRange', displayedRange);
    } else {
      setDisplayedRange(data.slice(displayedEntries * (currentPage - 1)));
      console.log('displayedRange', displayedRange);
    }
  }, [currentPage, data, displayedEntries, displayedRange, pagesNumber]);

  return (
    <>
      <div>
        <select name="displayedEntries" id="displayedEntries" onChange={handleDisplayedEntriesChange}>
          {optionsOfNumberOfDisplayedEntries.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="displayedEntries">Displayed entries</label>
      </div>
      <table className='w-full border-2'>
        <thead>
          <tr>
            {flattenedKeys.map((key, index) => (
              <th key={index} className='px-[10px] border-2'>{key.split('.').pop()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => ( */}
          {displayedRange.map((item, index) => ( 
            <tr key={index}>
              {flattenedKeys.map((key, colIndex) => {
                const value = getNestedValue(item, key);
                return <td key={colIndex} className='px-[10px]'>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex justify-between'>
        <p>Showing entries {displayedEntries * (currentPage - 1) + 1} to {displayedEntries * currentPage > data.length ? data.length : displayedEntries * currentPage} of {data.length} entries</p>
        {currentPage >= 2 && <button type='button' onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        <p>Page {currentPage} of {pagesNumber}</p>
        {pagesNumber && currentPage < pagesNumber && <button type='button' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </>
  );
}

export default Table;