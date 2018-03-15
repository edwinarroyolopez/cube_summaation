import React from 'react'


export default class Operate extends React.Component {
  constructor() {
      super()
  }
  render(){


      if(this.props.operation_running==0){/* None operation */
          return(<div></div>)
      }else{
              if(this.props.operation_running=='update'){
                    return(<div>
                                    <div className='operate'>
                                        <div className='label' id='operation_running'>Actualizando</div>
                                    </div>
                                                  <div className='' id='selected_cube'>Seleccione cubo</div>
                                                  <div className='select_value'>
                                                        <div className='field'>
                                                              <div className='textbox'><input id='txt_cube_value' placeholder='Ingrese valor del cubo'  onKeyDown={this.props.on_ExecuteUpdate}></input></div>
                                                              <div className="message" id="msj_cube_value">Presiona enter</div>
                                                        </div>
                                                  </div>
                          </div>)
              }else{/* query */
                return(<div>
                                <div className='operate'>
                                    <div className='label' id='operation_running'>Consultando</div>
                                </div>
                                <div className=''>
                                        <div className='select_cube'>
                                              <div className='' id='selected_first_cube'>Seleccione cubo</div>
                                        </div>
                                        <div className='select_cube'>
                                                <div className='' id='selected_second_cube'>Seleccione cubo</div>
                                        </div>
                                </div>
                      </div>)
              }
      }

        return(
          <div className='cubeList'>
              <div className='title'>
                  <div className='label'>Cubos</div>
              </div>
              <div className='headCube'>
                    <div className='number'>
                        <div className='label'>Número</div>
                    </div>
                    <div className='shape'>
                        <div className='label'>Forma</div>
                    </div>
                    <div className='value'>
                        <div className='label'>Valor</div>
                    </div>
              </div>
              { all_cubes }
          </div>
        )
  }

}
