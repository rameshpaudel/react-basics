export function logMessages(...args){
    console.log(...args)
}

export function warnMessage(...args){
    console.warn(...args);
}

export function errorMessage(...args){
    console.warn(...args);
}

export default {
     logMessages,
     warnMessage,
     errorMessage
 }