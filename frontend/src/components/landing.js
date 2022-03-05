import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute'

function Landing () {

    return (

        <BrowserRouter>
            {/* Empty Route for getting the location key */}
            <Route render={({ location }) => (
                <>
                    <div className="nav">
                        {location.pathname !== '/login'  && <NavBar/>}
                    </div>
                        <Switch>
                            <Route path="/" component={Home} />
                            <Route path="/:id" component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/callformedia" component={CallForMedia} />
                            <Route path="/notfound" component={NotFound} />

                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/adminpanel" component={NotFound} />
                        </Switch>
                </>
            )}/>
        </BrowserRouter >
    )

}

export default Landing