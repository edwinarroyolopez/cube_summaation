import React from 'react'

import Case from './Case'

export default class CaseList extends React.Component {
  constructor() {
      super()
            this.state = {
                none : []
         }
  }
  render(){

      let all_cases = this.props.cases.map((test_case) => {
            return(<div key={test_case.number_case.toString()} >
                          <Case  number={test_case.number_case} />
                    </div>)
      })

        return(
          <div className='caseList'>
              <div className='title'>
                  <div className='label'>Casos</div>
              </div>
              { all_cases }
          </div>
        )
  }

}
