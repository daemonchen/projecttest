Ext.define("projecttest.view.cardone.subtab", {
    extend: 'Ext.Toolbar',
    config: {
            docked: 'top',
            xtype: 'toolbar',
            layout:'hbox',
            //style:'text-align:center;line-height:50px;color:#999;height:50px;',
            items:[
                {
                    xclass:'projecttest.view.cardone.subtabbtnone'
                },
                {
                    xclass:'projecttest.view.cardone.subtabbtntwo'
                },
                {
                    xclass:'projecttest.view.cardone.subtabbtnthree'
                }
            ]   
    }
});

