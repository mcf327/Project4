import sendRequest from './send-request';

const BASE_URL = '/api/inventory';

export function getInventory() {
    return sendRequest(`${BASE_URL}`);
}

export function addItemToInventory(itemId) {
    return sendRequest(`${BASE_URL}/items/${itemId}`, 'POST');
}

export function removeItemFromInventory(itemId) {
    return sendRequest(`${BASE_URL}/items/${itemId}`, 'DELETE');
}