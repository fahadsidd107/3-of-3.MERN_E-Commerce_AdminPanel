import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../Data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "productname",
      headerName: "Productname",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", type: "text", width: 160 },
    {
      field: "status",
      headerName: "Status",
      // type: 'number',
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/productEdit/" + params.row.id}>
              <Edit className="productListEdit" />
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.row.id);
                alert(`Item with ID: ${params.row.id} has been deleted.`);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;
