/**
 * custome http client to handle handle get and post call
 */
export default class HttpClient{
    /**
     * get
     * @param {*} url 
     */
    get(url){
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open("GET",url);
            request.setRequestHeader("Content-Type","json");
            request.onload = function(){
                // return as json object
                if(this.status==200 && HttpClient.isValidJson(this.response)){
                    resolve(JSON.parse(this.response));
                }else{
                    // reject if its not valid response
                    reject()
                }                                
            }
            request.onerror = function(err){                                  
                reject(err);
            }
            request.timeout = 20000;
            request.send();
        });
    }
    /**
     * TBD
     */
    post(){

    }
    /**
     * 
     * @param {*} data - json data
     * check if the json is valid one
     */
    static isValidJson(data){        
        try {
            JSON.parse(data);
        } catch (e) {
            return false;
        }
        return true;        
    }
}