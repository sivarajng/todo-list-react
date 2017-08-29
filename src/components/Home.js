import React from 'react';
import { connect } from 'react-redux'
import '../stylesheets/Box.scss';
import { listTask } from '../store/actions'

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    this.props.listTask();

  }
  render() {

    return (
      <div >
        <div className="box">
          <div
            style={{
              fontSize: 25
              , color: 'black'
            }}>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span style={{ fontSize: 40, fontWeight: 'bold', color: '#01579b' }} >   {this.props.tasks.length} </span>
            </span>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span >   Tasks</span>
            </span>
          </div>

        </div>

        <div className="box">
          <div
            style={{
              fontSize: 30
              , color: 'black'
            }}>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span style={{ fontSize: 40, fontWeight: 'bold', color: '#01579b' }} >   {this.props.tasks.filter((itm)=>itm.completed==false).length} </span>
            </span>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span >   In Progress</span>
            </span>
          </div>

        </div>
        <div className="box">
          <div
            style={{
              fontSize: 30
              , color: 'black'
            }}>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span style={{ fontSize: 40, fontWeight: 'bold', color: '#01579b' }} >   {this.props.tasks.filter((itm)=>itm.completed==true).length} </span>
            </span>
            <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
              <span >   Completed</span>
            </span>
          </div>

        </div>


      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  console.log("HOME" , state.tasks)
  return ({
    tasks: state.tasks.tasks
  })
}

const mapDispatchToProps = disptach =>
  ({
    listTask
  })


export default connect(mapStateToProps, mapDispatchToProps)(Home)  
