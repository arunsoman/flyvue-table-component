import FlyTableComponent from './components/TableComponent';
import FlyTableColumn from './components/TableColumn';
import FlyPagination from './components/Pagination';
import { mergeSettings } from './settings';

export default {
    install(Vue, options = {}) {
        mergeSettings(options);

        Vue.component('flytable-component', TableComponent);
        Vue.component('flytable-column', TableColumn);
        Vue.component('flypagination', Pagination);
    },

    settings(settings) {
        mergeSettings(settings);
    },
};

export { FlyTableComponent, FlyTableColumn };
