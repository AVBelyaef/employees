import React from 'react';
import { useDispatch } from 'react-redux';
import { filterIsArchive } from '../../redux/actions';

const FilterIsArchive = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (e) => {
    const { checked } = e.target;
    dispatch(filterIsArchive(checked));
  };
  return (
    <div
      className="col-sm-4 col-lg-2 d-flex justify-content-center align-items-center"
    >
      <div className="form-group">
        <div className="form-check">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <input
            type="checkbox"
            name="isArchive"
            id="archive"
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
