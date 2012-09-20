Ext.define("projecttest.view.cardone.list", {
    extend: 'Ext.List', 
    requires: ['Ext.List'],
   
    config: {       
        xtype:'list',
        title: 'list',
        iconCls: 'star',
        id:'mainlistview',
        itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
        store:store,       
        indexBar: false,              
        styleHtmlContent:true,
        scrollable:true,
        flex:1,
        style:'background:#e9e9e9'
       

    }
});

