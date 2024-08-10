import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Contact Us</h1>
      </header>
      <main>
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
