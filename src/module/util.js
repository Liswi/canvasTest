export const isCanvas = (ele) => ele.getContext ? true : false;

export const getCanvas = (id) => document.querySelector(id);