import { Redirect, Route, Switch } from "react-router-dom";
import * as React from "react";

import { AppHeader } from "./components/AppHeader";
import { ErrorBoundary } from "./components/ErrorBoundary";

import styles from "./App.module.less";

const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const CounterPage = React.lazy(() => import("./pages/CounterPage"));

export const App = () =>
{
    return (
        <div className={styles.container}>
            <AppHeader />
            <ErrorBoundary>
                <React.Suspense fallback={<div className={styles.loader}>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            <CounterPage />
                        </Route>
                        <Route exact path="/about">
                            <AboutPage />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
};
