import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext, publish } from 'lightning/messageService';
import lmsMessageChannelExample from "@salesforce/messageChannel/lwcExample__c";

export default class Parentlwc extends LightningElement {

    @track childMessage;
    @track valueforchild;

    handleMessage(event){
        this.childMessage = event.detail;
    }

    handleChangeParent(event){
        this.valueforchild = event.detail.value;
    }

    annoy() {
        //firing an child method
        this.template.querySelector("c-sisterlwc").beAnnoying();
    }




    context = createMessageContext();
     
    publishLMS() {
        const message = {
            messageToSend: "This is send from the parent LWC at - " + Date.now(),
            sourceSystem: { value: "Parent LWC" }
        };
        publish(this.context, lmsMessageChannelExample, message);
    }
     
    disconnectedCallback() {
        releaseMessageContext(this.context);
    }
}