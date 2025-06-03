import { FC, } from 'react';
import './toggle.scss';
import { bemCN } from '../../configs/bem-classname';

type ToogleProps = {
  isChecked: boolean;
  onChangeChecked: (isCheck: boolean) => void;
};

const toggleCN = bemCN('toggle');

const Toggle: FC<ToogleProps> = ({ isChecked, onChangeChecked }) => {
  return (
    <div className={toggleCN()}>
      <label className={toggleCN('check')}>
        <input
          checked={isChecked}
          onChange={() => onChangeChecked(!isChecked)}
          className={toggleCN('input')}
          type="checkbox"
        ></input>
        <span className={toggleCN('slider')}></span>
      </label>
    </div>
  );
};

export default Toggle;
