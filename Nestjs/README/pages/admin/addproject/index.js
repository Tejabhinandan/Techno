import TableComponent from "@/molecules/TableComponent";
import React from "react";

const tableColumns = [
  {
    id: "col1",
    label: "Sl.No",
  },
  {
    id: "col2",
    label: "Name",
  },
  {
    id: "col3",
    label: "Phone",
  },
  {
    id: "col4",
    label: "Email",
  },
];

const tableRows = [
  {
    col1: "1",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "2",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "3",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "4",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "5",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "6",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "7",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "8",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "9",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "10",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "11",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "12",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "13",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "14",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "15",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "16",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "17",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "18",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "19",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "20",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "21",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
  {
    col1: "22",
    col2: "Rohan",
    col3: "9876543211",
    col4: "rohan@gmail.com",
  },
];

const AddProject = () => {
  return <TableComponent tableColumns={tableColumns} tableRows={tableRows} />;
};

export default AddProject;
