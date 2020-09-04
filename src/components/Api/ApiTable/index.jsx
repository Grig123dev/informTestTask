import React from "react";

//styles
import styles from './ApiTable.module.scss';

//redux
import {useDispatch, useSelector} from "react-redux";
import {getDataFromReducer} from "../../../store/selectors/getDataFromReducer";
import {toggleCheckbox} from "../../../store/actions/toggleCheckbox";


const ApiTable = () => {

  const dispatch = useDispatch();
  const data = useSelector(getDataFromReducer);
  const {isId, isName, isYear, isColor, isValue} = data;

  const handleChange = (e) => {
    dispatch(toggleCheckbox(e.target.name));
  };

  return (
    <div className={styles.apiTable}>
      <table className={styles.apiTable__content}>
        <tbody>
          <tr className={styles.apiTable__content_headings}>
            {
              isId ? (
                <td className={styles.apiTable__content_id}>
                  <input type="checkbox" checked={data.isId} name="isId" onChange={handleChange} /> id
                </td>
              ) : null
            }
            {
              isName ? (
                <td className={styles.apiTable__content_name}>
                  <input type="checkbox" checked={data.isName} name="isName" onChange={handleChange} /> name
                </td>
              ) : null
            }
            {
              isYear ? (
                <td className={styles.apiTable__content_year}>
                  <input type="checkbox" checked={data.isYear} name="isYear" onChange={handleChange} /> year
                </td>
              ) : null
            }
            {
              isColor ? (
                <td className={styles.apiTable__content_color}>
                  <input type="checkbox" checked={data.isColor} name="isColor" onChange={handleChange} /> color
                </td>
              ) : null
            }
            {
              isValue ? (
                <td className={styles.apiTable__content_value}>
                  <input type="checkbox" checked={data.isValue} name="isValue" onChange={handleChange} /> pantone value
                </td>
              ) : null
            }
          </tr>

          {
            data.data.map((d) => {

              return (
                <tr key={d.id} className={styles.apiTable__content_details}>
                  {
                    data.isId ? (
                      <td className={styles.apiTable__content_id}>
                        {d.id}
                      </td>
                    ) : null
                  }
                  {
                    data.isName ? (
                      <td className={styles.apiTable__content_name}>
                        {d.name}
                      </td>
                    ) : null
                  }
                  {
                    data.isYear ? (
                      <td className={styles.apiTable__content_year}>
                        {d.year}
                      </td>
                    ) : null
                  }
                  {
                    data.isColor ? (
                      <td className={styles.apiTable__content_color}>
                        <span style={{backgroundColor: d.color}} className={styles.color}></span> {d.color}
                      </td>
                    ) : null
                  }
                  {
                    data.isValue ? (
                      <td className={styles.apiTable__content_value}>
                        {d.pantone_value}
                      </td>
                    ) : null
                  }
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;