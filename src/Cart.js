import React, { useContext } from 'react'
import CartCss from './Cart.module.css'
import { CartContext } from './CartContext'

export default function Cart() {

  let {cartItems, setCartItems} = useContext(CartContext)

  let emptyCart = cartItems.length <= 0 ? true : false

  function removeBike(bikeId, bikeBrand) {
    let getBikeIndex = cartItems.findIndex((bike) => {
      return bike.id === bikeId && bike.brand === bikeBrand
    })

    let newCartArray = [...cartItems]
    newCartArray.splice(getBikeIndex, 1)
    setCartItems(newCartArray)
  }

  return (
    <div className={CartCss.cart}>
      {
        emptyCart &&
          <div className={CartCss.noItem}>
            No items in the cart
          </div>
      }

      {
        !emptyCart &&
          <div className={CartCss.cartContainer}>

            <div className={CartCss.cartList}>
              {
                cartItems.map(bike => (
                  <div className={CartCss.bikeContainer} key={bike.id}>
                    <img src={process.env.PUBLIC_URL + '/img/' + bike.brand + '/' + bike.img}></img>
                    <div>
                      <p><span>{bike.name}</span></p>
                      <p>Size: {bike.size}</p>
                      <p>Price: USD.10000</p>
                    </div>
                    <button onClick={() => removeBike(bike.id, bike.brand)}>remove</button>
                  </div>
                ))
              }
            </div>

            <div className={CartCss.checkOut}>
              <div>
              <p>Order Summary</p>
              <table className={CartCss.checkOutTable}>
                <tr className={CartCss.checkOutTableRow}>
                  <td className={CartCss.subTitle}>Subtotal :</td>
                  <td>$10000</td>
                </tr>

                <tr className={CartCss.checkOutTableRow}>
                  <td className={CartCss.subTitle}>Shipping :</td>
                  <td>$10000</td>
                </tr>

                <tr>
                  <td className={CartCss.subTitle}>Tax :</td>
                  <td>$10000</td>
                </tr>

                <tr className={CartCss.checkOutTableRow}>
                  <td className={CartCss.subTitle}>Order Total :</td>
                  <td>$30000</td>
                </tr>
              </table>
              </div>

              <button>Check Out</button>
            </div>

          </div>
      }
    </div>
  )
}
