import sendRequest from './send-request';

const BASE_URL = '/api/vendors';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export function createVendor(vendorData) {
    return sendRequest(BASE_URL, 'POST', vendorData);
}

export async function getStoreByUserId(userId) {
    return sendRequest(`${BASE_URL}/store/${userId}`);
}

export function updateStoreInfo(userId, updatedData) {
    return sendRequest(`${BASE_URL}/store/${userId}`, 'PUT', updatedData);
}