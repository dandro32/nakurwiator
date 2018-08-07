import { faDumbbell, faAllergies, faChartLine, faPrescriptionBottle, faCogs} from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
  {
    'id': 'trainings',
    'name': 'treningi',
    'href': '/',
    'icon': faDumbbell
  },
  {
    'id': 'exercises',
    'name': 'Ćwiczonka',
    'href': '/exercises',
    'icon': faAllergies
  },
  {
    'id': 'raports',
    'name': 'Raporciki',
    'href': '/raports',
    'icon': faChartLine
  },
  {
    'id': 'extras',
    'name': 'Ekstra',
    'href': '/extras',
    'icon': faPrescriptionBottle
  },
  {
    'id': 'settings',
    'name': 'Ustawienia',
    'href': '/settings',
    'icon': faCogs
  }
];
export default MENU_ITEMS;