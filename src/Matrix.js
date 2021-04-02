import React, { Component } from 'react';
import { pattern2 } from './data.js'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <div className="cell">  </div>)
  }
  
  genMatrix = () => {
    // console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
Matrix.defaultProps = {
  values:  pattern2

}

