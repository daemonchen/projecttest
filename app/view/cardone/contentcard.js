Ext.define("projecttest.view.cardone.contentcard", {
    extend: 'Ext.tab.Panel', 
    requires: ['Ext.Panel'],
    xtype:'contentcard',
    config: {        
        activeItem:0,
        id:'contentcard',        
        flex:1,
        tabBarPosition: 'top',
        items:[
        	{
        		xclass: 'projecttest.view.cardone.list'
        	},
        	{
        		 xclass:'projecttest.view.cardone.contentcardimg1'
        	},
        	{
        		 xclass:'projecttest.view.cardone.contentcardimg2'
        	}
        ]      
    }
});

