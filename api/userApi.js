import 'whatwg-fetch';

export function getUsers(){
   return get('users');
};

function get(url){
   return fetch(url).then(onSuccess, onError);
};

function onSuccess(res){
    return res.json();
};

function onError(error){
   console.log(error); //eslint-disable-line no-console
};
