import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {


  render() {

    return (
      <div >
        <div style={{height:120,backgroundColor:'#b3e5fc',padding:10,margin:10}}>
          Tasks
        </div>
        <div style={{height:120,backgroundColor:'#b3e5fc',padding:10,margin:10}}>
          Tasks
        </div>
        <div style={{height:120,backgroundColor:'#b3e5fc',padding:10,margin:10}}>
          Tasks
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


export default connect(mapStateToProps, mapDispatchToProps)(Home)  
