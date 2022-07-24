import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserRequested } from '../../redux/actions/actionCreators/user';
import UserModal from '../../components/UserModal/UserModal';
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
      <UserModal />
    </>
  );
}

export default memo(UserPage);
