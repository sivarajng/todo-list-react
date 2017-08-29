import React from 'react';
import { connect } from 'react-redux'
import '../stylesheets/Box.scss';
import { listTask, addTask, setStatus } from '../store/actions'

class Add extends React.Component {

  constructor(props) {
    super(props);
    this._submit = this._submit.bind(this);
    this.state = {
      taskSummary: ""
    }
  }

  _submit() {

    this.props.addTask({ summary: this.state.taskSummary, completed: false })
  }
  _onText(text) {

    this.setState({ taskSummary: text })
    this.props.setStatus("");
  }
  componentDidMount() {
    this.props.setStatus("");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.addStatus == "task added successfully") {
    //  this.setState({ taskSummary: "" })
    }
  }


  render() {

    return (
      <div >
        <form onSubmit={this._submit} className="add-day">
          <div className="box-text">
            <div
              style={{
                fontSize: 25
                , color: 'black'
              }}>

              <label htmlFor="date">Task Summary</label>
              <br />
              <input id="date"
                type="text"
                onChange={(txt) => this._onText(txt.target.value)}
                required
                value={this.state.taskSummary}
                style={{ width: '100%', height: 30 }} />

              <span style={{ flex: 0.5, fontFamily: 'sans-serif', fontSize: 15, textAlign: 'center', color: 'red', paddingTop: 10 }}>
                <div>{this.props.addStatus}</div>
              </span>

            </div>

          </div>

          <div className="box-add">
            <div
              style={{

                color: 'black'
              }}>
              <button style={{ flex: 0.5, fontFamily: 'sans-serif' }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: '#01579b' }} >   Add Task </span>
              </button>

            </div>

          </div>


        </form>

      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  console.log("HOME", state.tasks)
  console.log("state.tasks.addStatus", state.tasks.addStatus)
  return ({
    tasks: state.tasks.tasks,
    addStatus: state.tasks.addStatus

  })
}



export default connect(mapStateToProps, { addTask, setStatus })(Add)  
