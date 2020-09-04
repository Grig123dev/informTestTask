import React from "react";

//styles
import styles from './ApiHeader.module.scss';

//assets
import resetIcon from '../../../assets/reset-icon.svg';
import resetIconActive from '../../../assets/reset-icon-active.svg';

//redux
import {useDispatch, useSelector} from "react-redux";
import {getDataFromReducer} from "../../../store/selectors/getDataFromReducer";
import {resetCheckboxes} from "../../../store/actions/resetCheckboxes";


const ApiHeader = () => {

  const dispatch = useDispatch();

  const data = useSelector(getDataFromReducer);
  const {isId, isName, isYear, isColor, isValue} = data;

  const isDisabled = isId && isName && isYear && isColor && isValue;

  const handleReset = () => {
    dispatch(resetCheckboxes());
  }

  return (
    <header className={styles.apiHeader}>
      <h1 className={styles.apiHeader__heading}>
        Pantone colors
      </h1>
      <button
        className={styles.apiHeader__resetBtn}
        onClick={handleReset}
        disabled={isDisabled}
      >
        {isDisabled ? (
          <img src={resetIcon} alt="reset"/>
        ) : (
          <img src={resetIconActive} alt="reset"/>
        )}
        <span className={!isDisabled ? styles.active : ''}>
          Reset
        </span>
      </button>
    </header>
  );
};

export default ApiHeader;