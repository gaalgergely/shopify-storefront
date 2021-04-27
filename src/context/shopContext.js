import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

class shopProvider extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    componentDidMount() {

        if (localStorage.checkout_id)
        {
            this.fetchCheckout(localStorage.checkout_id);

        } else {
            
            this.createCheckout();
        }
    }

    createCheckout = async () => {

        client.checkout.create().then((checkout) => {
                    
            localStorage.setItem("checkout_id", checkout.id);
            this.setState({checkout: checkout});
        });
    }

    fetchCheckout = async (checkoutId) => {

        client.checkout.fetch(checkoutId).then((checkout) => {
            
            this.setState({checkout: checkout});
        });
    }

    addItemToCheckout = async () => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {

        client.product.fetchAll().then((products) => {

            this.setState({products: products});
        });
    }

    fetchProductWithHandle = async (handle) => {

        client.product.fetchByHandle(handle).then((product) => {
        
            this.setState({product: product});
        });
    }

    closeCart = () => {}

    openCart = () => {}

    closeMenu = () => {}

    openMenu = () => {}

    render() {

        return (
            <ShopContext.Provider 
                value={{ 
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithHandle: this.fetchProductWithHandle,
                    addItemToCheckout: this.addItemToCheckout,
                    removeLineItem: this.removeLineItem,
                    openCart: this.openCart,
                    closeCart: this.closeCart,
                    openMenu: this.openMenu,
                    closeMenu: this.closeMenu
                }}
            >

                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext }

export default shopProvider
