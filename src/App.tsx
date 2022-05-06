import { Widget } from './components/Widget';
import './styles/global.css';

type ButtonProps = {
  text: string;
}

function Button(props: ButtonProps) {
  return <button className='bg-violet-500 p-2 rounded'>{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className='flex gap-2'>
      <Widget />
    </div>
  )
}

export default App
