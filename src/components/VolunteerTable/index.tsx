import { Box, Table } from '@mantine/core';
import { VolunteerData } from '../../types/volunteer';
import VolunteerRow from '../VolunteerRow';

interface VolunteerTableProps {
    volunteers: VolunteerData[];
    visibleWeeks: number[];
}

export default function VolunteerTable({ volunteers, visibleWeeks }: VolunteerTableProps) {
    return (
        <Box style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <Table withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>ФИО</Table.Th>
                        {visibleWeeks.map((week) => (
                            <Table.Th key={week} style={{ textAlign: 'center' }}>
                                {week}
                            </Table.Th>
                        ))}
                        <Table.Th style={{ textAlign: 'center' }}>Итого</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {volunteers.map((v) => (
                        <VolunteerRow key={v.name} volunteer={v} visibleWeeks={visibleWeeks} />
                    ))}
                </Table.Tbody>
            </Table>
        </Box>
    );
}
