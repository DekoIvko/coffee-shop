import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import { ICoffee } from '../../interfaces/ICoffee';

interface IProps {
  show: boolean;
  coffeeDetails: ICoffee;
  setShow: any;
  onAddOrder: any;
}

const CoffeeModal = ({ show, coffeeDetails, setShow, onAddOrder }: IProps) => {
  const handleClose = () => setShow(false);

  return (
    <Modal
      size='lg'
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby='example-modal-sizes-title-lg'
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'>
          Modify your {coffeeDetails?.coffeeName} coffee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='body'>
          <div className='description'>
            <span>{coffeeDetails?.description}</span>
          </div>
          <div className='inputs d-flex flex-column align-items-center m-4'>
            <InputGroup className='mb-3' style={{ width: '250px' }}>
              <InputGroup.Text>Sugar</InputGroup.Text>
              <InputGroup.Text>0 to 5</InputGroup.Text>
              <Form.Control
                type='number'
                aria-label='sugar amount'
                // onChange={(e) =>
                //   setProductsParams((prevObj: IProducts) => ({
                //     ...prevObj,
                //     price: parseInt(e.target.value, 10),
                //   }))
                // }
              />
            </InputGroup>
            <InputGroup className='mb-3' style={{ width: '250px' }}>
              <InputGroup.Text>Cream</InputGroup.Text>
              <InputGroup.Text>0 to 5</InputGroup.Text>
              <Form.Control
                type='number'
                aria-label='cream amount'
                // onChange={(e) =>
                //   setProductsParams((prevObj: IProducts) => ({
                //     ...prevObj,
                //     price: parseInt(e.target.value, 10),
                //   }))
                // }
              />
            </InputGroup>
            <InputGroup className='mb-3' style={{ width: '250px' }}>
              <InputGroup.Text>Milk</InputGroup.Text>
              <InputGroup.Text>0 to 5</InputGroup.Text>
              <Form.Control
                type='number'
                aria-label='milk amount'
                // onChange={(e) =>
                //   setProductsParams((prevObj: IProducts) => ({
                //     ...prevObj,
                //     price: parseInt(e.target.value, 10),
                //   }))
                // }
              />
            </InputGroup>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={(e) => onAddOrder(e)}>
          Add coffee
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CoffeeModal;
