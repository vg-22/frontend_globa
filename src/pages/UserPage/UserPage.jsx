import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import { getUserRequested } from '../../redux/actions/actionCreators/user';
import { getUserNewsRequested } from '../../redux/actions/actionCreators/userNews';
import UserModal from '../../components/UserModal/UserModal';
import NewsCard from '../../components/NewsCard';

import './styles.css';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isLoading } = useSelector(((state) => state.userReducer));
  const { news } = useSelector(((state) => state.newsReducer));
  const { loginUser } = useSelector(((state) => state.authReducer));
  const isAccess = useSelector((state) => state.authReducer.isAccess);
  const isMyPage = (isAccess && loginUser.id === Number(id));
  useEffect(() => {
    dispatch(getUserRequested(id));
  }, [id]);
  useEffect(() => {
    dispatch(getUserNewsRequested(id));
  }, [id]);

  return (
    <>
      {isLoading ? <LinearProgress /> : (
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
          {isMyPage && <UserModal />}
          <div className="userPage">
            { news?.map((item) => <NewsCard cardContent={item} key={item.id} />) }
          </div>
        </>
      )}
      <div />
    </>
  );
}

export default memo(UserPage);
