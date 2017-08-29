import React from 'react';
import { connect } from 'react-redux'
import '../stylesheets/Box.scss';
import { listTask, removeTask ,completeTask} from '../store/actions'

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.listTask();

    this._remove = this._remove.bind(this);
    this._complete = this._complete.bind(this);

  }


  _remove(itm) {
    this.props.removeTask(itm);
  }
  _complete(itm,status){
    this.props.completeTask({summary:itm.summary,completed:status});
  }

  render() {

    return (
      <div >
        <div style={{ fontSize: 25, color: 'black', padding: 10 }}>In Progress</div>
        {this.props.tasks.filter((iFil) => iFil.completed == false).map((itm) => {
          return (
            <div key={itm.summary+"0"}>
            <div className="box-list" key={itm.summary}>
              <div style={{ fontSize: 16, color: 'black' }} >
                <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
                  <span  >   {itm.summary} </span>
                </span>
               
              </div>

            </div>
                          <div className="box-list-bottom" key={itm.summary+"2"}>
                <div style={{ fontSize: 12, color: 'black' }}>

                  <span style={{ flex: 0.5, fontFamily: 'sans-serif'}} onClick={() => this._complete(itm,true)}>
                    <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   Complete   |</span>
                  </span>

                  <span style={{ flex: 0.5, fontFamily: 'sans-serif'}} onClick={() => this._remove(itm)}>
                    <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   Remove </span>
                  </span>
                </div>

              </div>
            </div>
          )
        })
        }


        <div style={{ fontSize: 25, color: 'black', padding: 10 }}>Completed</div>
        {this.props.tasks.filter((iFil) => iFil.completed == true).map((itm) => {
          return (
            <div key={itm.summary+"0"}>
              <div className="box-list" key={itm.summary+"1"}>
                <div style={{ fontSize: 16, color: 'black' }}>
                  <span style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
                    <span  >   {itm.summary} </span>
                  </span>
                </div>

              </div>
              <div className="box-list-bottom" key={itm.summary+"2"}>
                <div style={{ fontSize: 12, color: 'black' }}>

                  <span style={{ flex: 0.5, fontFamily: 'sans-serif'}} onClick={() => this._complete(itm,false)}>
                    <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   Un Complete   |</span>
                  </span>

              
                  <span style={{ flex: 0.5, fontFamily: 'sans-serif'}} onClick={() => this._remove(itm)}>
                    <span style={{ fontSize: 12, fontWeight: 'bold', color: '#01579b' }} >   Remove </span>
                  </span>
                </div>

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
    tasks: state.tasks.tasks
  })
}




export default connect(mapStateToProps, { listTask, removeTask,completeTask })(List)  
