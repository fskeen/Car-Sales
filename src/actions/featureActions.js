export const addFeature = (feature) => {
    console.log("action: addFeature invoked");
    return { type: 'ADD_FEATURE', payload: feature };
};

export const removeFeature = (id) => {
    console.log("action: removeFeature invoked");
    return { type: 'REMOVE_FEATURE', payload: id };
};