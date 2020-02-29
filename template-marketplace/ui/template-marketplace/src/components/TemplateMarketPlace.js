import React, { Component } from 'react';
import TemplateViewer from './TemplateViewer';
import TemplateService from '../services/TemplateService';

class TemplateMarketPlace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "LOAD_STATUS":"IN_PROGRESS"
    }
    this.initApp();
  }
  
  /**
   * initApp
   */
  initApp(){    
    TemplateService.getTemplates().then(()=>{
      // Promise success - if we have valid array set as success
      let loadStatus = "";
      loadStatus = TemplateService.templateList && TemplateService.templateList.length >0 ? "SUCCESS" : "FAILURE";
      this.setState({
        "LOAD_STATUS":loadStatus
      })
    },()=>{
      // Promise Rejection - API Failure - show message in the page
      this.setState({
        "LOAD_STATUS":"FAILURE"
      })
    })
  }

  /**
   * React render
   */
  render() {
    return (
      <div id="container">
          <header>
            Template MarketPlace
          </header>
          {/* Handle Error scenario and Success and Loader until API done */}
           {this.state.LOAD_STATUS == "SUCCESS" ? <TemplateViewer/> : (this.state.LOAD_STATUS == "IN_PROGRESS") ? "Loading" : "Sorry, Please try after sometime"}
          <footer>
          <a href="instructions.pdf">Download PDF Instructions</a>
          </footer>
      </div>
    );
  }
}

export default TemplateMarketPlace;