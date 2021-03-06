import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './pages/project/projects/Projects';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGN_UP__ROUTE,
  CREATE_PROJECT_ROUTE,
  PROJECT_DETAIL_ROUTE,
  NOT_FOUND_ROUTE,
  ACCOUNT_ROUTE,
} from './constants/routes';
import ProjectForm from './pages/project/projectForm/ProjectForm';
import ProjectDetail from './pages/project/projectDetail/ProjectDetail';
import UserAccount from './pages/user/userAccount/UserAccount';
import { getFromLocalStorage, resolveUserRole } from './helpers/utils';
import { useDispatch } from 'react-redux';
import { logged, updateRole } from './redux/slices/userSlice';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getFromLocalStorage('user')) {
      const user = JSON.parse(getFromLocalStorage('user'));
      const role = resolveUserRole();

      dispatch(logged(user));
      dispatch(updateRole(role));
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <ReactNotification isMobile />
      <Router>
        <Switch>
          <Route exact path={HOME_ROUTE}>
            <Projects />
          </Route>
          <Route exact path={LOGIN_ROUTE}>
            <Login />
          </Route>
          <Route exact path={SIGN_UP__ROUTE}>
            <SignUp />
          </Route>
          <Route exact path={ACCOUNT_ROUTE}>
            <UserAccount />
          </Route>
          <PrivateRoute exact path={CREATE_PROJECT_ROUTE}>
            <ProjectForm />
          </PrivateRoute>
          <PrivateRoute path={PROJECT_DETAIL_ROUTE}>
            <ProjectDetail />
          </PrivateRoute>
          <Route path={NOT_FOUND_ROUTE}>
            <h1>Página no encontrada</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
