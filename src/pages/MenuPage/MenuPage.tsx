import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Coffees } from '../../enums/ECoffees';
import CoffeeModal from '../../components/CoffeeModal/CoffeeModal';

import americano from '../../imgs/americano-coffee2.webp';
import cappuccino from '../../imgs/cappuccino-coffee.jpg';
import domashno from '../../imgs/domahsno-coffee.jpg';
import espresso from '../../imgs/esspreso-coffee.jpg';
import latte from '../../imgs/latte-coffee.webp';
import macchiato from '../../imgs/macchiato-coffee.jpg';
import { ICoffee } from '../../interfaces/ICoffee';

import './MenuPage.scss';

const MenuPage = () => {
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [coffeeDetails, setCoffeeDetails] = useState<ICoffee>();

  const onCoffeeClick = (coffee: ICoffee) => {
    setCoffeeDetails(coffee);
    setShowModal(true);
  };

  const onAddOrder = (coffee: ICoffee) => {
    console.log(coffee);
  };

  return (
    <div className='container-fluid coffee-page'>
      <button
        className='btn btn-outline-secondary'
        onClick={() => navigation('/')}
      >
        Back to home page
      </button>
      <div className='coffee-menu row justify-content-md-center gap-4'>
        {Coffees?.map((coffee: ICoffee, index: number) => {
          return (
            <div
              key={coffee?.coffeeName + index}
              className='coffee-card d-flex flex-column p-4'
              onClick={() => onCoffeeClick(coffee)}
            >
              <div className='coffee-title'>
                <h4>{coffee?.coffeeName}</h4>
              </div>
              <div className='coffee-body'>
                <div>
                  Description: <span>{coffee?.description}</span>
                </div>
                <img
                  src={
                    coffee?.coffeeType === 'domashno'
                      ? domashno
                      : coffee?.coffeeType === 'americano'
                      ? americano
                      : coffee?.coffeeType === 'cappuccino'
                      ? cappuccino
                      : coffee?.coffeeType === 'espress'
                      ? espresso
                      : coffee?.coffeeType === 'macchiato'
                      ? macchiato
                      : latte
                  }
                  alt='coffee'
                />
              </div>
            </div>
          );
        })}
      </div>
      <CoffeeModal
        show={showModal}
        coffeeDetails={coffeeDetails!}
        setShow={setShowModal}
        onAddOrder={onAddOrder}
      />
    </div>
  );
};

export default MenuPage;
