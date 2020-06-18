import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRole } from '../../redux/actions';

const FilterRole = () => {
  const dispatch = useDispatch();
  // const { role, setRole } = useState();
  const handleSelectChange = (e) => {
    const { value } = e.target;
    dispatch(filterRole(value));
  };
  return (
    <div className="col-sm-4 col-lg-2 offset-lg-1">
      <select
        className="custom-select"
        // value={role}
        onChange={handleSelectChange}
      >
        <option value="driver">driver</option>
        <option value="waiter">waiter</option>
        <option value="cook">cook</option>
      </select>
    </div>
  );
};

export default FilterRole;
