import {  FormEventHandler } from "react"


type InputProps = {
    setInput : React.Dispatch<React.SetStateAction<string>>
    input: string
    onSubmit: FormEventHandler<HTMLFormElement>
}


const Input = ({input,setInput,onSubmit}:InputProps) => {

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input)

    setInput(e.target.value)
    }



  return (
    <>
    <form onSubmit={onSubmit}>
   
    <input type="text" onChange={onChange} value={input} />
    <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default Input