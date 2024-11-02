import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from './components/form/form'
import { Card } from './components/card/card'
function App() {
  const { user } = useSelector((state) => state.task)
  const dispatch = useDispatch()
  return (
    <>
    <div className='container'>
      <Form />
      {user.map((item)=>
        <Card key={item.id} {...item}/>
      )}
    </div>
    </>
  )
}

export default App