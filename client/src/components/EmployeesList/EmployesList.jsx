import React from 'react';
import { useSelector } from 'react-redux';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';

const EmployesList = () => {
  const employees = useSelector((s) => s.employees.employees);
  const elements = employees.map((item) => {
    const { id } = item;
    return (
      <li key={id}>
        <EmployeesListItem employees={item} />
      </li>
    );
  });
  return (
    <ul>
      { elements }
    </ul>
  );
};

export default EmployesList;
