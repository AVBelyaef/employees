import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import { employeesRequsted } from '../../redux/actions';

const EmployesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(employeesRequsted());
  }, [dispatch]);

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
      {elements}
    </ul>
  );
};

export default EmployesList;
