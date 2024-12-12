import "./App.css";
import { Page } from "./components/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Page />
       
      </ThemeProvider>
    </>
  );
}
export default App;
