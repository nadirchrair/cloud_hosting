import Link from 'next/link';
import React from 'react'
import ItemArticles from '../../components/articles/itemarticle'
import { Articles } from '@/utils/articles';
const Articlepage = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles : Articles[]= await response.json()
  console.log(articles);
  
  return (
    <section className='container m-auto px-5' >
<div  className='flex items-center justify-center flex-wrap gap-7'>
      {
        articles?.map((item)=>{
          return (
           <ItemArticles article ={item}  />
          )
        })
      }
      </div>
    </section>
  )
}

export default Articlepage