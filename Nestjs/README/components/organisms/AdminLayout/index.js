import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeaderComponent from "../HeaderComponent";
import SideBarComponent from "../SideBarComponent";
import LOGO from "../../../public/logo.png";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const menuList = [
  {
    icon: <DriveFolderUploadIcon />,
    label: "Upload File",
    path: "/admin/uploadfile",
  },
  {
    icon: <AddBoxIcon />,
    label: "Add Project",
    path: "/admin/addproject",
  },
];

const AdminLayout = ({ children }) => {
  return (
    <Grid className="d-flex overflow-hidden">
      <Box>
        <SideBarComponent menuList={menuList} />
      </Box>
      <Box className="vw-100 vh-100 overflowY-hidden overflowX-hidden">
        <HeaderComponent />
        <Box className="bg-light-white panel-height p-4 overflowY-scroll overflowX-hidden hide-scrollbar">
          <Box className="position-absolute bottom-0 end-0">
            <Image src={LOGO} width="200" height="60" />
          </Box>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

export default AdminLayout;
