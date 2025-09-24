import * as React from "react";
import { DataGrid, GridColDef, GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DataType } from "../pedido";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "estado", headerName: "Estado", width: 130, renderCell: (params) => (params.value ? "Valido" : "Pendiente"), },
  { field: "descripción", headerName: "Descripción", width: 200 },
  { field: "importe", headerName: "Importe", type: "number", width: 90 },
];

interface Props {
  dataRows: DataType [];
  selectionModel: GridRowSelectionModel;
  setSelectionModel: (newModel: GridRowSelectionModel) => void;
  cambiarEstado: (estado: boolean) => void
}

export default function DataTable({ dataRows, selectionModel, setSelectionModel, cambiarEstado }: Props) {

  const [paginationModel, setPaginationModel] = React.useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });


  return (
    <Paper sx={{padding: "1rem" }}>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => cambiarEstado(true)}
          disabled={selectionModel.ids.size === 0}
        >
          Cambiar a Valido
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => cambiarEstado(false)}
          disabled={selectionModel.ids.size === 0}
        >
          Cambiar a Pendiente
        </Button>
      </Stack>

      <DataGrid
        rows={dataRows}
        columns={columns}
        checkboxSelection
        disableRowSelectionExcludeModel
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newModel) => {
          setSelectionModel(newModel as GridRowSelectionModel);
        }}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => {
          setPaginationModel(newModel);
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Paper>
  );
}