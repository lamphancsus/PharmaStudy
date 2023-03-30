import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
//Test
import { mockPatientList } from '../../data/mockData';

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    function backToHome() {
        window.location.href = '/';
    }

    return (
        <Box display="flex" justifyContent="space-between" sx={{ height: 60 }} p={1}>
            {/* SEARCH BAR */}
            <Box
                 display="flex" justifyContent="space-between" p={2}
                 sx={{ alignItems: 'center' }}
            >
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                    </IconButton>
                </Box>
                <IconButton onClick={backToHome}>
                    <HomeIcon
                        sx={{ flex: 1, fontSize: 28 }}
                    /> 
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                </IconButton>
                <IconButton onClick={() => {
                    //addPatient();
                }}>
                <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TopBar;