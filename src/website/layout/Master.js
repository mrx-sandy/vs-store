import React from 'react'
import Footer from '../main component/Footer'
import Header from '../main component/Header'
import Suggetion from '../main component/Suggetion'

function Master({Rcf}) {
  return (
    <div>
        <Header/>
        <div className='main'>
<Rcf></Rcf>
<Suggetion/>  
</div>
    <Footer/></div>
  )
}

export default Master