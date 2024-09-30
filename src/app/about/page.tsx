import React from 'react'

import Image from 'next/image'
import cloudHostind from '../cloud-hosting.png'
const Aboutpage = () => {
  return (
    <div>about page
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa dicta ea, mollitia eius, beatae, iste exercitationem modi dolorum iure nulla. Soluta fuga labore quae ipsam officia quibusdam provident mollitia.
      Aut nisi aperiam fugit rerum, modi temporibus impedit optio consequuntur odit facere illo eaque quas similique delectus commodi nihil repudiandae assumenda ipsum iusto quisquam est corrupti veniam unde ab. Fuga?
      Rem adipisci repellendus itaque mollitia necessitatibus perspiciatis officiis aliquam laudantium molestias labore sint veniam, nobis earum debitis fugiat impedit iure tempora delectus, beatae eum dicta facilis ratione quisquam. Tempora, quas?</p>
<Image src={cloudHostind} alt='error' width={500} height={500} priority={false} />



    </div>
  )
}

export default Aboutpage