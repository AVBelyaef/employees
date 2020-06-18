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
    <div className="d-flex justify-content-center mt-3">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">
            Имя:
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              value={values.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="phone">
            Номер телефона:
            <InputMask
              mask="+7 (999) 999-9999"
              id="phone"
              name="phone"
              type="tel"
              className="form-control"
              value={values.phone}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="date">
            День рождения:
            <InputMask
              mask="99.99.9999"
              className="form-control"
              id="date"
              name="birthday"
              value={values.birthday}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="role">
            <select
              id="role"
              name="role"
              className="form-control"
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
        <div className="form-group form-check">
          <input
            type="checkbox"
            name="isArchive"
            id="archive"
            className="form-check-input"
            checked={values.isArchive}
            onChange={handleInputChange}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="archive" className="form-check-label">
            в архиве
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Обновить</button>
      </form>
    </div>
  );
};

export default EditEmployee;
