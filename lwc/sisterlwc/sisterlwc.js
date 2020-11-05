import { LightningElement, api } from 'lwc';

export default class Sisterlwc extends LightningElement {

    @api beAnnoying(){
        alert("HELLOOOOOO - From the SISTER LWC JS FILE!")
    }
}