import { writable } from 'svelte/store';

// GLOBAL STORE
export const isBeta = writable(true);

// QUERY INPUT
const initialDate = new Date()


export const queryInputDestination = writable('');
export const queryInputArrivalDate = writable(initialDate.toISOString().split('T')[0]);
export const queryInputChanged = writable(true);

export const queryResultAvailable = writable(false);
export const queryResultValid = writable(true);
export const queryResult = writable();