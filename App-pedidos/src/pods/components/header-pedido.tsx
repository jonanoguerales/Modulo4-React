import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {PedidoType} from '../pedido';

interface PropsType{
  props:PedidoType
}

export const HeaderPedido = ({props} : PropsType) => {
  const {numero,proveedor,fecha,importeTotal,estado} = props
  return (
    <Box sx={{ display: "flex", justifyContent:"center" }}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
          borderRadius: "20px",
          padding: "2rem",
        }}
      >
        <Grid container spacing={2} sx={{ width: "600px" }}>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              id="outlined-número"
              label="Número"
              variant="outlined"
              value={numero}
              type="number"
              size="small"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              id="outlined-proveedor"
              value={proveedor}
              label="Proveedor"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              id="outlined-fecha"
              label="Fecha"
              value={fecha.toISOString().split("T")[0]}
              type="date"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              id="outlined-importe"
              value={importeTotal}
              label="Importe total"
              variant="outlined"
              type="number"
              size="small"
              sx={{ width: "100%" }}
              disabled
            />
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <TextField
              id="outlined-estado"
              value={`${estado}%`}
              label="Estado"
              variant="outlined"
              type="string"
              size="small"
              sx={{ width: "100%" }}
              disabled
            />
          </Grid>
        </Grid>
        <div style={{ display: "flex", alignItems: "end" }}>
          <Button
            size="medium"
            variant="contained"
            sx={{ height: "2rem" }}
            disabled = {estado === 100 ? false : true}
          >
            Enviar
          </Button>
        </div>
      </Paper>
    </Box>
  );
};
