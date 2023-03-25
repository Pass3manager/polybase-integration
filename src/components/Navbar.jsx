import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuth";

export const Navbar = () => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  return (
    isLoggedIn && (
      <div style={{ paddingBottom: "5rem" }}>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "white", width: "100%", top: 0 }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="../img/icon.png"
              alt="Logo"
              style={{ height: "30px", width: "auto" }}
            />
            <IconButton
              color="primary"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  );
};
