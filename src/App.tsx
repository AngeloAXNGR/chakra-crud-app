import { TodoContextProvider } from './contexts/TodoContext';
import RootLayout from './layout/RootLayout';
function App() {
  return (
    <TodoContextProvider>
      <RootLayout/>
    </TodoContextProvider>
  );
}

export default App;
