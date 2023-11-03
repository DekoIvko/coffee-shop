import { NavLink, useNavigate } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  const navigation = useNavigate();
  const navigateTo = (path: string) => {
    navigation(path);
  };
  return (
    <div className='container-fluid home-page d-flex align-items-center justify-content-center'>
      <nav className=' d-flex'>
        <ul className='list-group list-group-flush d-flex flex-column gap-4'>
          <div className='button-back'>
            <button
              className='btn btn-outline-secondary'
              onClick={() => navigateTo('orders')}
            >
              Your orders
            </button>
          </div>
          <div className='button-back'>
            <button
              className='btn btn-outline-secondary'
              onClick={() => navigateTo('delivery')}
            >
              Delivery
            </button>
          </div>
          <div className='button-back'>
            <button
              className='btn btn-outline-secondary'
              onClick={() => navigateTo('menu')}
            >
              Menu
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
