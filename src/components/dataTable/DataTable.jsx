import "./dataTable.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DataTable = (Props) => {
  const handleDelete = (id) => {
    //delete the item
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${Props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <Box sx={{ height: 800, width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={Props.rows}
          columns={[...Props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </div>
  );
};
DataTable.prototype = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      headerName: PropTypes.string,
      width: PropTypes.number,
      type: PropTypes.string,
      renderCell: PropTypes.string,
    })
  ),

  userRows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      lastName: PropTypes.string,
      firstName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.number,
      createdAt: PropTypes.string,
      verified: PropTypes.bool,
    })
  ),
  slug: PropTypes.string,
};

export default DataTable;
