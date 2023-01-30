import { ITodo } from './todo';
export const todos: ITodo[] = [
  {
    id: 1,
    name: 'Grocery Shopping',
    description: 'Pick up groceries for the week',
    isUrgent: false,
  },
  {
    id: 2,
    name: "Doctor's Appointment",
    description: 'Check-up with the dentist',
    isUrgent: true,
  },
  {
    id: 3,
    name: 'Meeting with Team',
    description: 'Discuss project progress with team',
    isUrgent: false,
  },
];
