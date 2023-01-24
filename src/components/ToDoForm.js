import React , {useState , useRef , useEffect} from 'react'

function ToDoForm(props) {
   const [input,setInput] = useState(props.edit ? props.edit.value : '');
   const inputRef = useRef(null);
   useEffect(()=>{
      inputRef.current.focus()
   })
   const handleChange = e => {
      setInput(e.target.value)
   }
   const handleSumbit = e => {
      e.preventDefault();

         props.onSubmit({
         id: Math.floor(Math.random() * 1000),
         text: input
      }) 
      setInput("");
      }
  return (
   <form className='todo-form' onSubmit={handleSumbit}>
      {props.edit ? (<>
         <input 
         type="text" 
         placeholder='Update to do '
         value={input} 
         name="text" 
         className='todo-input edit'
         onChange={handleChange}
         ref={inputRef}/>
         <button className='todo-button edit'>
            Update
         </button>)</>) 
         :( 
         <>
         <input 
         type="text" 
         placeholder='Enter your task!'
         value={input} 
         name="text" 
         className='todo-input'
         onChange={handleChange}
         ref={inputRef}/>
         <button className='todo-button'>
            Add To Do
         </button>
         </> )}
     
   </form>
  )
}

export default ToDoForm
