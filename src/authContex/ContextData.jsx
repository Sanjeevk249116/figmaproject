import React, { createContext, useState } from 'react'
export const authContextValue=createContext()
function ContextData({children}) {
    const [cate,setCate]=useState("Category 1")
    console.log(cate)
  return (
    <authContextValue.Provider value={{cate,setCate}}>
      {children}
    </authContextValue.Provider>
  )
}

export default ContextData
