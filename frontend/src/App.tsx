import Header from "./componentes/Header";
import SalesCard from "./componentes/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="vendas">
          <div className="container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
