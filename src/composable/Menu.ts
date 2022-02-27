
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { MenuI } from './../Interface/MenuI';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Menu = () => {
  const menu = ref<MenuI[]>([])

  const getMenus = async () => {
    const { data } = await axios.get('api/sidebar.json');
    menu.value = data;
  }

  onMounted(getMenus)
  return {
    menu
  }
}
export default Menu