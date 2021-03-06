import React from 'react';
import { RecoilRoot } from 'recoil';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Publishers from './containers/publishers/list';
import Routes from './utils/routes';
import styles from './App.module.scss';
import { PublishersNew } from './containers/publishers/create';
import { PublishersEdit } from './containers/publishers/edit';
import { PublisherView } from './containers/publishers/view';
import MappersCreate from './containers/mappers/create';
import Mappers from './containers/mappers/list';
import MappersView from './containers/mappers/view';
import MappersEdit from './containers/mappers/edit';
import Subscribers from './containers/subscribers/list';
import { SubscribersView } from './containers/subscribers/view';
import SubscribersCreate from './containers/subscribers/create';
import { LoginForm } from './containers/login/form';
import PrivateRoute from './components/privateRoute';
import { Dashboard } from './containers/dashboard';
import History from './containers/history';
import SubscribersEdit from './containers/subscribers/edit';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
    const LoginContainer = () => (
        <div>
            <Route
                exact
                path="/"
                render={() => <Redirect to={Routes.Login} />}
            />
            <Route exact path={Routes.Login}>
                <LoginForm />
            </Route>
        </div>
    );

    const DefaultContainer = () => (
        <div className={styles.App}>
            <Navbar />
            <Switch>
                <PrivateRoute exact path={Routes.Dashboard}>
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.Publishers}>
                    <Publishers />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.PublishersNew}>
                    <PublishersNew />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.PublishersEdit}>
                    <PublishersEdit />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.PublishersView}>
                    <PublisherView />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.Mappers}>
                    <Mappers />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.MappersNew}>
                    <MappersCreate />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.MappersEdit}>
                    <MappersEdit />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.MappersView}>
                    <MappersView />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.Subscribers}>
                    <Subscribers />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.SubscribersNew}>
                    <SubscribersCreate />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.SubscribersEdit}>
                    <SubscribersEdit />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.SubscribersView}>
                    <SubscribersView />
                </PrivateRoute>
                <PrivateRoute exact path={Routes.History}>
                    <History />
                </PrivateRoute>
            </Switch>
        </div>
    );

    return (
        <RecoilRoot>
            <Router>
                <Switch>
                    <Route
                        exact
                        path={Routes.Login}
                        component={LoginContainer}
                    />
                    <Route component={DefaultContainer} />
                </Switch>
            </Router>
        </RecoilRoot>
    );
}

export default App;
