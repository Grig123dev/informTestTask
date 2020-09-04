import React, {useState, useEffect} from "react";

//styles
import styles from './Api.module.scss';

//components
import ApiHeader from "./ApiHeader";
import ApiTable from "./ApiTable";
import Loader from "../Loader";

//redux
import {useSelector} from "react-redux";
import {getDataFromReducer} from "../../store/selectors/getDataFromReducer";



const Api = () => {

  const data = useSelector(getDataFromReducer);

  const [loading, setLoading]= useState(false);

  useEffect(() => {
    data.data.length ? setLoading(false) : setLoading(true);
  }, [data.data.length]);

  return (
    <div className={styles.api}>
      <ApiHeader />

      {!loading ? (
        <ApiTable />
      ) : (
        <Loader />
      )}

    </div>
  );
};

export default Api;