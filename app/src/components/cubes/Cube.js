import React from 'react'

export default class Cube extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(
                <div className='cube' onClick={(e) => {this.props.on_selectCube( this.props.number)}} >
                                <div className='number'>
                                    <div className='label'>{ this.props.number }</div>
                                </div>
                                <div className='shape'>
                                    <div className='label'>{ '('+this.props.matrix.x+','+this.props.matrix.y+','+this.props.matrix.z+')' }</div>
                                </div>
                                <div className='value'>
                                    <div className='label'>{ this.props.value }</div>
                                </div>
                </div>
        )
  }

}
