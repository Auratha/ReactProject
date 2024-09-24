import removeCross from "../Components/Assets/cart_cross_icon.png";

const Cart = ({ cart = [], handleSetCart }) => {
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    handleSetCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="w-4/5 mx-auto">
      <table className="w-full my-10 text-center">
        <thead>
          <tr className="border-b-[1px] border-gray-300">
            <th className="py-5">Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="border-b-[1px] border-gray-300">
                <td className="py-2">
                  <img src={item.image} alt="" className="w-[70px] mx-auto" />
                </td>
                <td>{item.name}</td>
                <td>{item.new_price}</td>
                <td className="">
                  <span className="px-4 py-2 border-[1px] border-gray-300">
                    {item.quantity}
                  </span>
                </td>
                <td>{item.new_price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    <img src={removeCross} alt="remove button" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-24 w-[40%]">
        <h1 className="text-xl font-bold">Cart Totals</h1>
        <ul className="space-y-2 mt-4">
          <li className="pb-2 flex justify-between items-center border-b-2 border-gray-500">
            <span>SubTotal</span>
            <span>
              $
              {cart.reduce((subtotal, { new_price, quantity }) => {
                subtotal += new_price * quantity;
                return subtotal;
              }, 0)}
            </span>
          </li>
          <li className="pb-2 flex justify-between items-center border-b-2 border-gray-500">
            <span>Shipping Fee</span>
            <span>Free</span>
          </li>
          <li className="pb-2 flex justify-between items-center border-b-2 border-gray-500 ">
            <span>Total</span>
            <span>
              $
              {cart.reduce((subtotal, { new_price, quantity }) => {
                subtotal += new_price * quantity;
                return subtotal;
              }, 0)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
