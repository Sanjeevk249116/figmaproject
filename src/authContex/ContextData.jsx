import React, { createContext, useState } from 'react'
export const authContextValue=createContext()
function ContextData({children}) {
    const [cate,setCate]=useState("Category 1")
    const[num,setNum]=useState(0);
    console.log(num)
  return (
    <authContextValue.Provider value={{cate,setCate,num,setNum}}>
      {children}
    </authContextValue.Provider>
  )
}

export default ContextData
