import Trainings from '../components/trainings/Trainings';
import Exercises from '../components/exercises/Exercises';
import Raports from '../components/raports/Raports';
import Extras from '../components/extras/Extras';
import Settings from '../components/settings/Settings';

const ROUTES = [
  {
    path: '/trainings',
    component: Trainings
  },
  {
    path: '/exercises',
    component: Exercises
  },
  {
    path: '/raports',
    component: Raports
  },
  {
    path: '/extras',
    component: Extras
  },
  {
    path: '/settings',
    component: Settings
  },
];

export default ROUTES;