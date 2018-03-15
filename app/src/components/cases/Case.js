import React from 'react'

export default class Case extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(
                <div className='case'>
                      <div className='label'>{ this.props.number }</div>
                </div>
        )
  }

}
