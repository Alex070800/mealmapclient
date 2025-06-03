import { bemCN } from '../../configs/bem-classname';
import './dish.scss';

const dishCN = bemCN("dish");

export const Dish = () =>{
    return <div className={dishCN()}></div>
}