import { useState } from 'react';
import { ICoffee } from '../interfaces/ICoffee';
import { useDispatch } from 'react-redux';
import { AddCoffeeThunk, UpdateCoffeeThunk } from '../store/coffeesSlice';

interface IProps {
  onCoffeeClick: any;
  setCoffeeDetails: any;
  setShowModal: any;
  onAddOrder: any;
}

const withModifyCoffees = (
  WrappedComponent: React.JSXElementConstructor<any>
) => {
  const useModifyCoffees = (props: React.PropsWithChildren<IProps | any>) => {
    const dispatch = useDispatch<any>();
    const [coffeeDetails, setCoffeeDetails] = useState<ICoffee>();
    const [showModal, setShowModal] = useState<boolean>(false);

    const onCoffeeClick = (coffee: ICoffee) => {
      setCoffeeDetails(coffee);
      setShowModal(true);
    };

    const onAddOrder = (
      e: React.MouseEvent<HTMLButtonElement>,
      coffee: ICoffee
    ) => {
      e.preventDefault();
      dispatch(
        AddCoffeeThunk({ ...coffee, id: Math.random().toString(16).slice(2) })
      );
      setShowModal(false);
    };

    const onUpdateOrder = async (
      e: React.MouseEvent<HTMLButtonElement>,
      coffee: ICoffee
    ) => {
      e.preventDefault();
      await dispatch(UpdateCoffeeThunk({ ...coffee, id: coffee?.id }));
      window.location.reload();
      setShowModal(false);
    };

    return (
      <WrappedComponent
        onCoffeeClick={onCoffeeClick}
        coffeeDetails={coffeeDetails}
        setCoffeeDetails={setCoffeeDetails}
        showModal={showModal}
        setShowModal={setShowModal}
        onAddOrder={onAddOrder}
        onUpdateOrder={onUpdateOrder}
        {...props}
      />
    );
  };
  return useModifyCoffees;
};

export default withModifyCoffees;
