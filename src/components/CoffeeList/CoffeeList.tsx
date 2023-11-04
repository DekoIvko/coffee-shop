import { ICoffee } from '../../interfaces/ICoffee';

import americano from '../../imgs/americano-coffee2.webp';
import cappuccino from '../../imgs/cappuccino-coffee.jpg';
import domashno from '../../imgs/domahsno-coffee.jpg';
import espresso from '../../imgs/esspreso-coffee.jpg';
import latte from '../../imgs/latte-coffee.webp';
import macchiato from '../../imgs/macchiato-coffee.jpg';

import './CoffeeList.scss';

interface IProps {
  coffees: ICoffee[];
  onCoffeeClick: any;
}

const CoffeeList = ({ coffees, onCoffeeClick }: IProps) => {
  return (
    <div className='coffee-lists  row justify-content-center gap-4'>
      {coffees?.map((coffee: ICoffee, index: number) => {
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
  );
};

export default CoffeeList;
