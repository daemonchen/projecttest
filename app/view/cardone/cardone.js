Ext.define("projecttest.view.cardone.cardone", {
    extend: 'Ext.tab.Panel', 
    requires: ['Ext.Panel'],
    xtype:'detail_20120917',
    config: {        
        tabBarPosition: 'bottom',            
        items: [
            {
                xclass:'projecttest.view.cardone.listview'           
            },
            {
                xclass:'projecttest.view.cardone.img'
            }
                      
        ]       
    }
});

