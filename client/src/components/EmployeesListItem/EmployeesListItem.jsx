import React from 'react';

const EmployeesListItem = ({ employees }) => {
  const { name, phone, birthday } = employees;
  return (
    <span>
      { name }
      { phone }
      { birthday }
    </span>
  );
};

export default EmployeesListItem;
