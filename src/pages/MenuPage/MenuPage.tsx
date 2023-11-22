import { useEffect } from "react";
import { useNavigate } from "react-router";
import { RootState } from "../../store/store";
import { GetCoffeesThunk } from "../../store/coffeesSlice";
import { CoffeeList, CoffeeModal } from "../../components";
import withModifyCoffees from "../../hooks/withModifyCoffees";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import "./MenuPage.scss";

const MenuPage = ({ onCoffeeClick, coffeeDetails, setCoffeeDetails, showModal, setShowModal, onAddOrder }: any) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const coffees = useAppSelector((state: RootState) => state.coffees);

  useEffect(() => {
    dispatch(GetCoffeesThunk());
  }, [dispatch]);

  return (
    <div className='container-fluid menu-page'>
      <div className='title d-flex flex-row w-100 m-2 justify-content-between'>
        <button className='btn btn-outline-secondary' onClick={() => navigation("/")}>
          Back to home page
        </button>
        <h2 className='text-light position-absolute start-50'>Menu page</h2>
        <div></div>
      </div>
      <div>
        <div className='coffee-menu'>
          <CoffeeList coffees={coffees?.coffees} onCoffeeClick={onCoffeeClick} />
        </div>
        <CoffeeModal
          show={showModal}
          coffeeDetails={coffeeDetails!}
          setCoffeeDetails={setCoffeeDetails}
          setShow={setShowModal}
          onClickCoffee={onAddOrder}
        />
      </div>
    </div>
  );
};

export default withModifyCoffees(MenuPage);
