import { useNavigate } from 'react-router';
import { Coffees } from '../../enums/ECoffees';
import { CoffeeList, CoffeeModal } from '../../components';
import withModifyCoffees from '../../hooks/withModifyCoffees';

import './MenuPage.scss';

const MenuPage = ({
  onCoffeeClick,
  coffeeDetails,
  setCoffeeDetails,
  showModal,
  setShowModal,
  onAddOrder,
}: any) => {
  const navigation = useNavigate();

  return (
    <div className='container-fluid menu-page'>
      <button
        className='btn btn-outline-secondary'
        onClick={() => navigation('/')}
      >
        Back to home page
      </button>
      <div className='coffee-menu'>
        <CoffeeList coffees={Coffees} onCoffeeClick={onCoffeeClick} />
      </div>
      <CoffeeModal
        show={showModal}
        coffeeDetails={coffeeDetails!}
        setCoffeeDetails={setCoffeeDetails}
        setShow={setShowModal}
        onClickCoffee={onAddOrder}
      />
    </div>
  );
};

export default withModifyCoffees(MenuPage);
