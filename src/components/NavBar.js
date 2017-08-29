import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import '../stylesheets/Menu.scss';

class NavBar extends React.Component {

    render() {

        return (
            <div>
                <div
                    style={{
                        backgroundColor: '#0277BD'
                        , height: 30, textAlign: 'center'
                        , flex: 1
                        , justifyContent: 'center'
                        , alignContent: 'center'
                        , alignItems: 'center'
                        , paddingTop: 10
                        , paddingBottom: 10
                        , fontSize: 30
                        , color: 'white'
                    }}>
                    ToDo List - React
        </div>
                <div
                    style={{
                        backgroundColor: '#03A9F4'
                        , height: 20
                        , flex: 1
                        , flexDirection: 'row'
                        , paddingTop: 5
                        , paddingBottom: 5
                        , fontSize: 15
                        , color: 'white'
                    }}>
                    <span style={{ flex: 0.5, padding: 10, fontFamily: 'sans-serif' }}>
                      <Link to="/" className="menu"  >  <span >   HOME </span></Link>
                   </span>
                    <span style={{ flex: 0.5, padding: 10, fontFamily: 'sans-serif' }}>
                      <Link to="/list" >     <span className="menu"  >   LIST </span></Link>
                   </span>
                    <span style={{ flex: 0.5, padding: 10, fontFamily: 'sans-serif' }}>
                     <Link to="/add" >     ADD</Link>
                   </span>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, props) =>
    ({

    })

const mapDispatchToProps = disptach =>
    ({

    })


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)  
