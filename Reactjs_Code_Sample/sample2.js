import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Button } from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { confrimAlrt } from "../confrimAlert";
import { useHistory } from "react-router";
import { ListContext } from "../../Context/listContext/ListContext";
import { getLists, deleteList } from "../../Context/listContext/apiCalls";

export default function ListTable() {
  const [data, setData] = React.useState(productRows);
  const { lists, dispatch } = React.useContext(ListContext);
  const history = useHistory();

  React.useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "title",
      headerName: "Title",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="d-flex align-itmes-center">
            <Avatar alt="Travis Howard" src={params.row.img} className="mt-2" />
            <p className="text-dark my-0 ms-2">{params.row.title} </p>
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 180,
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      width: 180,
      editable: true,
    },


    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => handleEdit(params.row._id, params.row)}
              className="btn btn-sm btn-success text-white rounded"
            >
              Edit
            </button>
            <DeleteRounded
              onClick={() =>
                handleDeleteClick(params.row._id, params.row.title)
              }
              size="small"
              className="text-danger ms-3"
            />
          </div>
        );
      },
    },
  ];

  const handleDeleteClick = (id, name) => {
    const deleteMovieCallback = () => deleteList(dispatch, id);

    confrimAlrt(`Are you Sure want to remove "${name}"`, deleteMovieCallback);
  };

  const handleEdit = (id, movie) => {
    console.log(movie)
    history.push({ pathname: `/list/${id}`, params: movie });
  };

  console.log(lists);

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        className="text-dark fw-bolder"
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}
