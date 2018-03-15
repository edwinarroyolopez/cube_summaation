import React from 'react'

import Cube from './Cube'

export default class CubeList extends React.Component {
  constructor() {
      super()
            this.state = {
                none : []
         }
  }

  render(){

      let all_cubes = this.props.cubes.map((cube) => {
            return(<div key={cube.number_cube.toString()} >
                          <Cube  number={cube.number_cube}  matrix={cube.matrix} value={cube.value} on_selectCube={this.props.on_selectCube}/>
                    </div>)
      })

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
