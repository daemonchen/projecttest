Ext.define("projecttest.view.cardone.contentwrapper", {
    extend: 'Ext.Panel',
    config: { 
            layout:'vbox',
            items:[
                 {
                     xclass:'projecttest.view.cardone.contentcard'
                 }
           ]
    }
});

