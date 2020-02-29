
import React, { Component } from 'react';
import TemplateService from '../services/TemplateService';

class TemplateSlider extends Component {

    constructor(props) {        
        super(props);   
        this.initSlider();     
    }
    /**
     * initSlider
     * Init the slider
     */
    initSlider(){
        // Initialize the slider with current page 1 
        this.currentPage = 1;
        // No of items in the slider
        this.slidesPerPage =4;
        let previousEnabled = false;   
        this.allTemplateList = TemplateService.templateList;
        let nextEnabled = this.allTemplateList.length > this.slidesPerPage;        
        this.state = {
            "currentPageTemplates":this.allTemplateList.slice(0,this.slidesPerPage),
            "previousButtonEnabled":previousEnabled,
            "nextButtonEnabled":nextEnabled
        } 
    }
    /**
     * moveNext
     */
    moveNext = ()=>{        
        if(!this.state.nextButtonEnabled) return;
        this.currentPage = this.currentPage + 1;        
        // To Slice - -1 the current page
        let itemsToDisplayInCurrentPage = this.allTemplateList.slice((this.currentPage-1)* this.slidesPerPage,this.currentPage*this.slidesPerPage);        
        let nextEnabled = this.allTemplateList.length > this.currentPage * this.slidesPerPage;   
        this.setState({
            "currentPageTemplates":itemsToDisplayInCurrentPage,
            "nextButtonEnabled" : nextEnabled,
            "previousButtonEnabled":true
        })      
    }
    /**
     * movePrevious
     */
    movePrevious = ()=>{            
        if(!this.state.previousButtonEnabled) return;

        this.currentPage = this.currentPage - 1;        
        let itemsToDisplayInCurrentPage = this.allTemplateList.slice((this.currentPage-1)*this.slidesPerPage,this.currentPage*this.slidesPerPage);        
        let previousEnabled = this.currentPage == 1 ? false : true;
        this.setState({
            "currentPageTemplates":itemsToDisplayInCurrentPage,
            "nextButtonEnabled" : true,
            "previousButtonEnabled":previousEnabled
        })        
    }    

    /**
     * Reacts render method
     */
    render() {
        return (
            <div class="container">
                <div class="thumbnails">
                    <div class="group">
                        {this.state.currentPageTemplates.map((templateItem) => {                                
                                    return  (<a href={'javascript:void'} title={templateItem.title} onClick={()=>{this.props.navigator(templateItem)}}>
                                    <img src={`/assets/images/thumbnails/${templateItem.thumbnail}`} alt="7111-m" width="145" height="121" />
                                    <span>{templateItem.id}</span>
                                    </a>)                            
                        })}                                                   
                        <a href={'javascript:void'} class={`previous ${!this.state.previousButtonEnabled ? 'disabled' : ''}`} title="Previous" onClick={()=>{this.movePrevious()}}>Previous</a>
                        <a href={'javascript:void'} class={`next ${!this.state.nextButtonEnabled ? 'disabled' : ''}`} title="Next" onClick={()=>{this.moveNext()}}>Next</a>
                    </div>
                </div>                
            </div>
        );
    }
}

export default TemplateSlider;