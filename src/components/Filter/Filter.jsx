import { useDispatch, useSelector } from 'react-redux';
import { updateFilterAction } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';

export  const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const handleFilterChange = (e) => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input className={css.input} name="filter" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

