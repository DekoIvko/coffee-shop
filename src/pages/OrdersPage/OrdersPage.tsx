import React from 'react';

const OrdersPage = () => {
  return (
    <div className='container-fluid orders-body'>
      <div className='title'>
        <h2>Yours orders</h2>
      </div>
      <div className='orders'></div>
      <button className='btn btn-primary'>Proceed with you order</button>
    </div>
  );
};

export default OrdersPage;
