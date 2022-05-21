import {useInput} from './hooks/use-input';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

function App(){
const defaultText = "";
const defaultColor = '#ffffff'

const [textProps, resetText] = useInput(defaultText);
const [colorProps, resetColor] = useInput(defaultColor);

const submit = (e) =>{
e.preventDefault()

resetColor(defaultColor);
resetText(defaultText);

}

return(<>
<Title title="input text and color" />
<form onSubmit={submit}>
<Input value={colorProps.value} onChange={colorProps.onChange} type='color' />
<Input value={textProps.value} onChange={textProps.onChange} type='text' />
<Button type="submit"text="Add"/>
</form>
 </>)
}


export default App;
