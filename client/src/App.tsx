import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { SignIn } from 'modules/Auth/pages/SignIn';
import { SignUp } from 'modules/Auth/pages/SignUp';
import { Home } from 'modules/Home/Pages/Home';
import { Loading } from 'common/components/Loading/Loading';
import { isAppLoadingSelector } from 'common/selectors/selectors';
import { ROUTES_PATH } from 'common/constants';

const App = (): JSX.Element => {
  const isAppLoading = useSelector(isAppLoadingSelector);

  if (isAppLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route exact path={ROUTES_PATH.HOME} render={() => <Home />} />
      <Route exact path={ROUTES_PATH.SIGN_IN} render={() => <SignIn />} />
      <Route exact path={ROUTES_PATH.SIGN_UP} render={() => <SignUp />} />
      <Route render={() => (<div>Not found.</div>)} />
    </Switch>
  );
}

export default App;
