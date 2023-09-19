import React from 'react';
import { data,gend } from './App';

function ChildC() {
  return (
    <>
      <data.Consumer>
        {name => {
          return (
            <gend.Consumer>
              {
                gender=>{
                  return(
                  <h1> my name is {name}.my gender is {gender}</h1>
                  );
                }
             }
            </gend.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildC;
