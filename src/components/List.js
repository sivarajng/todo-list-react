import React from 'react';
import { connect } from 'react-redux'

class List extends React.Component  {


render(){

    return (
        <div >
          List
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


export default connect(mapStateToProps, mapDispatchToProps)(List)  
