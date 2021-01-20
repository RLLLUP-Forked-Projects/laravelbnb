import VueRouter from "vue-router";
import Example2 from "./components/Example2.vue";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/second",
        component: Example2,
        name: "second",
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
