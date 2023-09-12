import sendRequest from './send-request';

const BASE_URL = '/api/items';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export function createItem(itemData) {
    return sendRequest(BASE_URL, 'POST', itemData);
}

export async function getItemsByVendorId(vendorId) {
    const url = `${BASE_URL}/byVendor/${vendorId}`;
    return sendRequest(url);
}

export function createCustomItem(itemData, inventoryItemData) {
    const payload = {
        ...itemData,
        ...inventoryItemData,
    };
    return sendRequest(`${BASE_URL}/custom`, 'POST', payload);
}

export async function getItemById(itemId) {
    return sendRequest(`${BASE_URL}/${itemId}`);
}