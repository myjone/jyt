import Channel from "@/components/pc/pages/Channel"
import Example from "@/components/pc/pages/Example"
import Price from "@/components/pc/pages/price"
import About from "@/components/pc/pages/About"

const  routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
    },{
        path:'/about',
        name:'About',
        component:About,
    },{
        path:'/example',
        name:'Example',
        component:Example
    },{
        path:'/price',
        name:'Price',
        component:Price
    }
]

export default routes;