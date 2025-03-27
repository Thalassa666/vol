import { Table } from '@mantine/core';
import { VolunteerData } from '../../types/volunteer';

interface VolunteerRowProps {
    volunteer: VolunteerData;
    visibleWeeks: number[];
}

const getCellColor = (value: number | null | undefined) => {
    if (value === undefined || value === null) return 'transparent';
    if (value === 0) return '#ffcccc';
    if (value < 10) return '#fff3bf';
    return 'transparent';
};

const getCellContent = (value: number | null | undefined) => {
    if (value === undefined || value === null) return '';
    if (value === 0) return '—';
    return value;
};

export default function VolunteerRow({ volunteer, visibleWeeks }: VolunteerRowProps) {
    const sum = volunteer.weeklyHours.reduce(
        (acc: number, val: number | null | undefined) => acc + (val ?? 0),
        0
    );

    return (
        <Table.Tr>
            <Table.Td>
                {volunteer.name}
            </Table.Td>
            {visibleWeeks.map((week) => {
                const hours = volunteer.weeklyHours[week - 1];
                return (
                    <Table.Td
                        key={week}
                        style={{
                            backgroundColor: getCellColor(hours),
                            textAlign: 'center',
                        }}
                    >
                        {getCellContent(hours)}
                    </Table.Td>
                );
            })}
            <Table.Td style={{ textAlign: 'center' }}>
                {sum} / {volunteer.target}
            </Table.Td>
        </Table.Tr>
    );
}
