Ext.define("projecttest.view.cardone.listview", {
    extend: 'Ext.Panel', 
    requires: ['Ext.Panel'],
    config: {
        title: 'list',
        iconCls: 'star',
        layout:'fit',       
        items: [
            {
                xclass:'projecttest.view.cardone.topbar'             
            },
            /*{
                xclass:'projecttest.view.cardone.subtab'
            },*/
            {
                xclass:'projecttest.view.cardone.contentcard'
            }
                      
        ]       
    }
});

