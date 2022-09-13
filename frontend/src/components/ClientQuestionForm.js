import React, { useEffect, useState } from 'react'
import { getClientQuestion } from '../services/QuestionService'
import { sendClientDetails } from '../services/QuestionService'
import { getCategories,getClients } from '../services/QuestionService'

const ClientQuestionForm = () => {

    const [clientValue, setClientValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('')

    const [ clients, setClients] = useState([])
    const [ categories, setCategories] = useState([])

    useEffect(()=>{
        getClientName()
        getCategoryName()
    },[])

    const getClientName = async()=>{
        let response = await getClients()
        let result = response.data.map(o=>({name:o.name}.name))
        // result.map((n)=>console.log(n))
        setClients(result)
    }

    const getCategoryName = async()=>{
        let response = await getCategories()
        let result = response.data.map(o=>({category:o.category_name}.category))
        // result.map((n)=>console.log(n))
        setCategories(result)
    }

    const clientChangeHandler = (e)=>{
        setClientValue(e.target.value)
       
    }

    const categoryChangeHandler = (e)=>{
        setCategoryValue(e.target.value)
    }

    const getQuestionData=async()=>{
        let response = await sendClientDetails(clientValue,categoryValue)
        // let response =await getClientQuestion()
        response.data.question_detail.map((n)=>console.log(n))
    }

    return (

        <>
        <div className='jumbotron'>
            <div className="container">
                <center><h2>Select Client Details for Viewing Questions</h2></center>
                <center>
                    <select value={clientValue} onChange={clientChangeHandler}>
                        <option value = "none" selected hidden>Select Client</option>
                        {clients.map((client)=>(
                            <option key={client} value={client}>{client}</option>
                        ))}
                    </select>
                    <br></br><br></br>
                    <select value={categoryValue} onChange={categoryChangeHandler}>
                        <option value = "none" selected hidden>Select Category</option>
                        {categories.map((category)=>(
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <br></br><br></br>
                    <button className='btn btn-success' onClick={getQuestionData}>Get Questions</button>
                </center>
            </div>
        </div>
        </>
      )
    }

export default ClientQuestionForm