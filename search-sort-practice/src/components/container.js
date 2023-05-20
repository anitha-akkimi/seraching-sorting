import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './../App.css'


const  options = [1,2,3,4,5,6,7,8,9,10,11,12,13]
export default function Contaner() {

    const [value, setValue] = useState(1)
    const [details, setDetails] = useState([])

    const onChangeValue = async (e) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${e.target.value}`)
        const data = await response.json()
        setValue(e.target.value)
        setDetails(data)

    }

    const getTodos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()

        setDetails(data)

    }

    useEffect(() => {
        getTodos()
    }, [])
   console.log(value)
  return (
    <div className='App'>
     <h1>My App</h1>
     <select onChange={(e) => onChangeValue(e)}>
        {options.map(each => <option key={each} value={each}>{each}</option>)}
     </select>

     <table>
        <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>title</th>
            <th>Completed Status</th>
        </tr>
            {details.map(each => <tr>
            <td>{each.userId}</td>
            <td>{each.id}</td>
            <td>{each.title}</td>
            <td>{`${each.completed}`}</td>
            </tr>
            )}
        
     </table>
     
    </div>
  );
}