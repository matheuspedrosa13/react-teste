import './Button.css'
import { createRoot } from 'react-dom/client';

function Button(props){
    return (
        <button onClick={props.funcname}>
            {props.titulo}
        </button>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Button/>);
export default Button