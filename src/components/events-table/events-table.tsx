import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Link,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { EventsTableProps } from "./events-table.interface";
import { TABLE_HEADERS } from "./events-table.const";

const EventsTable: FC<EventsTableProps> = ({ events }) => {
  const { t } = useTranslation();

  const handleOnEdit = () => console.log("Edit");
  const handleOnDelete = () => console.log("Delete");

  return (
    <Table>
      <TableHead>
        <TableRow>
          {TABLE_HEADERS.map((header, idx) => (
            <TableCell
              key={`TABLE_HEADER_${idx}`}
              align={idx === 0 ? "left" : "right"}
            >
              {t(header)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell component="th" scope="row">
              <Link component={RouterLink} to={`/events/${event.id}`}>
                {event.name}
              </Link>
            </TableCell>
            <TableCell align="right">
              {event.startDate.toLocaleDateString()}
            </TableCell>
            <TableCell align="right">
              {event.endDate.toLocaleDateString()}
            </TableCell>
            <TableCell align="right">
              <IconButton onClick={handleOnEdit}>
                <Edit />
              </IconButton>
              <IconButton onClick={handleOnDelete}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventsTable;
