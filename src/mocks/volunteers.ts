import { VolunteerData } from '../types/volunteer.ts';

export const mockVolunteers: VolunteerData[] = [
    {
        name: 'Иванов Иван',
        weeklyHours: [10, 10, 10, 10, 10, 10, 10, 10, 8, 10],
        target: 100,
    },
    {
        name: 'Цыпко Михаил',
        weeklyHours: [null, null, null, 10, 2, 1, 3, 10, 7, 0],
        target: 70,
    },
    {
        name: 'Лосева Юлия',
        weeklyHours: [10, 10, 10, 10, 0, 0, 0, 0, 0, 0],
        target: 100,
    },
    {
        name: 'Гришко Максим',
        weeklyHours: [4, 5, 6, 0, 0, 0, 0, 0, 0, 0],
        target: 100,
    },
];
