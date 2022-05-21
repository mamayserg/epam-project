import {useInput} from './hooks/use-input';
import Input from './components/Input';
import Button from './components/Button';

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
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
<form onSubmit={submit}>
<Input value={colorProps.value} onChange={colorProps.onChange} type='color' />
<Input value={textProps.value} onChange={textProps.onChange} type='text' />
<Button type="submit"text="Add"/>
</form>
 </>)
}


export default App;
