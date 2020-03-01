import HttpClient from './HttpClient';
import config from '../core/Config';
class TemplateService{

    templateList=null;
    constructor(){
        this.httpclient= new HttpClient();
    }
    /**
     * getTemplates
     * Make Http call and return promise
     */
    getTemplates(){        
        return new Promise((resolve,reject)=>{
            // Caching next time dont make call - in case the method is called from other component 
            if(this.templateList) resolve();
            const getTemplateUrl = config.basePathUrl + "/api/templates";
            this.httpclient.get(getTemplateUrl).then((response)=>{
                this.templateList = response;
                resolve();
            },()=>{
                //reject
                reject();
            })
        })

    }
    /**
     * clearTemplates
     * Clear the templates if required
     */
    clearTemplates(){
        this.templateList = null;
    }
}

const templateService = new TemplateService();
export default templateService;