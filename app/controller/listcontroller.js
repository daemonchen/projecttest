Ext.define('projecttest.model.detailmodel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['title', 'link', 'description','language','pubDate','lastBuildDate','ttl']
    }
});
Ext.define('projecttest.controller.listcontroller', {
    extend: 'Ext.app.Controller',
    requires:['Ext.data.reader.Xml','projecttest.store.detailstore'],
    config: {
        refs: {
            mainlistview:'#mainlistview',
            backbtn:'#backbtn'
        },
        control: {
            mainlistview:{
                itemtap:function(list,index,item,e,o){
                    var detailstore = Ext.create('Ext.data.Store', {
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
                    });
                    var detailCmp=Ext.ComponentQuery.query('#maincontent');
                    var mainbody= Ext.ComponentQuery.query('main');
                    var index=index;
                   /* var curstore=Ext.create('projecttest.store.detailstore', {
                        autoLoad: true
                    });*/
                    //console.log(curstore.getAt(0));
                    detailstore.load(function(record,operation,success){
                        var targetHtml=record[index]['data']['description'];
                        detailCmp[0].setHtml(targetHtml);
                    },this);
                    mainbody[0].animateActiveItem(1,{type:'slide',direction:'left'});
                }
            },
            backbtn:{
                tap:function(){
                    var mainbody= Ext.ComponentQuery.query('main');
                    mainbody[0].animateActiveItem(0,{type:'slide',direction:'right'});
                }
            }
        }
    },
    launch: function(app) {
        store.load(function(a,b,c){
            console.log(a[0].get('firstName'));
        },this);
    }
});