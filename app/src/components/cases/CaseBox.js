import React from 'react'

import CaseList from './CaseList'

export default class CaseBox extends React.Component {
  constructor() {
      super()
  }
  render(){

        return(
          <div className='caseBox'>
              <CaseList  cases={ this.props.cases } />
          </div>
        )
  }

}
