Ext.define("projecttest.view.cardone.list", {
    extend: 'Ext.List', 
    requires: ['Ext.List'],
   
    config: { 
        xtype:'list',
        id:'mainlistview',
        itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
        store:store,       
        indexBar: true,              
        styleHtmlContent:true,
        scrollable:false,
        //flex:1,
        style:'background:#e9e9e9'
       

    }
});

