import React from 'react';
import { connect } from 'react-redux'
import '../stylesheets/Box.scss';
import { listTask, removeTask } from '../store/actions'

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.listTask();
    this._edit = this._edit.bind(this);
    this._remove = this._remove.bind(this);

  }
  _edit(itm) {
    alert('edit' + itm.summary);
  }

  _remove(itm) {
    this.props.removeTask(itm);
  }

  render() {

    return (
      <div >
        <div style={{ fontSize: 25, color: 'black', padding: 10 }}>In Progress</div>
        {this.props.tasks.filter((iFil) => iFil.completed == false).map((itm) => {
          return (
            <div className="box-list" key={itm.summary}>
              <div style={{ fontSize: 12, color: 'black' }} >
                <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
                  <span  >   {itm.summary} </span>
                </span>
                <span style={{ flex: 0.5, fontFamily: 'sans-serif', position: 'absolute', right: 80 }} onClick={() => this._edit(itm)}>
                  <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   EDIT </span>
                </span>
                <span style={{ flex: 0.5, fontFamily: 'sans-serif', position: 'absolute', right: 20 }} onClick={() => this._remove(itm)}>
                  <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   REMOVE </span>
                </span>
              </div>

            </div>
          )
        })
        }


        <div style={{ fontSize: 25, color: 'black', padding: 10 }}>Completed</div>
        {this.props.tasks.filter((iFil) => iFil.completed == true).map((itm) => {
          return (
            <div className="box-list" key={itm.summary}>
              <div style={{ fontSize: 12, color: 'black' }}>
                <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
                  <span  >   {itm.summary} </span>
                </span>
                <span style={{ flex: 0.5, fontFamily: 'sans-serif', position: 'absolute', right: 80 }} onClick={() => this._edit(itm)}>
                  <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   EDIT </span>
                </span>
                <span style={{ flex: 0.5, fontFamily: 'sans-serif', position: 'absolute', right: 20 }} onClick={() => this._remove(itm)}>
                  <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   REMOVE </span>
                </span>
              </div>

            </div>
          )
        })
        }





      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  console.log("HOME", state.tasks)
  return ({
    tasks: state.tasks
  })
}




export default connect(mapStateToProps, {listTask,removeTask})(List)  
