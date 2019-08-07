import PcContainer from "@/pages/pc/PcContainer/PcContainer"
import Channel from "@/pages/pc/module/Channel"
import Example from "@/pages/pc/module/Example"
import Price from "@/pages/pc/module/Price"
import About from "@/pages/pc/module/About"
import Home from "@/pages/pc/module/Home"
import Login from "@/pages/pc/module/Login"
import NotFound from "@/pages/pc/error/NotFound"
import Product from "@/pages/pc/module/Product"
import Join from "@/pages/pc/module/Join"
const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home,
        exact: true,
        // routes: [
        //     {
        //         path: "/",
        //         name: 'Home',
        //         component: Home,
        //         exact: true,
        //     },
        //     {
        //         path: "/about",
        //         name: 'About',
        //         component: About,
        //         exact: true,

        //     }, {
        //         path: '/example',
        //         name: 'Example',
        //         component: Example,
        //         exact: true,
        //     }, {
        //         path: '/price',
        //         name: 'Price',
        //         component: Price,
        //         exact: true,
        //     }, {
        //         path: '/channel',
        //         name: 'Channel',
        //         component: Channel,
        //         exact: true,
        //     }, {
        //         path: '/product',
        //         name: 'Product',
        //         component: Product,
        //         exact: true,
        //     },{
        //         path: '*',
        //         component: NotFound,
        //     }
        // ]
    },{
        path: '/join',
        name: 'Join',
        component: Join,
    },{
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes;