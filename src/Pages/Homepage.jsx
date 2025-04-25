import React from 'react'
import {Herosection} from '../components/Herosection'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Personalskills from '../components/Personalskills'
import Experience from '../components/Experience'
import Social from '../components/Social'
import Last from '../components/Last'



export const Homepage = () => {
  return (
     <div>
            <Herosection/>
            <Menu/>
            <Contact/>
            <Personalskills/>
            <Experience/>
            <Social/>
            <Last/>
        </div>
  )
}
