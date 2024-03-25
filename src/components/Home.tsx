import Resume from './Resume';
import Sales from './Sales';
import Menu from '../components/Menu';
import SaleDetails from '../components/SaleDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="flex m-12 h-auto drop-shadow-2xl justify-center">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/vendas/id" element={<SaleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
