export default class HttpClient{
    get(url){
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open("GET",url);
            request.setRequestHeader("Content-Type","json");
            request.onload = function(){
                // return as json object
                resolve(JSON.parse(this.response));
            }
            request.onerror = function(){                
                reject();
            }
            request.send();
        });
    }
}