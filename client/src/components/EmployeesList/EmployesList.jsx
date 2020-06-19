import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import { employeesRequsted, sortBirthdayAC, sortNameAC } from '../../redux/actions';
import FilterRole from '../Filter/FilterRole';
import FilterIsArchive from '../Filter/FilterIsArchive';
import './EmployesList.scss';

const EmployesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(employeesRequsted());
  }, [dispatch]);
  const state = useSelector((s) => s.employees);
  const {
    filterRole, filterIsArchive, sortName, sortBirthday, isLoading,
  } = state;
  const employees = state.employees
    .filter((e) => (e.role === filterRole || filterRole === 'all')
      && (e.isArchive === filterIsArchive));
  if (sortName) {
    if (sortBirthday) {
      dispatch(sortBirthdayAC());
      employees.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      employees.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  }
  if (sortBirthday) {
    if (sortName) {
      dispatch(sortNameAC());
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
    isLoading
      ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
      : (
        <>
          <div className="row mt-3">
            <div className="col-sm-5 offset-lg-2 col-lg-3">
              <span>Сортировать по:</span>
              <ul className="list-group list-group-horizontal">
                <li
                  className="p-2 pl-4 list-group-item sort"
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link to="" onClick={() => dispatch(sortNameAC())}>имени</Link>
                </li>
                <li
                  className="p-2 pl-4 list-group-item sort"
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link to="" onClick={() => dispatch(sortBirthdayAC())}>дате</Link>
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
      )
  );
};

export default EmployesList;
