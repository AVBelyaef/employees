import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterIsArchive } from '../../redux/actions';

const FilterIsArchive = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    const { checked } = e.target;
    dispatch(filterIsArchive(checked));
  };
  const check = useSelector((s) => s.employees.filterIsArchive);
  const [value, setValue] = useState(check);
  useEffect(() => {
    setValue(check);
  }, [check]);
  return (
    <div
      className="col-sm-3 col-lg-2 d-flex justify-content-center align-items-center"
    >
      <div className="form-group">
        <div className="form-check">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <input
            type="checkbox"
            name="isArchive"
            id="archive"
            checked={value}
            onChange={handleSelectChange}
            className="form-check-input"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="archive" className="form-check-label">
            в архиве
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterIsArchive;
