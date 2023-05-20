import {useState} from 'react'
import './../App.css'

const data = [
    {
        date : "2022-09-19",
        "2022-09-19": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-19T22:00:00+00:00",
                    "end_utc": "2022-09-20T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "monday"
                },
                {
                    "start": "00:00:00",
                    "start_utc": "2022-09-19T04:00:00+00:00",
                    "end_utc": "2022-09-19T05:00:00+00:00",
                    "end": "01:00:00",
                    "day": "monday"
                }
            ]
        }
    }
    ,
    {
        date : "2022-09-20",
        "2022-09-20": {
            "oncall": [
                {
                    "start": "2022-09-20T09:07:47.014064+00:00",
                    "end": "2022-09-20T09:30:00.288631+00:00"
                },
                {
                    "start": "2022-09-20T12:26:54.783772+00:00",
                    "end": "2022-09-21T01:30:00.079963+00:00"
                }
            ],
            "calls": [],
            "current_availability": [
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-19T22:00:00+00:00",
                    "end_utc": "2022-09-20T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "monday"
                },
                {
                    "start": "00:00:00",
                    "start_utc": "2022-09-20T04:00:00+00:00",
                    "end_utc": "2022-09-20T04:30:00+00:00",
                    "end": "00:30:00",
                    "day": "tuesday"
                },
                {
                    "start": "02:00:00",
                    "start_utc": "2022-09-20T06:00:00+00:00",
                    "end_utc": "2022-09-20T09:30:00+00:00",
                    "end": "05:30:00",
                    "day": "tuesday"
                },
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-20T22:00:00+00:00",
                    "end_utc": "2022-09-21T01:30:00+00:00",
                    "end": "21:30:00",
                    "day": "tuesday"
                },
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-21T03:00:00+00:00",
                    "end_utc": "2022-09-21T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "tuesday"
                }
            ]
        },
       
    },
    {   
        date : "2022-09-21",
        "2022-09-21": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-20T22:00:00+00:00",
                    "end_utc": "2022-09-21T01:30:00+00:00",
                    "end": "21:30:00",
                    "day": "tuesday"
                },
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-21T03:00:00+00:00",
                    "end_utc": "2022-09-21T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "tuesday"
                },
                {
                    "start": "00:00:00",
                    "start_utc": "2022-09-21T04:00:00+00:00",
                    "end_utc": "2022-09-21T04:30:00+00:00",
                    "end": "00:30:00",
                    "day": "wednesday"
                },
                {
                    "start": "07:30:00",
                    "start_utc": "2022-09-21T11:30:00+00:00",
                    "end_utc": "2022-09-22T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "wednesday"
                }
            ]
        },
    },

    {
        date : '2022-09-22',
        "2022-09-22": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "07:30:00",
                    "start_utc": "2022-09-21T11:30:00+00:00",
                    "end_utc": "2022-09-22T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "wednesday"
                },
                {
                    "start": "03:00:00",
                    "start_utc": "2022-09-22T07:00:00+00:00",
                    "end_utc": "2022-09-23T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "thursday"
                }
            ]
        },
       
    },

    {   date : "2022-09-23",
        "2022-09-23": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "03:00:00",
                    "start_utc": "2022-09-22T07:00:00+00:00",
                    "end_utc": "2022-09-23T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "thursday"
                },
                {
                    "start": "00:00:00",
                    "start_utc": "2022-09-23T04:00:00+00:00",
                    "end_utc": "2022-09-23T04:30:00+00:00",
                    "end": "00:30:00",
                    "day": "friday"
                },
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-24T03:00:00+00:00",
                    "end_utc": "2022-09-24T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "friday"
                },
                {
                    "start": "02:30:00",
                    "start_utc": "2022-09-23T06:30:00+00:00",
                    "end_utc": "2022-09-23T07:30:00+00:00",
                    "end": "03:30:00",
                    "day": "friday"
                },
                {
                    "start": "01:30:00",
                    "start_utc": "2022-09-23T05:30:00+00:00",
                    "end_utc": "2022-09-23T06:00:00+00:00",
                    "end": "02:00:00",
                    "day": "friday"
                },
                {
                    "start": "04:00:00",
                    "start_utc": "2022-09-23T08:00:00+00:00",
                    "end_utc": "2022-09-24T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "friday"
                }
            ]
        },

    },

    {
        date : "2022-09-24",
        "2022-09-24": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-24T03:00:00+00:00",
                    "end_utc": "2022-09-24T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "friday"
                },
                {
                    "start": "04:00:00",
                    "start_utc": "2022-09-23T08:00:00+00:00",
                    "end_utc": "2022-09-24T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "friday"
                },
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-25T03:00:00+00:00",
                    "end_utc": "2022-09-25T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "saturday"
                },
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-24T22:00:00+00:00",
                    "end_utc": "2022-09-25T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "saturday"
                }
            ]
        },
    }
    ,
     
    {
        date : '2022-09-25',
        "2022-09-25": {
            "oncall": [],
            "calls": [],
            "current_availability": [
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-25T03:00:00+00:00",
                    "end_utc": "2022-09-25T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "saturday"
                },
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-24T22:00:00+00:00",
                    "end_utc": "2022-09-25T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "saturday"
                },
                {
                    "start": "18:00:00",
                    "start_utc": "2022-09-25T22:00:00+00:00",
                    "end_utc": "2022-09-26T02:00:00+00:00",
                    "end": "22:00:00",
                    "day": "sunday"
                },
                {
                    "start": "23:00:00",
                    "start_utc": "2022-09-26T03:00:00+00:00",
                    "end_utc": "2022-09-26T03:30:00+00:00",
                    "end": "23:30:00",
                    "day": "sunday"
                }
            ]
        }
    
    }
    

]
    


console.log(data)
const DateWiseSorting = () => {
    const [details, setDetails] = useState([])

    
    const onGetResult = (value) => {

        const getResult = data.find(each => each.date === value)
        console.log(getResult)

    }
    
    return(
        <div className='container'>

       <ul>
        {data.map(each => (<li>{each.date}</li>))}
       </ul>

       <button onClick={() => setDetails(data.sort())}>Asending Order</button>
       <button onClick={() => setDetails(data.reverse())}>Descending Order</button>
       <select onChange={(e) => onGetResult(e.target.value)}>
        {data.map(each => <option value={each.date}>{each.date}</option>)}
       </select>
       </div>
    )

}

export default DateWiseSorting