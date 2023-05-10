import {useCallback, useState} from 'react'
import Show from './Show'
import Button from './Button'

function Callback() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(1000)
    console.log("rendering in callback");


    const increamentAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    // const increamentAge = () => {
    //     setAge(age + 1)
    // }

    // const increamentSalary =  useCallback(() => {
    //     setSalary(salary + 1000)
    // }, [salary])

    const increamentSalary =  () => {
        setSalary(salary + 1000)
    }
    
  return (
    <>
    <Show text={age} />
    <Button handleClick={increamentAge}>Increment Age</Button>
    <Show text={salary} />
    <Button handleClick={increamentSalary}>Increment Salary</Button>
    </>
  )
}

export default Callback