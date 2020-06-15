import React from 'react';
import PropTypes from 'prop-types';

const EmployeesListItem = ({ employees }) => {
  const {
    name, phone, birthday, id,
  } = employees;
  // eslint-disable-next-line no-shadow
  const addPage = (id) => { };
  return (
    <span onClick={() => addPage(id)}>
      { name }
      { phone }
      { birthday }
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
