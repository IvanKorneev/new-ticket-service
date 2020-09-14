const eventLoaded = (newEvent) => {
    return {
        type: 'EVENT_LOADED',
        payload: newEvent
    }
};
const asideLoaded = (newAside)=>{
    return{
        type:'ASIDE_LOADED',
        payload:newAside
    }
};

export {
    eventLoaded,
    asideLoaded
};