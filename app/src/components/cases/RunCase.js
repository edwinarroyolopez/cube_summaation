import React from 'react'

import CubeBox from '../cubes/CubeBox'
import OperationBox from '../operations/OperationBox'

export default class RunCase extends React.Component {
  constructor() {
      super()

  }
  render(){

      if(this.props.run_case_now==0){/* No set number cases */
            return(<div></div>)
      }else{


              return(
                <div className='runCase'>
                    <div className='nowCase'>
                        <div className='label'>Datos del caso # {this.props.run_case_now}</div>
                    </div>
                    <div id='frame'>
                              <div className='sector'>
                                        <div id="fieldCube" className="field">
                                              <div className="textbox"><input id="txt_number_cubes" placeholder="Ingrese el número de cubos" onKeyDown={this.props.on_setCubes}></input></div>
                                              <div className="message" id="msj_number_cubes">Presiona enter</div>
                                        </div>
                                        <CubeBox cubes={this.props.cubes} on_selectCube={this.props.on_selectCube} />
                              </div>
                              <div className='sector'>
                                        <OperationBox boolCube={this.props.cubes.length}   operations={this.props.operations} on_setOperations={this.props.on_setOperations}   on_Query={this.props.on_Query} on_Update={this.props.on_Update} operation_running={this.props.operation_running} on_ExecuteUpdate={this.props.on_ExecuteUpdate}  now_number_operation={this.props.now_number_operation} />
                              </div>
                    </div>

                </div>
              )
      }


  }

}
