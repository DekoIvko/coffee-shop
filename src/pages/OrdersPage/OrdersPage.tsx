import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CoffeeList, CoffeeModal } from "../../components";
import { useNavigate } from "react-router";
import withModifyCoffees from "../../hooks/withModifyCoffees";
import { GetMyCoffeesThunk, RemoveCoffeeThunk } from "../../store/coffeesSlice";
import { ICoffee } from "../../interfaces/ICoffee";
import { AddDeliverThunk } from "../../store/deliversSlice";

import "./OrdersPage.scss";

const OrdersPage = ({ onCoffeeClick, coffeeDetails, setCoffeeDetails, showModal, setShowModal, onUpdateOrder }: any) => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigate();
  const coffees = useSelector((state: RootState) => state.coffees);

  useEffect(() => {
    dispatch(GetMyCoffeesThunk());
  }, [dispatch]);

  const onRemoveCoffee = (coffee: ICoffee) => {
    if (window.confirm("Are you sure?")) {
      dispatch(RemoveCoffeeThunk(coffee));
      window.location.reload();
    }
  };

  const onProceedCoffees = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let allMyCoffees: any = [];
    const totalPrice: number = coffees.myCoffees.reduce((accumulator, object) => {
      allMyCoffees.push(object.id);
      return accumulator + object.price;
    }, 0);

    if (window.confirm(`The total price is ${totalPrice}. Are you sure you want to proceed?`)) {
      let person = prompt(`Please enter your name:`);
      if (person === null || person === "") {
        alert("Please write you name");
      } else {
        await dispatch(
          AddDeliverThunk({
            deliver: { id: Math.random().toString(16).slice(2), name: person, location: "coffee shop", totalPrice },
            myCoffees: allMyCoffees,
          })
        );
      }
    }
  };

  return (
    <div className='container-fluid orders-page'>
      <div className='title d-flex flex-row w-100 m-2 justify-content-between'>
        <button className='btn btn-outline-secondary' onClick={() => navigation("/")}>
          Back to home page
        </button>
        <h2 className='text-light position-absolute start-50'>Orders page</h2>
        {coffees?.myCoffees.length ? (
          <button className='btn btn-dark float-end' onClick={(e) => onProceedCoffees(e)}>
            Proceed with you order
          </button>
        ) : null}
      </div>
      <div>
        <div className='orders'>
          {coffees?.myCoffees.length ? (
            <CoffeeList coffees={coffees?.myCoffees} onCoffeeClick={onCoffeeClick} onRemoveCoffee={onRemoveCoffee} />
          ) : (
            <div className='d-flex text-light justify-content-center'>
              <h1>No coffees for you</h1>
            </div>
          )}
        </div>
        <CoffeeModal
          show={showModal}
          coffeeDetails={coffeeDetails!}
          setCoffeeDetails={setCoffeeDetails}
          setShow={setShowModal}
          onClickCoffee={onUpdateOrder}
        />
      </div>
    </div>
  );
};

export default withModifyCoffees(OrdersPage);
