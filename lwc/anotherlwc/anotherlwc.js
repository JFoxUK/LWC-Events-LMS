import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import lmsMessageChannelExample from "@salesforce/messageChannel/lwcExample__c";

export default class Anotherlwc extends LightningElement {

    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
   
    subscribeLMS() {
       if (this.subscription) {
           return;
       }
       this.subscription = subscribe(this.context, lmsMessageChannelExample, (message) => {
           this.handleMessage(message);
       });
    }
   
    unsubscribeLMS() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
 
    handleMessage(message) {
        this.receivedMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
    }
 
    disconnectedCallback() {
        releaseMessageContext(this.context);
    }

    clearMessage(){
        this.receivedMessage = '';
    }

}