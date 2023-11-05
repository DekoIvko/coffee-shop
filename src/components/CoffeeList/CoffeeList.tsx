import { ICoffee } from '../../interfaces/ICoffee';

import americano from '../../imgs/americano-coffee2.webp';
import cappuccino from '../../imgs/cappuccino-coffee.jpg';
import domashno from '../../imgs/domahsno-coffee.jpg';
import espresso from '../../imgs/esspreso-coffee.jpg';
import latte from '../../imgs/latte-coffee.webp';
import macchiato from '../../imgs/macchiato-coffee.jpg';

import './CoffeeList.scss';
import { useLocation } from 'react-router';

interface IProps {
  coffees: ICoffee[];
  onCoffeeClick: any;
  onRemoveCoffee?: any;
}

const CoffeeList = ({ coffees, onCoffeeClick, onRemoveCoffee }: IProps) => {
  const location = useLocation();
  return (
    <div className='coffee-lists  row justify-content-center gap-4'>
      {coffees?.map((coffee: ICoffee, index: number) => {
        return (
          <div
            key={coffee?.coffeeName + index}
            className='coffee-card d-flex flex-column p-4'
          >
            <div className='d-flex flex-row position-relative'>
              <div className='coffee-title'>
                <h4>{coffee?.coffeeName}</h4>
              </div>
              {location?.pathname.includes('orders') && (
                <button
                  type='button'
                  className='btn-close position-absolute end-0'
                  aria-label='Close'
                  onClick={() => onRemoveCoffee(coffee)}
                ></button>
              )}
            </div>
            <div className='coffee-body' onClick={() => onCoffeeClick(coffee)}>
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
  );
};

export default CoffeeList;
