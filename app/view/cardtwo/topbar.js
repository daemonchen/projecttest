Ext.define("projecttest.view.cardtwo.topbar", {
    extend: 'Ext.Toolbar',
    config: {
         	xtype : 'toolbar',
            docked: 'top',
            title: 'My Toolbar Bottom',
            items:[
            		{ ui: 'back', text: 'Back',id:'backbtn'},
                   
            ]
            }
});

