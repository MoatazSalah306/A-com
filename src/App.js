import Header from "./components/Header";
import "./assets/css/style-prefix.css";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import Hero from "./components/Hero";


function App() {
  return (
    <>
     <div class="overlay" data-overlay></div>
     <Header/>
     <Modal/>
     <Toast/>
     <Hero/>
    </>
  );
}

export default App;
