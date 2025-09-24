import DataTable from "./components/detalle-pedido";
import { HeaderPedido } from "./components/header-pedido";
import * as React from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";

export interface PedidoType {
  id: number;
  numero: number;
  proveedor: string;
  fecha: Date;
  importeTotal: number;
  estado: number;
}
const mockPedido: PedidoType = {
  id: 1,
  numero: 12,
  proveedor: "TrendBike",
  fecha: new Date("2022-12-24"),
  importeTotal: 0,
  estado: 0,
};

export interface DataType {
  id: number;
  estado: boolean;
  descripción: string;
  importe: number;
}

const dataRows: DataType[] = [
  {
    id: 1,
    estado: false,
    descripción: "Reactivos maquinaria",
    importe: 2345,
  },
  { id: 2, estado: false, descripción: "Recambios impresión", importe: 135 },
  {
    id: 3,
    estado: false,
    descripción: "Soportes plataforma",
    importe: 540,
  },
  {
    id: 4,
    estado: false,
    descripción: "Reactivos maquina",
    importe: 1600,
  },
  {
    id: 5,
    estado: false,
    descripción: "Reactivos maquinaria",
    importe: 300,
  },
  {
    id: 6,
    estado: false,
    descripción: "Reactivos maquinaria",
    importe: 150,
  },
  {
    id: 7,
    estado: false,
    descripción: "Reactivos maquinaria",
    importe: 44,
  },
  { id: 8, estado: false, descripción: "Reactivos maquinaria", importe: 36 },
  {
    id: 9,
    estado: false,
    descripción: "Reactivos maquinaria",
    importe: 65,
  },
];

export const Pedido = () => {
  const [rows, setRows] = React.useState(dataRows);
  const [pedido, setPedido] = React.useState(mockPedido);
  const [selectionModel, setSelectionModel] =
    React.useState<GridRowSelectionModel>({
      type: "include",
      ids: new Set(),
    });

    const calcularPorcentajeValido = (filas: DataType[]): number => {
  if (filas.length === 0) return 0; 
  const totalFilas = filas.length;
  const filasValidas = filas.filter((row) => row.estado).length;
  return Math.round((filasValidas / totalFilas) * 100);
};


    const cambiarEstado = (nuevoEstado: boolean) => {
  const nuevasFilas = rows.map((row) => {
    if (selectionModel.type === "include" && selectionModel.ids.has(row.id)) {
      return { ...row, estado: nuevoEstado };
    }
    return row;
  });

  setRows(nuevasFilas);

  const nuevoImporteTotal = nuevasFilas
    .filter((row) => row.estado)
    .reduce((acc, row) => acc + row.importe, 0);

  const porcentajeValido = calcularPorcentajeValido(nuevasFilas);

  setPedido((prev) => ({
    ...prev,
    importeTotal: nuevoImporteTotal,
    estado: porcentajeValido,
  }));

  setSelectionModel({ type: "include", ids: new Set() });
};

  return (
    <>
      <header>
        <h1>Pedido a proveedor</h1>
        <HeaderPedido props={pedido} />
      </header>
      <main>
        <DataTable
          dataRows={rows}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
          cambiarEstado={cambiarEstado}
        />
      </main>
    </>
  );
};
