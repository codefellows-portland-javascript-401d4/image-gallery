routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'widget',
        url: '/widget',
        component: 'widget'
    });

    $stateProvider.state({
        name: 'images',
        url: '/images',
        abstract: true,
        default: '.description',
        resolve: {
            images: ['imageService', images => {
                return images.get();
            }]
        },
        component: 'images'
    });

    $stateProvider.state({
        name: 'images.description',
        url:'/description',
        component: 'imageDescription'
    });

    $stateProvider.state({
        name:'images.thumbnail',
        url: '/thumbnail',
        component: 'imageThumbnail'
    });

    $stateProvider.state({
        name:'images.full',
        url: '/full',
        component: 'imageFull'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'about.english',
        url: '/eng',
        views: {
            header: {
                component: 'aboutEnglishHead'
            },
            main: {
                component: 'aboutEnglishMain'
            }
        }
    });

    $stateProvider.state({
        name: 'about.chinese',
        url: '/chi',
        views: {
            header: {
                component: 'aboutChineseHead'
            },
            main: {
                component: 'aboutChineseMain'
            }
        }
    });

    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        component: 'albums'
    });

    $stateProvider.state({
        name: 'album',
        url: '/albums/:id',
        abstract: true,
        default: '.description',
        resolve: {
            album: ['albumService', '$transition$', (albums, t) => {
                return albums.get(t.params().id);
            }],
            images: ['album', album => album.images]
        },
        component: 'album'
    });

    $stateProvider.state({
        name: 'album.description',
        url:'/description',
        component: 'imageDescription'
    });

    $stateProvider.state({
        name:'album.thumbnail',
        url: '/thumbnail',
        component: 'imageThumbnail'
    });

    $stateProvider.state({
        name:'album.full',
        url: '/full',
        component: 'imageFull'
    });

    $urlRouterProvider.otherwise('/');
}