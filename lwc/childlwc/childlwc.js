import { LightningElement, api, track } from 'lwc';

export default class Childlwc extends LightningElement {

    @track childMessage;
    @api parentvalue;

    handleClick(){
        // Creates the event with the message data.
        const messageEvent = new CustomEvent('message', { detail: this.childMessage });

        // Dispatches the event.
        this.dispatchEvent(messageEvent);
    }
    handleChangeChild(event){
        this.childMessage = event.detail.value;
    }
}