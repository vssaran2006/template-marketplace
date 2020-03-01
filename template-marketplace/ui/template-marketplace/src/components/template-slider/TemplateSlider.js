
import React, { Component } from 'react';
import TemplateService from '../../services/TemplateService';

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
        // Can be change to any number based on break - the pagination just works fine
        this.noOfItemsPerPage =4;
        // Master template list        
        this.allTemplateList = TemplateService.templateList;
        // If the no.Of templates is greater than slides
        let nextEnabled = this.allTemplateList.length > this.noOfItemsPerPage;        
        this.state = {
            "currentPageTemplates":this.allTemplateList.slice(0,this.noOfItemsPerPage),
            "previousButtonEnabled":false,
            "nextButtonEnabled":nextEnabled
        } 
    }
    /**
     * moveNext
     * Move the next page navigation.
     */
    moveNext = ()=>{   
        // if the next item exist proceed , otherwise block the event     
        if(!this.state.nextButtonEnabled) return;
        // Increment the page number
        this.currentPage = this.currentPage + 1;        
        // Array of Items to be displayed in the current page - ex. Page 1 * 4 to 2 * 4 = 8 
        let itemsToDisplayInCurrentPage = this.allTemplateList.slice((this.currentPage-1)* this.noOfItemsPerPage,this.currentPage*this.noOfItemsPerPage);        
        // next button is enabled only if the templates stills to show based on current page
        let nextEnabled = this.allTemplateList.length > this.currentPage * this.noOfItemsPerPage;   
        // Change the state with new array data - next button , previous flags
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
        // decrement the page number by 1
        this.currentPage = this.currentPage - 1;        
        let itemsToDisplayInCurrentPage = this.allTemplateList.slice((this.currentPage-1)*this.noOfItemsPerPage,this.currentPage*this.noOfItemsPerPage);        
        // If the current page is 1 - no previous available
        let previousEnabled = !(this.currentPage == 1);
        // Change the state with new array data - next button , previous flags
        this.setState({
            "currentPageTemplates":itemsToDisplayInCurrentPage,
            "nextButtonEnabled" : true,
            "previousButtonEnabled":previousEnabled
        })        
    }    
    /**
     * selectTemplate
     * select the template and make the active flag
     */
    selectTemplate =(templateItem,e)=>{  
        // Remove active flag from other templates    
        this.allTemplateList.map((element)=> element.active = false);
        templateItem.active = true;   
        // Call the method to parent component
        this.props.navigator(templateItem)
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
                            return  (<a href={'javascript:void'} key={templateItem.id} title={templateItem.title} class={`${templateItem.active ? 'active' : ''}`}  onClick={(e)=>{this.selectTemplate(templateItem,e)}}>
                            <img src={`/assets/images/thumbnails/${templateItem.thumbnail}`}  width="145" height="121" />
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