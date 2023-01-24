const defaultMenu = [
    {
        key:'home',
        breadcrumbs: true,
        path:'/',
        isDisabled: false,
        isPrivate: false,
        label:'Home',
        submenu: []
    },
    {
        key:'about',
        breadcrumbs: true,
        path:'/about',
        isDisabled: false,
        isPrivate: false,
        label:'About',
        submenu: []
    },

]


export const ConfigMenu = [
    ...defaultMenu
]