import React, {useEffect, useState} from 'react';

//redux
import {useDispatch, useSelector} from "react-redux";
import {getRequestedData} from "./store/actions/getRequestedData";
import {getDataFromReducer} from "./store/selectors/getDataFromReducer";
import request from './utils/api';

//styles
import './App.css';

//components
import Api from "./components/Api";

//common
import Container from "./common/Container";


function App() {

  const dispatch = useDispatch();
  const data = useSelector(getDataFromReducer);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data.data.length) {
      request().get()
        .then((res) => {
          setLoading(true);
          dispatch(getRequestedData(res.data.data));
        });
    }
  }, [data.data.length, dispatch]);

  return (
    <div className="App">
      <Container>
        <Api loading={loading}/>
      </Container>
    </div>
  );
}

export default App;
