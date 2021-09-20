import React from 'react';
import { useDispatch } from 'react-redux';
import { signOutAction } from 'modules/Auth/actions';

export const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOutAction());
  }

  return (
    <div>
      <div>Home page</div>
      <button onClick={handleClick}>log out</button>
    </div>
  )
}