import { createRouter, createWebHistory } from "vue-router";
import PortafolioLayout from '@/modules/portafolio/layout/PortafolioLayout.vue';
import InicioView from '@/modules/portafolio/views/InicioView.vue';
import TecnologiasView from '@/modules/portafolio/views/TecnologiasView.vue';
import ProyectosView from '@/modules/portafolio/views/ProyectosView.vue';
import ServiciosContactoView from '@/modules/portafolio/views/ServiciosContactoView.vue';

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    // linkExactActiveClass: 'clase-activa',
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
            path:'/servicios_y_contacto',
            name:'servicios_y_contacto',
            component:ServiciosContactoView
        }
       ]
    }]
});

export default router;
