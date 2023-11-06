import { IDelivers } from "../../../interfaces/IDelivers";

import "./DeliversList.scss";

interface IProps {
  delivers: IDelivers[];
}

const DeliversList = ({ delivers }: IProps) => {
  return (
    <div className='deliver-lists  row justify-content-center gap-4'>
      {delivers?.map((deliver: IDelivers, index: number) => {
        return (
          <div key={deliver?.name + index} className='deliver-card d-flex flex-column p-4'>
            <div className='d-flex flex-row position-relative'>
              <div className='deliver-title'>
                <h4>{deliver?.name}</h4>
              </div>
            </div>
            <div>
              <div>
                Price: <span>{deliver?.totalPrice}$</span>
              </div>
              <div>
                Location: <span>{deliver?.location}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliversList;
