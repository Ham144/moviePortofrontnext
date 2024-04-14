"use client"
import { GlobalContext } from '@/components/globalState'
import UseReducer from '@/components/userReducer'
import React, { useContext, useEffect } from 'react'

const Home = () => {



  return (
    <main className='bg-slate-100 flex min-h-screen '>
      <UseReducer />
    </main>
  )
}

export default Home