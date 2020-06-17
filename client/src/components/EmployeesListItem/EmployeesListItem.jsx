import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';

const EmployeesListItem = ({ employees }) => {
  const {
    name, phone, birthday, id,
  } = employees;
  const history = useHistory();
  const editPage = (idx) => {
    history.push(`/employees/${idx}/edit`);
  };
  return (
    <span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link to="#" onClick={() => editPage(id)} role="button" tabIndex={0} aria-pressed="false">{name}</Link>
      <div>{ phone }</div>
      <div>{ birthday }</div>
    </span>
  );
};
EmployeesListItem.propTypes = {
  employees: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
    role: PropTypes.string,
    id: PropTypes.number,
    isArchive: PropTypes.bool,
  }).isRequired,
};

export default EmployeesListItem;
