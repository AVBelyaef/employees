import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { fetchAddEmployee } from '../../redux/actions';

const NewEmployee = () => {
  const [values, setValues] = useState({
    name: '', phone: '', birthday: '', role: 'Повар', isArchive: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchAddEmployee(values));
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
      <form onSubmit={submitForm} className="">
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
              id="date"
              name="birthday"
              className="form-control"
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
        <button type="submit" className="btn btn-primary">Добавить</button>

      </form>
    </div>
  );
};

export default NewEmployee;
