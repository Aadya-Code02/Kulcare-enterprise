import "./App.css";
import { Page } from "./components/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeAnxiety } from "./components/Home/EmployeeAnxiety";
import { ProviderCoverage } from "./components/Home/ProviderCoverage";
import { ProviderSuggestions } from "./components/Home/ProviderSuggestions";
import { Provider } from "./components/managehealth/Providers";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/manage-health" element={<Provider />} />
            <Route path="/manage-wellness" element={<ProviderCoverage />} />
            <Route path="/employees" element={<ProviderSuggestions />} />
            {/* Add more routes as needed based on your navigation structure */}
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
