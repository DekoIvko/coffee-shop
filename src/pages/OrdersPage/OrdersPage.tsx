import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CoffeeList, CoffeeModal } from '../../components';
import { useNavigate } from 'react-router';
import withModifyCoffees from '../../hooks/withModifyCoffees';
import { GetMyCoffeesThunk } from '../../store/coffeesSlice';

import './OrdersPage.scss';

const OrdersPage = ({
  onCoffeeClick,
  coffeeDetails,
  setCoffeeDetails,
  showModal,
  setShowModal,
  onUpdateOrder,
}: any) => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const coffees = useSelector((state: RootState) => state.coffees);

  useEffect(() => {
    dispatch(GetMyCoffeesThunk());
  }, [dispatch]);

  const onProceedCoffees = () => {
    if (window.confirm('Are you sure you want to proceed')) console.log('yeah');
  };

  return (
    <div className='container-fluid orders-page'>
      <button
        className='btn btn-outline-secondary'
        onClick={() => navigation('/')}
      >
        Back to home page
      </button>
      <div className='orders'>
        {coffees?.myCoffees.length ? (
          <CoffeeList
            coffees={coffees?.myCoffees}
            onCoffeeClick={onCoffeeClick}
          />
        ) : (
          <div className='d-flex text-light justify-content-center'>
            <h1>No coffees for you</h1>
          </div>
        )}
      </div>
      {coffees.coffees.length ? (
        <button
          className='btn btn-primary float-end'
          onClick={onProceedCoffees}
        >
          Proceed with you order
        </button>
      ) : null}
      <CoffeeModal
        show={showModal}
        coffeeDetails={coffeeDetails!}
        setCoffeeDetails={setCoffeeDetails}
        setShow={setShowModal}
        onClickCoffee={onUpdateOrder}
      />
    </div>
  );
};

export default withModifyCoffees(OrdersPage);
