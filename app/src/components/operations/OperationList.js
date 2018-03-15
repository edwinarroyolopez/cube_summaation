import React from 'react'

import Operation from './Operation'
import Operate from './Operate'

export default class OperationList extends React.Component {
  constructor() {
      super()
            this.state = {operate : 0}
  }

  render(){

          if(this.props.operations.length==0){/*  There are no operations */
            return(<div></div>)
          }else {
                            let all_operations = this.props.operations.map((operation) => {
                                  return(<div key={operation.number_operation.toString()} >
                                                <Operation  number={operation.number_operation}  description={operation.description} parameters={operation.parameters} result={operation.result}/>
                                          </div>)
                            })

                              return(
                                <div>
                                          <div id="setter_operation">
                                                  <div className='nowOperation'>
                                                        <div className='label'>Operación # {this.props.now_number_operation}</div>
                                                  </div>
                                                  <div className='actions'>
                                                        <div className='button' onClick={this.props.on_Update}>
                                                            <div className='label'>Update</div>
                                                        </div>
                                                        <div className='button' onClick={this.props.on_Query}>
                                                            <div className='label'>Query</div>
                                                        </div>
                                                  </div>

                                                  <div className='danger_area'>
                                                      <Operate operation_running={this.props.operation_running} on_ExecuteUpdate={this.props.on_ExecuteUpdate}/>
                                                  </div>
                                          </div>

                                          <div className='operationList'>
                                              <div className='title'>
                                                  <div className='label'>Operaciones</div>
                                              </div>
                                              <div className='headOperation'>
                                                    <div className='number'>
                                                        <div className='label'>Número</div>
                                                    </div>
                                                    <div className='description'>
                                                        <div className='label'>Operación</div>
                                                    </div>
                                                    <div className='parameters'>
                                                        <div className='label'>Parámetros</div>
                                                    </div>
                                                    <div className='result'>
                                                        <div className='label'>Resultado</div>
                                                    </div>
                                              </div>
                                              { all_operations }
                                          </div>
                                </div>)

          }


  }

}
