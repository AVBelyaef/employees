import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { fetchUpdateEmployee, fetchEmployeeById } from '../../redux/actions';

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchEmployeeById(id));
  }, [dispatch, id]);
  const employee = useSelector((s) => s.employees.employeeById);
  const [values, setValues] = useState({ ...employee });
  useEffect(() => {
    setValues({ ...employee });
  }, [employee]);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchUpdateEmployee(values));
    setValues({
      name: '', phone: '', birthday: '', role: 'Повар', isArchive: false,
    });
    history.push('/employees');
  };
  const handleInputChange = (e) => {
    const {
      name, value, checked,
    } = e.target;
    if (name === 'isArchive') {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className="">
        <label htmlFor="name">
          Имя:
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className="">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="phone">
          Номер телефона:
          <InputMask
            mask="+7 (999) 999-9999"
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className="">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="date">
          День рождения:
          <InputMask
            mask="99.99.9999"
            id="date"
            name="birthday"
            value={values.birthday}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="">
        <label htmlFor="role">
          <select
            id="role"
            name="role"
            value={values.role}
            onChange={handleInputChange}
            required
          >
            <option value="cook">Повар</option>
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="archive">
          в архиве
          <input
            type="checkbox"
            name="isArchive"
            id="archive"
            checked={values.isArchive}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="buttons">
        <input type="submit" value="Оформить" />
      </div>
    </form>
  );
};

export default EditEmployee;
