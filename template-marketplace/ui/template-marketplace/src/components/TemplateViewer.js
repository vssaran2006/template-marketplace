import React, { Component } from 'react';
import TemplateSlider from '../components/TemplateSlider';
import TemplateService from '../services/TemplateService';

class TemplateViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "currentTemplate":""
        }                
    }
    
    componentWillMount(){
        // 0 item should be there , already handled at App Component

        // Set the first item's active flag as true to set active template
        TemplateService.templateList[0].active = true;
        // Get the Current Template to display when the page load
        this.setState({
            "currentTemplate": TemplateService.templateList[0]
        })                   
    }
    /**
     * receiveTemplateFromSlider
     * Selected template will be received from template slider component
     */
    receiveTemplateFromSlider=(template)=>{      
        // Change the state          
        this.setState({"currentTemplate":template}); 
    }
    /**
     * Render Method
     * Display the current template data
     */
    render() {
        return (
            <div>
                <div id="main" role="main">
                    <div id="large">                        
                        <div class="group">
                            <img src={`/assets/images/large/${this.state.currentTemplate.image}`} alt="Large Image" width="430" height="360" />
                            <div class="details">                                                                                   
                                <p><strong>Title</strong> {this.state.currentTemplate.title}</p>
                                <p><strong>Description</strong> {this.state.currentTemplate.description}</p>
                                <p><strong>Cost</strong> ${this.state.currentTemplate.cost}</p>
                                <p><strong>ID #</strong> {this.state.currentTemplate.id}</p>
                                <p><strong>Thumbnail File</strong> {this.state.currentTemplate.thumbnail}</p>
                                <p><strong>Large Image File</strong> {this.state.currentTemplate.image}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <TemplateSlider navigator={this.receiveTemplateFromSlider}/>
            </div>
        );
    }
}

export default TemplateViewer;