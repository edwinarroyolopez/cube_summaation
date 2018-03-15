import React from 'react'

import OperationList from './OperationList'

export default class OperationBox extends React.Component {
  constructor() {
      super()
  }
  render(){
        if(this.props.boolCube==0){/*  There are no cubes */
          return(
            <div></div>
          )
        }else{

                  return(
                    <div>
                            <div id="fieldOperation" className="field">
                                  <div className="textbox"><input id="txt_number_operations" placeholder="Ingrese el número de operaciones" onKeyDown={this.props.on_setOperations}></input></div>
                                  <div className="message" id="msj_number_operations">Presiona enter</div>
                            </div>
                            <div className='operationBox'>
                                <OperationList  operations={ this.props.operations } on_Query={this.props.on_Query} on_Update={this.props.on_Update}  operation_running={this.props.operation_running} on_ExecuteUpdate={this.props.on_ExecuteUpdate} now_number_operation={this.props.now_number_operation}/>
                            </div>
                    </div>)
        }

  }

}
