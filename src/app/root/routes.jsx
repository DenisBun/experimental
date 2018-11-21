import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'app/scenes/home/components';

const routes = (
    <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/player" component={PlayerPageContainer} />
        <Route
            path="/trailer/:trailerId"
            component={TrailerPlayerPageContainer}
        />
        <Route
            path="/order/:licenseType/:assetId"
            component={OrderProcessContainer}
        />
        <Route
            path="/film/:id"
            render={({ location }) => (
                <AssetDetailPageContainer
                    assetType="film"
                    assetId={getIdFromSlugUrl(location.pathname)}
                />
            )}
        />
        <Route
            path="/serie/:id"
            render={({ location }) => (
                <AssetDetailPageContainer
                    assetType="serie"
                    assetId={getIdFromSlugUrl(location.pathname)}
                />
            )}
        />
        <Route
            render={({ location }) => (
                <PageObjectParserContainer
                    pageName={location.pathname.slice(1)}
                />
            )}
        /> */}
    </Switch>
);

export default routes;
