import { initTabs } from './tabs.js';
import { initAccordion } from './accordion.js';
import { showHeaderFixed } from './showHeaderFixed.js';

document.addEventListener("DOMContentLoaded", function(){
    initTabs();
    initAccordion();
    showHeaderFixed();
});