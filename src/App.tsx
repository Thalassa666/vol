import { Box, MantineProvider, TextInput, Group, Pagination } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import { useState } from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { mockVolunteers } from './mocks/volunteers';
import { useWeeksInYear } from './hooks/useWeeksInYear';
import VolunteerTable from './components/VolunteerTable';

export default function App() {
    const [search, setSearch] = useState('');
    const [value, setValue] = useState<Date | null>(new Date());
    const [weekPage, setWeekPage] = useState(1);

    const selectedYear = value?.getFullYear() ?? new Date().getFullYear();
    const totalWeeks = useWeeksInYear(selectedYear);
    const weeksPerPage = 10;
    const totalWeekPages = Math.ceil(totalWeeks / weeksPerPage);

    const getWeekRange = () => {
        const start = (weekPage - 1) * weeksPerPage + 1;
        return Array.from({ length: weeksPerPage }, (_, i) => start + i).filter((w) => w <= totalWeeks);
    };

    const visibleWeeks = getWeekRange();
    const filtered = mockVolunteers.filter((v) => v.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <MantineProvider defaultColorScheme="light">
            <Box px="xl" py="lg">
                <Group justify="space-between" mb="md">
                    <YearPickerInput
                        label="Год"
                        placeholder="Выбери год"
                        value={value}
                        onChange={(val) => {
                            setValue(val);
                            setWeekPage(1);
                        }}
                    />
                    <TextInput
                        placeholder="Поиск по имени"
                        value={search}
                        onChange={(e) => setSearch(e.currentTarget.value)}
                        w={250}
                    />
                </Group>

                <VolunteerTable volunteers={filtered} visibleWeeks={visibleWeeks} />

                <Group justify="center" mt="md">
                    <Pagination total={totalWeekPages} value={weekPage} onChange={setWeekPage} />
                </Group>
            </Box>
        </MantineProvider>
    );
}
