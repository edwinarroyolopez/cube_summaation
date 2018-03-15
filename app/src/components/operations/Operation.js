import React from 'react'

export default class Operation extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(
                <div className='operation'>
                                <div className='number'>
                                    <div className='label'>{ this.props.number }</div>
                                </div>
                                <div className='description'>
                                    <div className='label'>{this.props.description}</div>
                                </div>
                                <div className='parameters'>
                                    <div className='P1'>{ this.props.parameters.P1 }</div>
                                    <div className='P2'>{ this.props.parameters.P2 }</div>
                                </div>
                                <div className='result'>
                                        <div className='label'>{this.props.result}</div>
                                </div>
                </div>
        )
  }

}
