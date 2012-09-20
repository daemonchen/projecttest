Ext.define("projecttest.view.cardtwo.bottombar", {
    extend: 'Ext.Toolbar',
    config: {
       		xtype : 'toolbar',
            docked: 'bottom',
            layout:'hbox',
           items:[
           		{
           			xtype:'toolbar',
           			flex:1,
                items:[
                  {
                    xtype:'button',
                    text:'bar-bottom',
                    centered:true
                  }
                ]
			        
           		},
           		{
                xtype:'toolbar',
                flex:1,
                items:[
                  {
                    xtype:'button',
                    text:'bar-bottom',
                    centered:true
                  }
                ]
              
              },
           		{
                xtype:'toolbar',
                flex:1,
                items:[
                  {
                    xtype:'button',
                    text:'bar-bottom',
                    centered:true
                  }
                ]
              
              },
           		{
                xtype:'toolbar',
                flex:1,
                items:[
                  {
                    xtype:'button',
                    text:'bar-bottom',
                    centered:true
                  }
                ]
              
              },
           		{
                xtype:'toolbar',
                flex:1,
                items:[
                  {
                    xtype:'button',
                    text:'bar-bottom',
                    centered:true
                  }
                ]
              
              }
           ]
            }
});

