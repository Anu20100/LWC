import { LightningElement } from 'lwc';

export default class HelloWorldComponent extends LightningElement {

    name = 'World';
    changeHandler(event){
        this.name = event.target.value;
    }
}