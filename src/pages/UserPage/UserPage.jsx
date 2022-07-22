import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserRequested } from '../../redux/actions/actionCreators/user';

import './styles.css';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector(((state) => state.userReducer));
  useEffect(() => {
    dispatch(getUserRequested(id));
  }, []);

  return (

    <>
      <div className="nameUser">
        Имя пользоваталя:
        {user.name}
      </div>
      <div className="emailUser">
        {' '}
        Почтовый адрес:
        {user.email}
      </div>
    </>
  );
}

export default memo(UserPage);
