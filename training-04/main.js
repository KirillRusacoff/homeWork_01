//Bind

const contextObject = {
    item: 'some value'
};

const boundLogger = logger.bind(contextObject);
boundLogger(); // Выведет: I output only external context: some value

//Call

const contextObject2 = {
    item: 'some value'
};

logger.call(contextObject2); // Выведет: I output only external context: some value
  
//Apply

const contextObject3 = {
    item: 'some value'
};

logger.apply(contextObject3); // Выведет: I output only external context: some value
  