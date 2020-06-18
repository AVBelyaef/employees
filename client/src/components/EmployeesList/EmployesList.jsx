import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import { employeesRequsted } from '../../redux/actions';
import FilterRole from '../Filter/FilterRole';
import FilterIsArchive from '../Filter/FilterIsArchive';

const EmployesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(employeesRequsted());
  }, [dispatch]);

  const employees = useSelector((s) => s.employees.employees);
  const elements = employees.map((item) => {
    const { id } = item;
    return (
      <li key={id} className="list-group-item">
        <EmployeesListItem employees={item} />
      </li>
    );
  });
  return (
    <>
      <div className="row mt-3">
        <div className="col-sm-4 offset-lg-2 col-lg-3">
          <p>
            Сортировать по:
            <span>имени</span>
            <span>дате рождния</span>
          </p>
        </div>
        <FilterRole />
        <FilterIsArchive />
      </div>
      <hr className="col-11 col-lg-8" />
      <div className="row">
        <ul className="col-12 offset-lg-2 col-lg-8 list-group">
          {elements}
        </ul>
        <button type="button" className="btn btn-danger" onClick={() => history.push('/employees/new')}>
          Добавить
        </button>
      </div>
    </>
  );
};

export default EmployesList;
