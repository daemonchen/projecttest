Ext.define("projecttest.view.cardone.contentcardimg1", {
    extend: 'Ext.Panel', 
    requires: ['Ext.Panel'],
    //xtype:'cardoneimg',
    config: {       
        title: 'img1',
        iconCls: 'info',
        flex:1,
        scrollable:true,       
        html:'<div style="text-align:center;"><img src="resources/images/c.jpg"/></div>'      
    }
});

