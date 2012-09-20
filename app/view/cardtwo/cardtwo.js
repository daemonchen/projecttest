Ext.define("projecttest.view.cardtwo.cardtwo", {
    extend: 'Ext.Panel', 
    requires: ['Ext.Panel'],
    xtype:'cardtwo',
    config: { 
        title: 'detailin20120918',
        iconCls: 'info',
        id:'cardtwo',
        layout:'vbox',
        items:[
        	{
        		xclass:'projecttest.view.cardtwo.topbar'
        	},
        	{
        		xclass:'projecttest.view.cardtwo.maincontent'
        	},
        	{
        		xclass:'projecttest.view.cardtwo.bottombar'
        	}
        ]
    }
});

