Ext.define("projecttest.view.cardone.contentcardimg2", {
    extend: 'Ext.Panel', 
    requires: ['Ext.Panel'],
    //xtype:'cardoneimg',
    config: {
        title: 'img2',
        iconCls: 'bookmarks',         
        flex:1,  
        scrollable:true,        
        html:'<div style="text-align:center;"><img src="resources/images/e.jpg"/></div>'       
    }
});

