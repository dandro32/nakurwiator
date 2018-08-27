import Trainings from '../components/trainings/Trainings';
import Exercises from '../components/exercises/Exercises';
import Raports from '../components/raports/Raports';
import Extras from '../components/extras/Extras';
import Settings from '../components/settings/Settings';
import TrainingsListContainer from '../components/trainings/trainings-list/Trainings-list-container';
import TrainingNewContainer from '../components/trainings/training/Training-new-container';

const ROUTES = [
  {
    path: '/trainings',
    exact: true,
    component: Trainings,
  },
  {
    path: '/trainings/list',
    component: TrainingsListContainer
  },
  {
    path: '/trainings/new',
    component: TrainingNewContainer
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