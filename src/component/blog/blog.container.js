import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogsComponent from './blog.component'
import browserHistory from '../../browserHistory'

const Blogs = () => {
    const [response, setResponse] = useState([])

    useEffect(() => {
        const getData = async () => {
            var data = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setResponse(data.data)

        }
        getData()
    }, [])

    const handleClick = (id) => {
        browserHistory.push(`/blogs/${id}`)
    }

    return <BlogsComponent response={response} handleClick={handleClick} />
}

export default Blogs