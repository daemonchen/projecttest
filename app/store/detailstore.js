Ext.define('projecttest.model.detailmodel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['title', 'link', 'description','language','pubDate','lastBuildDate','ttl']
    }
});
Ext.define('projecttest.store.detailstore', {
    requires:['projecttest.model.Listmodel'],
    extend: 'Ext.data.Store',
    xtype:'detailmodel',
    config:{
      // autoLoad: true,
      model: 'projecttest.model.detailmodel',
      proxy: {
        type: 'ajax',
        url : 'app/data/rss.xml',
        reader: {
            type: 'xml',
            record: 'item',
            rootProperty:'channel'
        }
      }
    }
    
    
});