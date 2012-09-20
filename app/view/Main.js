Ext.define("projecttest.view.Main", {
    extend: 'Ext.Panel', 
    xtype:'main',           
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.dataview.List'

    ],

    config: {       
        activeItem: 0,
        id:'mainPanel',
        layout:'card',
        items:[
            {xclass:'projecttest.view.cardone.cardone'},
            {xclass:'projecttest.view.cardtwo.cardtwo'}
        ]
    }
});
