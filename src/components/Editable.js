import React from "react";
import { useState } from "react";

export default function Editable() {

  const little_women =[
    {name: 'Meg', age: 16},
    {name: 'Jo', age: 15},
    {name: 'Beth', age: 13},
    {name: 'Amy', age: 12},
  ]

  const [list, setList] = useState(little_women)
  const [inputData,setInputData] = useState ({name:"", age:""})
  let [index, setIndex] = useState()
  let {name, age} = inputData

  function dataChange(e) {
      setInputData({...inputData, [e.target.name]:e.target.value})
  }

  function editData(i) {
      let {name, age} = list [i]
      setInputData({name, age})
      setIndex(i)
  }

  function updateState() {
      let updatedList = [...list]
      updatedList.splice(index,1, {name, age})
      setList(updatedList)

  }

  return(
    <>

      <div className="container p-2">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
              {
                  list.map(
                      (item,i) => {
                          return (
                              <tr key={i}>
                                  <td>{item.name}</td>
                                  <td>{item.age}</td>
                                  <td>
                                    <button 
                                    onClick={() => editData(i)}
                                    className="btn btn-warning">Edit</button>

                                  </td>
                              </tr>
                          )                     
                      }

                  ) 
              }

          </tbody>
        </table>
        <input className="input-group m-2" value={inputData.name} name="name" placeholder="name" onChange={dataChange}></input>
        <input className="input-group m-2" value={inputData.age} name="age" placeholder="age" onChange={dataChange}></input>
        <button className="btn btn primary m-2" onClick={updateState}>Update</button>
      </div>


    </>
  )
  
}