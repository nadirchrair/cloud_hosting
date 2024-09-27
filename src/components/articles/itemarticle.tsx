 import Link from 'next/link';
import React from 'react'
import { Articles } from '@/utils/articles';

interface ArticleItemProps{
  article :Articles
}

const ItemArticles = ({article}:ArticleItemProps) => {
  return (
    <div key={article.id} style={{border:'1px solid #000', width:'30%',padding:'4px 5px',margin:'4px 8px',borderRadius:'3px'}}>
            <h6 style={{color:'#000'}}>{article.title}</h6>
            <p style={{color:'#141'}}>{article.body}</p>
            <Link href='/articles/id' className='btn bg-purple-700  w-full text-lg text-center'>Read more</Link>
            
            
            </div>
  )
}

export default ItemArticles