import ProductStore from "./components/ProductStore.vue"
import AddProduct from "./components/AddProduct.vue"
import GenerateBarCode from "./components/GenerateBarCode.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        
        redirect: '/store'
    },
    {
    name: "ProductStore",
    component: ProductStore,
    path: "/store",
},
{
    name: "AddProduct",
    component: AddProduct,
    path: "/add",
},
{
    name: "GenerateBarCode",
    component: GenerateBarCode,
    path: "/code",
},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router