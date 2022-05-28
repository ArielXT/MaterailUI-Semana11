import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { Homeview } from './pages';
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Homeview/>
      </div>
    </ThemeProvider>
  )
}
export default App
