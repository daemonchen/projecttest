Ext.define('projecttest.model.Listmodel', {
    extend: 'Ext.data.Model',
    xtype:'listmodel',
    config: {
        fields: ['firstName', 'lastName']
    }
});
Ext.define('projecttest.store.liststore', {
    requires:['projecttest.model.Listmodel'],
    extend: 'Ext.data.Store',
    xtype:'liststore',
    config:{
      // autoLoad: true,
      model: 'projecttest.model.Listmodel',
      proxy:{
        type:'ajax',
        url :'app/data/contacts.json',
       /* reader:{
          type:'xml',
          rootPorperty:'channel'
        }*/
      }
    }
    
    
});
var store = Ext.create('projecttest.store.liststore', {  
});
