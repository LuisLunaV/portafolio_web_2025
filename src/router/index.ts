import { createRouter, createWebHistory } from "vue-router";
import PortafolioLayout from '@/modules/portafolio/layout/PortafolioLayout.vue';
import InicioView from '@/modules/portafolio/views/InicioView.vue';
import TecnologiasView from '@/modules/portafolio/views/TecnologiasView.vue';
import ProyectosView from '@/modules/portafolio/views/ProyectosView.vue';
import MisServiciosView from '@/modules/portafolio/views/MisServiciosView.vue';
import ContactoView from '@/modules/portafolio/views/ContactoView.vue';

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes:[{
        path:'/',
        name:'portafolio',
        redirect:{name:'inicio'},
        component:PortafolioLayout,
        children:[{
            path:'/inicio',
            name:'inicio',
            component:InicioView
        },{
            path:'/tecnologias',
            name:'tecnologias',
            component:TecnologiasView
        },{
            path:'/proyectos',
            name:'proyectos',
            component:ProyectosView
        },{
            path:'/mis_servicios',
            name:'mis_servicios',
            component:MisServiciosView
        },{
            path:'/contacto',
            name:'contacto',
            component:ContactoView
        }
       ]
    }]
});

export default router;
