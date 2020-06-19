import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import { employeesRequsted, sortBirthday, sortName } from '../../redux/actions';
import FilterRole from '../Filter/FilterRole';
import FilterIsArchive from '../Filter/FilterIsArchive';
import './EmployesList.scss';

const EmployesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(employeesRequsted());
  }, [dispatch]);

  const employeesArr = useSelector((s) => s.employees.employees);
  const filterRole = useSelector((s) => s.employees.filterRole);
  const filterIsArchive = useSelector((s) => s.employees.filterIsArchive);
  const sortNameField = useSelector((s) => s.employees.sortName);
  const sortBirthdayField = useSelector((s) => s.employees.sortBirthday);
  const employees = employeesArr
    .filter((e) => (e.role === filterRole || filterRole === 'all')
      && (e.isArchive === filterIsArchive));
  if (sortNameField) {
    if (sortBirthdayField) {
      dispatch(sortBirthday());
      employees.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      employees.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  }
  if (sortBirthdayField) {
    if (sortNameField) {
      dispatch(sortName());
      employees.sort((a, b) => moment(a.birthday, 'DD.MM.YYYY')
        - moment(b.birthday, 'DD.MM.YYYY'));
    } else {
      employees.sort((a, b) => moment(a.birthday, 'DD.MM.YYYY')
        - moment(b.birthday, 'DD.MM.YYYY'));
    }
  }

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
        <div className="col-sm-5 offset-lg-2 col-lg-3">
          <span>Сортировать по:</span>
          <ul className="list-group list-group-horizontal">
            <li
              className="p-2 pl-4 list-group-item sort"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="" onClick={() => dispatch(sortName())}>имени</Link>
            </li>
            <li
              className="p-2 pl-4 list-group-item sort"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="" onClick={() => dispatch(sortBirthday())}>дате</Link>
            </li>
          </ul>
        </div>
        <FilterRole />
        <FilterIsArchive />
      </div>
      <hr className="col-11 col-lg-8" />
      <div className="row">
        <ul className="col-12 offset-lg-2 col-lg-8 list-group">
          {elements}
        </ul>
      </div>
      <button type="button" className="btn btn-danger offset-lg-2 mt-2" onClick={() => history.push('/employees/new')}>
        Добавить
      </button>
    </>
  );
};

export default EmployesList;
