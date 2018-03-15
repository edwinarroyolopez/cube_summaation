import React, { Component } from 'react';
import axios from 'axios';

import CaseBox from './components/cases/CaseBox'
import RunCase from './components/cases/RunCase'

class App extends Component {
  constructor (props) {
    super(props)
    this.state ={cases: [],run_case_now:0,cubes:[],operations:[],operation_running:0,operation_number_now:0,query:0,start_cube:0,final_cube:0,update:0,execute_update:0,cube_for_update:0}
  }
  onSetCases(e){

    if(e.keyCode==13){/* key "Enter" have keyCode = 13 */

    let number_case = document.getElementById('txt_number_cases').value;

    if (!/^([0-9])*$/.test(number_case)){/* Is'nt numeric  */
    this.error_number('txt_number_cases','msj_number_cases','Por favor ingrese solo un valor númerico, gracias!');
    this.setState({cases: []});/* clear number cases */
    this.setState({run_case_now: 0});/* Stop run case */
  }else{
    /* Is numeric */
    number_case = parseInt(number_case);
    /* Validation */
    if(number_case>=1 && number_case<=50){/* Success */

      /* Create number cases  */
      let test_cases = [];

      for (let i =1; i <= number_case; i++){/* Create each case  */
        test_cases[test_cases.length] = {number_case:i,cubes:[],operations:[]};
      }

      /* Change message */
      document.getElementById('msj_number_cases').innerHTML = 'Número de casos';

      this.setState({cases: test_cases});/* set number cases */
      this.setState({run_case_now: 1});/* Start run case */

    }else{/* Out range */
      this.error_number('txt_number_cases','msj_number_cases','Ingrese un número que se encuentre entre 1 y 50, gracias!');
      this.setState({cases: []});/* clear number cases */
      this.setState({run_case_now: 0});/* Stop run case */
    }

  }
}/* keyCode */

}/* set  cases */


onSetCubes(e){
  if(e.keyCode==13){/* key "Enter" have keyCode = 13 */


  let number_cubes = document.getElementById('txt_number_cubes').value;

  if (!/^([0-9])*$/.test(number_cubes)){/* Is'nt numeric  */
  this.error_number('txt_number_cubes','msj_number_cubes','Por favor ingrese solo un valor númerico, gracias!');


}else{
  /* Is numeric */
  number_cubes = parseInt(number_cubes);
  /* Validation */
  if(number_cubes>=1 && number_cubes<=100){/* Success */


    let cubes = [];

    for (let i =1; i <= number_cubes; i++){/* Create each cube  */
      cubes[cubes.length] = {number_cube:i,matrix:{x:i,y:i,z:i},value:0};
    }

    /* Change message */
    document.getElementById('msj_number_cubes').innerHTML = 'Número de cubos';
    this.setState({cubes: cubes});/* set number cubes and create list */

    /* Identificar el caso y asignarle la lista de cubos */

    console.log('Caso actual: ' +this.state.run_case_now);

    let case_now = this.state.run_case_now;/* Select number case now */
    let all_cases = this.state.cases;/* all cases */

    /* search in cases the case now */
    all_cases.find(function(test_case){
      if(test_case.number_case === case_now){
        /* set cubes in test case now  */
        test_case.cubes = cubes;
      }
    });

    console.log(' Cases: ' + JSON.stringify(all_cases));



  }else{/* Out range */
    this.error_number('txt_number_cubes','msj_number_cubes','Ingrese un número que se encuentre entre 1 y 100, gracias!');

  }

}
}/* keyCode */

}/* set cubes */


onSetOperations(e){

  if(e.keyCode==13){/* key "Enter" have keyCode = 13 */

  let number_operations = document.getElementById('txt_number_operations').value;

  if (!/^([0-9])*$/.test(number_operations)){/* Is'nt numeric  */
  this.error_number('txt_number_operations','msj_number_operations','Por favor ingrese solo un valor númerico, gracias!');


}else{
  /* Is numeric */
  number_operations = parseInt(number_operations);
  /* Validation */
  if(number_operations>=1 && number_operations<=1000){/* Success */

    let operations = [];

    for (let i =1; i <= number_operations; i++){/* Create each cube  */
      operations[operations.length] = {number_operation:i, description:'', parameters:{P1:'',P2:''}, result:''};

    }

    /* Change message */
    document.getElementById('msj_number_operations').innerHTML = 'Número de operaciones';
    this.setState({operations: operations});/* set number cubes and create list */
    this.setState({operation_number_now:1})/* Start operations */

        /* Identificar el caso y asignarle la lista de operaciones */
                console.log('Caso actual: ' +this.state.run_case_now);

                let case_now = this.state.run_case_now;/* Select number case now */
                let all_cases = this.state.cases;/* all cases */

                /* search in cases the case now */
                all_cases.find(function(test_case){
                  if(test_case.number_case === case_now){
                    /* set operations in test case now  */
                        test_case.operations =operations;
                  }
                });

                console.log('Casos -- operaciones: '+JSON.stringify(all_cases))

  }else{/* Out range */
    this.error_number('txt_number_operations','msj_number_operations','Ingrese un número que se encuentre entre 1 y 1000, gracias!');

  }

}
}/* keyCode */

}/* set operations */

onselectCube(number){

  let operation_running = this.state.operation_running;
  let operation_number_now = this.state.operation_number_now;/* this tun operation */

  console.log(' Cubo numero: '+number + '  Operacion: '+operation_running);

  let self = this;
  let cubes = this.state.cubes;/* all cubes */
  let operations = this.state.operations;/* all operations */

  switch (operation_running) {
    case 0:

    break;
    case 'update':

    /* search in cases the case now */
              cubes.find(function(cube){
                if(cube.number_cube === number){/* set cubes in test case now  */

                  let shape = '('+cube.matrix.x+','+cube.matrix.y+','+ cube.matrix.z+ ')';
                  document.getElementById('selected_cube').innerHTML = shape;
                  /* Update state query */
                  self.setState({update:1});
                  self.setState({cube_for_update:number});
                }
              });

    break;
    case 'query':



    /* search in cases the case now */
    cubes.find(function(cube){
      if(cube.number_cube === number){/* set cubes in test case now  */
        let shape = '('+cube.matrix.x+','+cube.matrix.y+','+ cube.matrix.z+ ')';
        if(self.state.query==0){
          document.getElementById('selected_first_cube').innerHTML = shape;
          /* Update state query */
          self.setState({query:1});

          self.setState({start_cube:number});/* start cube  */
        }else{
          document.getElementById('selected_second_cube').innerHTML = shape;
          /* Se va al servidor a hacer la suma
          de los valores de los cubos que estén en este intervalo
          incluyendo estos dos cubos   */
          console.log('Puedo ir al servidor y ejecutar consulta!');
                let cubes = JSON.stringify(self.state.cubes);
                      //    self.setState({final_cube:number});/* start cube  */
                let start_cube = self.state.start_cube;
                let final_cube = number;

                          if(start_cube>final_cube){/* reorder asc */
                                let aux = start_cube;
                                    start_cube = final_cube;
                                    final_cube = aux;
                                    /* view */
                                    document.getElementById('selected_first_cube').innerHTML = '('+start_cube+','+start_cube+','+start_cube+ ')';
                                    document.getElementById('selected_second_cube').innerHTML = '('+final_cube+','+final_cube+','+final_cube+ ')';
                          }

                  axios.post('http://localhost:3000/api/query', {
                            cubes: cubes,
                            start_cube: start_cube,
                            final_cube: final_cube
                          })
                          .then(function (res) {
                          //  console.log(JSON.stringify(response));
                              console.log('Suma: '+res.data.sum);
                                  /* add row to operations */

                                   let description = 'query';
                                   let result = res.data.sum;
                                        start_cube = document.getElementById('selected_first_cube').innerHTML;
                                        final_cube = document.getElementById('selected_second_cube').innerHTML;

                                      let operation =  operations.find(function(operation){
                                                return operation.number_operation === operation_number_now
                                          });

                                        /* Update operation  */
                                              operation.description = description;
                                              operation.parameters.P1 = start_cube;
                                              operation.parameters.P2 = final_cube;
                                              operation.result = result;

                                        /* update operations */
                                            operations.splice((operation_number_now-1), 1,operation);/* insert operation*/

                                              /* prepare next operation */
                                              let max_number_operation = parseInt(document.getElementById('txt_number_operations').value);

                                              if(max_number_operation>=operation_number_now+1){/* access */
                                                      self.setState({operations:operations,operation_running:0,query:0,operation_number_now:operation_number_now+1,start_cube:0,final_cube:0})
                                              }else{/* Limit of operations */
                                                      /* se muestra...*/
                                                      self.setState({operations:operations,operation_running:0,query:0,operation_number_now:operation_number_now+1,start_cube:0,final_cube:0})

                                                      /* Limpiar y pasar al siguiente caso */
                                                        console.log('Ya no se pueden hace más operaciones, en 10 segundos se limpia todo');

                                                        setTimeout(function(){
                                                              /* reset cubes - operations */
                                                              document.getElementById('txt_number_cubes').value = '';
                                                                document.getElementById('txt_number_cubes').focus();

                                                              let run_case = self.state.run_case_now+1;
                                                              self.setState({run_case_now:run_case,cubes:[],operations:[],operation_running:0,query:0,start_cube:0,final_cube:0,operation_number_now:0})
                                                        },10000);
                                              }

                          })
                          .catch(function (error) {
                            console.log(error);
                          });



        }

      }
    });


    break;
    default:
  }

}
onQuery(){
  console.log('On query from app');

  this.setState({update:0});

  this.setState({operation_running:'query'});
}
onUpdate(){
  this.setState({query:0});

  this.setState({operation_running:'update'});;
}

onExecuteUpdate(e){

              let self = this;
              let operation_number_now = this.state.operation_number_now;

              if(e.keyCode==13){/* key "Enter" have keyCode = 13 */

              let cube_value = document.getElementById('txt_cube_value').value;

              if (!/^([0-9])*$/.test(cube_value)){/* Is'nt numeric  */
              this.error_number('txt_cube_value','msj_cube_value','Por favor ingrese solo un valor númerico, gracias!');


            }else{
              /* Is numeric */
              cube_value = parseInt(cube_value);
              let N = parseInt(document.getElementById('txt_number_cubes').value);/* Limit */

              /* Validation */
              if(cube_value>=1 && cube_value<=N){/* Success */


                let state_update = this.state.update;

                if(state_update==0){
                  this.error_number('txt_cube_value','msj_cube_value','Por favor seleccione el cubo que desea actualizar , gracias!');
                }else{
                  console.log('Ir al sevidor y actualizar el valor del cubo !');
                                    let cubes = JSON.stringify(this.state.cubes);
                                    let cube = this.state.cube_for_update;
                                    let value = parseInt(document.getElementById('txt_cube_value').value);


                                    axios.post('http://localhost:3000/api/update', {
                                              cubes: cubes,
                                              cube: cube,
                                              value: value
                                            })
                                            .then(function (res) {
                                                  /* update object cubes */
                                                  self.setState({cubes: JSON.parse(res.data.cubes)})

                                                console.log('respuesta: '+res.data.cubes);

                                                    console.log('cube: '+res.data.cube);
                                                    /* add row to operations */
                                                      let cube_operator = JSON.parse(res.data.cube);

                                                          let description = 'update';
                                                          let result = value;

                                                              let operations = self.state.operations;

                                                             let operation =  operations.find(function(operation){
                                                                       return operation.number_operation === operation_number_now
                                                                 });

                                                               /* Update operation  */
                                                                     operation.description = description;
                                                                     operation.parameters.P1 = '('+ cube + ','+ cube +','+ cube +')';
                                                                     operation.parameters.P2 = value;
                                                                     operation.result = result;

                                                               /* update operations */
                                                                   operations.splice((operation_number_now-1), 1,operation);/* insert operation*/

                                                    /* prepare next operation */

                                                        /* prepare next operation */
                                                        let max_number_operation = parseInt(document.getElementById('txt_number_operations').value);

                                                        if(max_number_operation>=operation_number_now+1){/* access */
                                                              self.setState({updtate:0,cube_for_update:0,operation_running:0,operation_number_now:operation_number_now+1,operations:operations}) ;

                                                        }else{/* Limit of operations */
                                                                /* se muestra...*/
                                                                self.setState({updtate:0,cube_for_update:0,operation_running:0,operation_number_now:operation_number_now+1,operations:operations}) ;

                                                                /* Limpiar y pasar al siguiente caso */
                                                                  console.log('Ya no se pueden hace más operaciones, en 10 segundos se limpia todo');

                                                                  setTimeout(function(){
                                                                        /* reset cubes - operations */
                                                                        document.getElementById('txt_number_cubes').value = '';
                                                                          document.getElementById('txt_number_cubes').focus();

                                                                        let run_case = self.state.run_case_now+1;
                                                                        self.setState({run_case_now:run_case,cubes:[],operations:[],operation_running:0,query:0,start_cube:0,final_cube:0,operation_number_now:0})
                                                                  },10000);
                                                        }

                                            })
                                            .catch(function (error) {
                                              console.log(error);
                                            });



                }

                /* Clear and go next operation */


              }else{/* Out range */
                this.error_number('txt_cube_value','msj_cube_value','Ingrese un número que se encuentre entre 1 y '+N+', gracias!');

              }

            }
            }/* keyCode */


}

render() {
  return (
    <div>
    <div id="container">

    <CaseBox cases={this.state.cases} />

    <div className="setter">
    <div className="field">
    <div className="textbox"><input id="txt_number_cases" placeholder="Ingrese el número de casos"  onKeyDown={this.onSetCases.bind(this)} ></input></div>
    <div className="message" id="msj_number_cases">Presiona enter</div>
    </div>

    <RunCase run_case_now={this.state.run_case_now} on_setCubes={this.onSetCubes.bind(this)} cubes={this.state.cubes}  on_selectCube={this.onselectCube.bind(this)} on_setOperations={this.onSetOperations.bind(this)}  operations={this.state.operations}  on_Query={this.onQuery.bind(this)} on_Update={this.onUpdate.bind(this)} operation_running={this.state.operation_running} on_ExecuteUpdate={this.onExecuteUpdate.bind(this)} now_number_operation={this.state.operation_number_now}/>
    </div>

    </div>

    </div>
  );
}
/* Validation funtions */

error_number(id_textbox,id_message,msg){
  /* Error description */
  document.getElementById(id_message).innerHTML = msg;
  /* reset message */
  document.getElementById(id_textbox).value = '';
  setTimeout(function(){
    document.getElementById(id_message).innerHTML = 'Presiona enter';
  },2000);

}

}
export default App;
