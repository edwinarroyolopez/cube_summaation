import React from 'react'

import CubeList from './CubeList'

export default class CubeBox extends React.Component {
  constructor() {
      super()
  }
  render(){
        if(this.props.cubes.length==0){/*  There are no cubes */
          return(
            <div></div>
          )
        }else{
                  return(
                    <div className='cubeBox'>
                        <CubeList  cubes={ this.props.cubes } on_selectCube={this.props.on_selectCube} />
                    </div>
                  )
        }

  }

}
