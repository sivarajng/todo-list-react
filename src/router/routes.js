import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { App, PageNotFound } from '../components'
import Home from '../components/Home'
import List from '../components/List'
import Add from '../components/Add'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
             <Route path="add" component={Add}/>
              <Route path="list" component={List}/>
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
)

export default routes

/*
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SkiDayCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={SkiDayList}>
                <Route path=":filter" component={SkiDayList}/>
            </Route>
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)
*/