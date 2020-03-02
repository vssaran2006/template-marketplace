import React from 'react';
import TemplateMarketPlace from './TemplateMarketPlace';
import renderer from 'react-test-renderer'
import TemplateService from '../../services/TemplateService';


describe("Template Market Place Spec",()=>{
    test("Should Component Exists", ()=>{
        const component = renderer.create(<TemplateMarketPlace/>).getInstance();        
        expect(component).toBeTruthy();
    });
    test("Should call service gettemplate() method", ()=>{
        const component = renderer.create(<TemplateMarketPlace/>).getInstance();        
        const spy = jest.spyOn(TemplateService, 'getTemplates');        
        component.initApp();
        expect(spy).toHaveBeenCalled();        
    });    
})

