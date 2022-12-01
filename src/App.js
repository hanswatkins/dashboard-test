import './App.css';
import Dashboard from './Dashboard';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

function App() {
	return (
		<div className='App'>
			<StyledEngineProvider injectFirst>
				<Dashboard />
			</StyledEngineProvider>
		</div>
	);
}

export default App;
