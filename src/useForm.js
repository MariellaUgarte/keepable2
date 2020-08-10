import { useState } from 'react';

const useForm = ({initialValues, onSubmit}) => {
    const [ inputs, setInputs ] = useState({...initialValues});

    const handleSubmit = e => {
        if(e)
            e.preventDefault();
        onSubmit(inputs);
        setInputs({...initialValues})
    }
    const handleChange = e => {
        e.persist();
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const colorChange = color => {
        setInputs({...inputs, color: color})
    }

    return {
        handleSubmit,
        handleChange,
        colorChange,
        inputs
    }
}

export default useForm