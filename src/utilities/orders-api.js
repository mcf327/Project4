import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function removeItemFromCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'DELETE');
}

export function changeCartItemQty(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export async function getUserOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
}