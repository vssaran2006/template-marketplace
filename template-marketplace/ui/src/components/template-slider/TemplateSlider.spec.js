import React from 'react';
import TemplateSlider from './TemplateSlider';
import renderer from 'react-test-renderer'
import TemplateService from '../../services/TemplateService';
let component;

beforeEach(() => {
    TemplateService.templateList = [{"title":"Business Site Template - 7111","cost":"45.00","id":"7111","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis","thumbnail":"7111-m.jpg","image":"7111-b.jpg"},{"title":"Business Site Template - 7112","cost":"55.00","id":"7112","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7112-m.jpg","image":"7112-b.jpg"},{"title":"Business Site Template - 7118","cost":"65.00","id":"7118","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis","thumbnail":"7118-m.jpg","image":"7118-b.jpg"},{"title":"Business Site Template - 7124","cost":"55.00","id":"7124","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7124-m.jpg","image":"7124-b.jpg"},{"title":"Business Site Template - 7130","cost":"45.00","id":"7130","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis","thumbnail":"7130-m.jpg","image":"7130-b.jpg"},{"title":"Business Site Template - 7131","cost":"55.00","id":"7131","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7131-m.jpg","image":"7131-b.jpg"},{"title":"Business Site Template - 7141","cost":"65.00","id":"7141","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis","thumbnail":"7141-m.jpg","image":"7141-b.jpg"},{"title":"Business Site Template - 7143","cost":"35.00","id":"7143","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7143-m.jpg","image":"7143-b.jpg"},{"title":"Business Site Template - 7147","cost":"47.00","id":"7147","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.","thumbnail":"7147-m.jpg","image":"7147-b.jpg"},{"title":"Business Site Template - 7150","cost":"53.00","id":"7150","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7150-m.jpg","image":"7150-b.jpg"},{"title":"Business Site Template - 7152","cost":"62.00","id":"7152","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.","thumbnail":"7152-m.jpg","image":"7152-b.jpg"},{"title":"Business Site Template - 7155","cost":"60.00","id":"7155","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7155-m.jpg","image":"7155-b.jpg"},{"title":"Business Site Template - 7160","cost":"47.00","id":"7160","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.","thumbnail":"7160-m.jpg","image":"7160-b.jpg"},{"title":"Business Site Template - 7162","cost":"42.00","id":"7162","description":"Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.","thumbnail":"7162-m.jpg","image":"7162-b.jpg"},{"title":"Business Site Template - 7164","cost":"67.00","id":"7164","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.","thumbnail":"7164-m.jpg","image":"7164-b.jpg"}]
     component = renderer.create(<TemplateSlider/>).getInstance();   
  });
describe("Template Slider Spec",()=>{
    test("Should Component Exists", ()=>{                             
        expect(component).toBeTruthy();        
    });
    test("Should Component Exists", ()=>{        
        const component = renderer.create(<TemplateSlider/>).getInstance();                
        expect(component.state.currentPageTemplates.length).toEqual(4);        
    });  
    test("Should Have all initial params", ()=>{        
        const component = renderer.create(<TemplateSlider/>).getInstance();                        
        expect(component.currentPage).toEqual(1);
        expect(component.noOfItemsPerPage).toEqual(4);
        expect(component.allTemplateList.length).toEqual(15);         
    });  
    test("Should Have all initial state variables", ()=>{                                     
        expect(component.state.nextButtonEnabled).toBe(true);    
        expect(component.state.previousButtonEnabled).toBe(false);        
    });     
    test("Make Sure Move Next Navigations works fine",()=>{
        component.currentPage =1;
        component.moveNext();
        expect(component.currentPage).toEqual(2);
        expect(component.state.nextButtonEnabled).toEqual(true);
        expect(component.state.previousButtonEnabled).toEqual(true);
    });  
    test("Make Sure Move Back Navigations works fine",()=>{
        component.currentPage =0;
        component.movePrevious();
        expect(component.state.previousButtonEnabled).toEqual(false);
        expect(component.state.nextButtonEnabled).toEqual(true);
    }); 
    test("Make Sure set the active template",()=>{        
        component.props= {navigator: function(){}}
        let item = {"title":"Business Site Template - 7111","cost":"45.00","id":"7111","description":"Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis","thumbnail":"7111-m.jpg","image":"7111-b.jpg"}
        component.selectTemplate(item);        
        expect(item.active).toEqual(true);
        expect(component.allTemplateList.length).toEqual(15);        
    });               
})

