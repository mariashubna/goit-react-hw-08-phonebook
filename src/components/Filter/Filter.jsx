import { useDispatch, useSelector } from 'react-redux';
import { updateFilterAction } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css';
import search from '../../images/search.png'

export  const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const handleFilterChange = (e) => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <div className={css.container} >
      <p className={css.label}>Find contacts by name</p>
      <input className={css.input} name="filter" value={filter} onChange={handleFilterChange} />
      <img className={css.search} src={search} alt="" />
    </div>
  );
};

