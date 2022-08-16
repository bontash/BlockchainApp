import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Drawer, DrawerHeader } from './NavbarStyle';
import { Link } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useHistory } from 'react-router-dom';
import TagIcon from '@mui/icons-material/Tag';
import CottageIcon from '@mui/icons-material/Cottage';
import StorageIcon from '@mui/icons-material/Storage';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AssessmentIcon from '@mui/icons-material/Assessment';


export default function NavbarContainer(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const baseUrl = '';

  const routesWithIcons = [
    {
      text: 'Home',
      icon: <CottageIcon />,
      path: `${baseUrl}/home`
    }, {
      text: 'Hash',
      icon: <TagIcon />,
      path: `${baseUrl}/hashing`
    },
    {
      text: 'Blockchain',
      icon: <CurrencyBitcoinIcon />,
      path: `${baseUrl}/blockchain`
    }, {
      text: 'Properties',
      icon: <AssessmentIcon />,
      path: `${baseUrl}/properties`
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            color="primary"
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' no wrap component='div' color={'#FAF5E4'} fontFamily={'Trebuchet MS'}> Blockchain technology: an application of cryptographic hash functions
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon color={'primary'} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routesWithIcons.map(({ text, icon, path }, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                  onClick={() => {
                    history.push(path);
                  }}
                >
                  {React.cloneElement(icon, { color: 'primary' })}
                </ListItemIcon>
                <ListItemText
                  primary={<Link href={path}>{text}</Link>}
                  sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}