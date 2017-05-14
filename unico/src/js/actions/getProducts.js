/**
 * Created by pratikgarala on 13/5/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';
import {store} from '../store/store';
import {productsData} from '../data/productsData';

// for getting list of products from the firebase database
export function getProducts() {
    return dispatch => {
        dispatch(getProductsRequestedAction());
        return database.ref('products').once('value', snap => {
            const products = snap.val();                     // to get Products from firebase
            // const products = productsData.products;             // to get data from local json file
            dispatch(getProductsFulfilledAction(products))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getProductsRejectedAction());
            });
    }
}

//Request Action
function getProductsRequestedAction() {
    return {
        type: ActionTypes.GetProductsRequested
    };
}

//Reject Action
function getProductsRejectedAction() {
    return {
        type: ActionTypes.GetProductsRejected
    }
}

//data fulfilled action
function getProductsFulfilledAction(products) {
    return {
        type: ActionTypes.GetProductsFulfilled,
        products
    };
}

// Set Total number of products in cart action
export function setTotalProducts(totalProducts) {
    return {
        type: ActionTypes.SetTotalProducts,
        totalProducts
    };
}

// set total cost of products in carts
export function setTotalCost(totalCost) {
    return {
        type: ActionTypes.SetTotalCost,
        totalCost
    };
}


// add product to cart action
export function addProductToCart(items){
    var productsInCart = [];
    var data = [];
    if (store.getState().products.productsInCart != null)
        productsInCart = store.getState().products.productsInCart;
    if(items != null){
        for(var i = 0; i< items.length ; i++){
            productsInCart[items[i]['category']]= items.filter((item) => (item.category.localeCompare([items[i]['category']]) == 0));
        }
    }
    return{
        type: ActionTypes.AddProductToCart,
        productsInCart
    }
}


//remove product from cart  action and update total products and total cost
export function removeProductFromCart(productItem) {
    var productsInCart = store.getState().products.productsInCart[productItem.category];
    productsInCart.splice(productsInCart.findIndex((product) => (product.id == productItem.id)),1);

    productsInCart = store.getState().products.productsInCart;
    var totalProducts = store.getState().products.totalProducts - parseInt(document.querySelector("#noOfCartons" + productItem.id).value);
    var totalCost = parseFloat(store.getState().products.totalCost - parseFloat(document.querySelector("#subValue" + productItem.id).textContent).toFixed(2) * 1).toFixed(2);
    console.log(totalCost, totalProducts);
    return{
        type: ActionTypes.RemoveProductFromCart,
        productsInCart,
        totalProducts,
        totalCost
    }
}