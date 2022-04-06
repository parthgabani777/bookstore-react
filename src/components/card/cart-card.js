import { useCart } from "../../context/cart-context";
import { priceAfterDiscountCalculator } from "../../utils/utils";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";

function CartCard({ product }) {
    const { cart, dispatchCart, changeQuantity, removeFromCart } = useCart();
    const { wishlist, dispatchWishlist, addToWishlist } = useWishlist();

    const { auth } = useAuth();

    const discountedPrice = priceAfterDiscountCalculator(
        product.price,
        product.discount
    );

    return (
        <div className="card card-horizontal card-shadow">
            <div className="card-img">
                <img src={product.image} alt="Image" />
            </div>
            <div className="card-body p-3">
                <div className="card-content">
                    <div className="fw-semibold text-m">{product.title}</div>
                    <div className="fw-bold text-m">
                        {discountedPrice}
                        <span className="cancelled-price">
                            ${product.price}
                        </span>
                    </div>
                    <div className="text-discount text-s">
                        {product.discount} % off
                    </div>
                    <div className="text-s">
                        <span className="input-counter">
                            Quantity:
                            <div
                                className="counter-btn"
                                onClick={() => {
                                    changeQuantity(
                                        auth.token,
                                        product,
                                        "increment",
                                        dispatchCart
                                    );
                                }}
                            >
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="counter-text">
                                {product.quantity}
                            </div>
                            <div
                                className="counter-btn"
                                onClick={() => {
                                    changeQuantity(
                                        auth.token,
                                        product,
                                        "decrement",
                                        dispatchCart
                                    );
                                }}
                            >
                                <i className="fas fa-minus"></i>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="card-actions text-s">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            removeFromCart(auth.token, product, dispatchCart);
                        }}
                    >
                        Remove From Cart
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            addToWishlist(
                                auth.token,
                                product,
                                dispatchWishlist
                            );
                        }}
                    >
                        Add To Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
