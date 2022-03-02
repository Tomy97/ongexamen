import axios from 'axios';
import {onMounted, ref} from 'vue';

const Menu = (): any => {
    const navbar = ref({});
    const campito = ref({})
    const club = ref({})
    const denuncia = ref({})
    const getMenus = async () => {
        const {data} = await axios.get('api/sidebar.json');
        navbar.value = data.navbar;
        campito.value = data.campito;
        club.value = data.club;
        denuncia.value = data.denuncia;
    }
    onMounted(getMenus)
    return {
        navbar,
        campito,
        club,
        denuncia
    }
}
export default Menu