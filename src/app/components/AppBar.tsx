'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Container,
    Button,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
} from '@mui/material';
import {
    Menu as MenuIcon,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import Image from "next/image";

const pages = ['products', 'Quality', 'Logistics', 'Contact'];

const productCategories: Record<string, string[]> = {
    Fruits: ['Strawberry', 'Pomegranate', 'Mango', 'Apricot'],
    Vegetables: ['Cauliflower', 'Broccoli', 'Peas With Carrot', 'Diced Onion', 'Okra', 'Sweet Corn','Green Beans', 'Mixed Vegetables'],
    fries: ['French fries'],
};

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElProducts, setAnchorElProducts] = React.useState<null | HTMLElement>(null);
    const [openSubMenus, setOpenSubMenus] = React.useState<Record<string, boolean>>({});

    const router = useRouter();

    const slugify = (text: string) =>
        text
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

    const handleNavigate = (path: string) => {
        setAnchorElNav(null);
        setAnchorElProducts(null);
        router.push(`/${path.toLowerCase()}`);
    };

    const globalTextStyle = {
        fontFamily: '"Poppins", sans-serif',
        fontSize: '20px',
        letterSpacing: '.03rem',
        fontWeight: 'bold',
        textShadow: "0px 5px 8px rgba(24,146,197,0.6)",
    };

    return (
        <>
        <AppBar position="fixed" sx={{ backgroundColor: 'rgb(9,44,14)', p:1 }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ ...globalTextStyle }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => router.push('/')}
                        sx={{
                            ...globalTextStyle,
                            fontWeight: 900,
                            fontSize: '36px',
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                    <Image src={'./images/logo-i.png'} alt={"Logo"} width={110} height={70}/>
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={(e) => setAnchorElNav(e.currentTarget)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={() => setAnchorElNav(null)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => {
                                if (page === 'products') {
                                    return (
                                        <Box key="products" sx={{ px: 1 }}>
                                            <MenuItem>
                                                <Typography sx={globalTextStyle}>Products</Typography>
                                            </MenuItem>
                                            <List component="nav" disablePadding>
                                                {Object.entries(productCategories).map(([category, items]) => (
                                                    <Box key={category}>
                                                        <ListItemButton
                                                            onClick={() =>
                                                                setOpenSubMenus((prev) => ({
                                                                    ...prev,
                                                                    [category]: !prev[category],
                                                                }))
                                                            }
                                                        >
                                                            <ListItemText primary={category} sx={globalTextStyle} />
                                                            {openSubMenus[category] ? <ExpandLess /> : <ExpandMore />}
                                                        </ListItemButton>
                                                        <Collapse in={openSubMenus[category]} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding>
                                                                {items.map((item) => (
                                                                    <ListItemButton
                                                                        key={item}
                                                                        sx={{ pl: 4 }}
                                                                        onClick={() => {
                                                                            handleNavigate(
                                                                                `products/${slugify(category)}/${slugify(item)}`
                                                                            );
                                                                            setAnchorElNav(null);
                                                                        }}
                                                                    >
                                                                        <ListItemText primary={item} sx={globalTextStyle} />
                                                                    </ListItemButton>
                                                                ))}
                                                            </List>
                                                        </Collapse>
                                                    </Box>
                                                ))}
                                            </List>
                                        </Box>
                                    );
                                }

                                return (
                                    <MenuItem key={page} onClick={() => handleNavigate(page)}>
                                        <Typography textAlign="center" sx={globalTextStyle}>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        onClick={() => router.push('/')}
                        sx={{
                            ...globalTextStyle,
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            fontSize: '20px',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Frozen Valley
                    </Typography>

                         {/* Desktop Navigation */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,gap:2  }}>
                        {pages.map((page) => {
                            if (page === 'products') {
                                return (
                                    <Box
                                        key="products"
                                        sx={{ display: 'flex', alignItems: 'center' }}
                                        onMouseLeave={() => setAnchorElProducts(null)}
                                    >
                                        <Button
                                            onClick={() => {
                                                setAnchorElProducts(null);
                                                handleNavigate('products');
                                            }}
                                            sx={{ my: 2, color: 'white', display: 'block', ...globalTextStyle }}
                                        >
                                            Products
                                        </Button>

                                        <IconButton
                                            onClick={(e) => setAnchorElProducts(e.currentTarget)}
                                            sx={{ color: 'white', p: 0, ml: -1 }}
                                        >
                                            <ExpandMore />
                                        </IconButton>

                                        <Menu
                                            anchorEl={anchorElProducts}
                                            open={Boolean(anchorElProducts)}
                                            onClose={() => {
                                                setAnchorElProducts(null);
                                                setOpenSubMenus({});
                                            }}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                            MenuListProps={{
                                                onMouseLeave: () => setAnchorElProducts(null),
                                            }}
                                        >
                                            <Box sx={{ px: 2, py: 1 }}>
                                                <List component="nav" disablePadding sx={{ width: 250 }}>
                                                    {Object.entries(productCategories).map(([category, items]) => (
                                                        <Box
                                                            key={category}
                                                            onClick={() => setOpenSubMenus({ [category]: true })}
                                                            onMouseLeave={() => setOpenSubMenus({})}
                                                        >
                                                            <ListItemButton>
                                                                <ListItemText primary={category} sx={globalTextStyle} />
                                                                {openSubMenus[category] ? <ExpandLess /> : <ExpandMore />}
                                                            </ListItemButton>
                                                            <Collapse in={openSubMenus[category]} timeout="auto" unmountOnExit>
                                                                <List component="div" disablePadding>
                                                                    {items.map((item) => (
                                                                        <ListItemButton
                                                                            key={item}
                                                                            sx={{ pl: 4 }}
                                                                            onClick={() =>
                                                                                handleNavigate(
                                                                                    `products/${slugify(category)}/${slugify(item)}`
                                                                                )
                                                                            }
                                                                        >
                                                                            <ListItemText primary={item} sx={globalTextStyle} />
                                                                        </ListItemButton>
                                                                    ))}
                                                                </List>
                                                            </Collapse>
                                                        </Box>
                                                    ))}
                                                </List>
                                            </Box>
                                        </Menu>
                                    </Box>
                                );
                            }

                            return (
                                <Button
                                    key={page}
                                    onClick={() => handleNavigate(page)}
                                    sx={{ my: 2, color: 'white', display: 'block', ...globalTextStyle }}
                                >
                                    {page}
                                </Button>
                            );
                        })}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    <Toolbar sx={{ minHeight: 80 }} /></>

);
}

export default ResponsiveAppBar;
