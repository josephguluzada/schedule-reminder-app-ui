import './App.css';
import Form from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from '../src/components/tooltips/Tooltip';
import QuestionMarkIcon from '../src/components/questionMarkIcon/QuestionMarkIcon';

function App() {
	return (
		<div className="App">
			<Form />
			<ToastContainer />
		</div>
	);
}

export default App;
