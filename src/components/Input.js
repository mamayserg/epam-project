import React  from 'react';

const Input = ({value, onChange, type})=>(

<input onChange={onChange} value={value} type={type} />

)
export default Input;