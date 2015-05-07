Ext.application({
    name: 'Sencha',

    launch: function() {

        Ext.create('Ext.data.TreeStore', {
            storeId: 'TreeStore',
            fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                name: 'leaf',
                defaultValue: true
            }],
            root: {
                leaf: false
            },
            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });        
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '',
                        'This application has just successfully been updated to the latest version. Reload now?',
                        "This application has just successfully been updated to the latest version. Reload now? ",
                        "to use tabs, lists, and forms to create a simple app.",
                        'Sencha Touch'
                    ].join("")
               },
                {
                    xtype: 'nestedlist',
                    //title: 'Impressum',
                    iconCls: 'star',
                    //displayField: 'title',

                    store: 'TreeStore',

                    detailCard: {
                        xtype: 'panel',
                        //scrollable: true,
                        //styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },
                // this is the new item
                {
                    title: 'Impressum',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: '(email address is optional)',
                            height: 285,
                            items: [  {
                                    xtype: 'textfield',
                                    label: 'Name  Inter mounegnit'
                                },
 {
                                    xtype: 'textfield',
                                    label: 'Telefonnummer  496258965245'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email         musterperrez@yahoo.fr'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Impressum',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
            ]
        });
    }
});




