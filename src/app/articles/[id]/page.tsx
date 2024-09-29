import { Articles } from '@/utils/articles'
import React from 'react'

interface SinglePageData{
    params:{id:string}
}
const page = async({params}:SinglePageData) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if (!response.ok){
        throw new Error('faild to get this')
    }
    const articles: Articles= await response.json()
    
    return (
    <div>
        <section>
            <h1>{articles.title}</h1>
            <p>{articles.body}</p>
        </section>
    </div>
  )
}

export default page