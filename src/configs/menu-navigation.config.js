import { faDumbbell, faAllergies, faChartLine, faPrescriptionBottle, faCogs} from '@fortawesome/free-solid-svg-icons';

const MENU_ITEMS = [
  {
    'id': 'trainings',
    'name': 'Treningi',
    'href': '/trainings',
    'icon': faDumbbell
  },
  {
    'id': 'exercises',
    'name': 'Atlas ćwiczeń',
    'href': '/exercises',
    'icon': faAllergies
  },
  {
    'id': 'raports',
    'name': 'Pompy raporty',
    'href': '/raports',
    'icon': faChartLine
  },
  {
    'id': 'extras',
    'name': 'Masóweczki',
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