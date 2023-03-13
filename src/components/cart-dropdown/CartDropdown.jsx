import './CartDropdown.scss';

import { Button } from '../';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="">cheakout</Button>
    </div>
  );
};

export default CartDropdown;
