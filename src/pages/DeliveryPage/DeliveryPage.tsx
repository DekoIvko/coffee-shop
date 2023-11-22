import { useEffect } from "react";
import { useNavigate } from "react-router";
import { GetDeliversThunk } from "../../store/deliversSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import DeliversList from "./DeliversList/DeliversList";

const DeliveryPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const delivers = useAppSelector((state: RootState) => state.delivers);

  useEffect(() => {
    dispatch(GetDeliversThunk());
  }, [dispatch]);

  return (
    <div className='container-fluid'>
      <div className='title d-flex flex-row w-100 m-2 justify-content-between'>
        <button className='btn btn-outline-secondary' onClick={() => navigation("/")}>
          Back to home page
        </button>
        <h2 className='text-light position-absolute start-50'>Delivery page</h2>
        <div></div>
      </div>
      <div className='delivers-page'>
        <DeliversList delivers={delivers?.delivers} />
      </div>
    </div>
  );
};

export default DeliveryPage;
