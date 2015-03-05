({
    block: 'page',
    title: 'Hello, World!',
    styles: [
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo', },
                    content: 'Social Services Search Robot'
                },
                {
                    block: 'form',
                    mix: { block: 'header', elem: 'form' },
                    tag: 'form',
                    js: true,
                    content: [
                        {
                            elem: 'search'
                        }
                    ]
                }
            ],
        },
        {
            block: 'content',
            content: [
            {
    block : 'icon',
    mods : { social : 'twitter' }
},
                {
                    block: 'island',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    block: 'user',
                                    content: [
                                        {
                                            block: 'link',
                                            mix: { block: 'user', elem: 'name' },
                                            url: 'https://twitter.com/tadatuta',
                                            content: 'Владимир Гриненко @tadatuta'
                                        },
                                        {
                                            elem: 'post-time',
                                            content: '18 hours ago'
                                        },
                                        {
                                            block: 'image',
                                            mix: { block: 'user', elem: 'icon' },
                                            url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                                            alt: 'Владимир Гриненко'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: 'Твит про БЭМ #b_'
                        },
                        {
                            elem: 'footer',
                            content: 
                                [
                                    {
                                        block: 'service',
                                        mods: { type: 'twitter'}
                                    }
                                ]
                        }
                    ]
                }
            ]
        },
    ]
});
