// ProductMenu.tsx
'use client';

import React, { useState } from 'react';
import {
    Box,
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const productCategories: Record<string, string[]> = {
    Fruits: ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry', 'Grapes', 'Kiwi'],
    Vegetables: ['Carrot', 'Tomato', 'Cucumber', 'Lettuce'],
    Dried: ['Dates', 'Figs', 'Raisins'],
};

export default function ProductMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const open = Boolean(anchorEl);
    const subOpen = Boolean(subAnchorEl);

    const handleMainEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMainLeave = () => {
        setAnchorEl(null);
        setSubAnchorEl(null);
        setActiveCategory(null);
    };

    const handleSubEnter = (event: React.MouseEvent<HTMLElement>, category: string) => {
        setSubAnchorEl(event.currentTarget);
        setActiveCategory(category);
    };

    const handleSubLeave = () => {
        setSubAnchorEl(null);
        setActiveCategory(null);
    };

    return (
        <Box onMouseLeave={handleMainLeave}>
            {/* Main Nav Button (unchanged) */}
            <Button
                color="inherit"
                onMouseEnter={handleMainEnter}
                endIcon={<ArrowDropDownIcon />}
            >
                Products
            </Button>

            {/* First-level Menu: Fruits / Vegetables / Dried */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                    onMouseLeave: handleMainLeave,
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                {Object.keys(productCategories).map((category) => (
                    <MenuItem
                        key={category}
                        onMouseEnter={(e) => handleSubEnter(e, category)}
                        onMouseLeave={handleSubLeave}
                    >
                        {category}
                    </MenuItem>
                ))}
            </Menu>

            {/* Submenu for items inside each category */}
            <Menu
                anchorEl={subAnchorEl}
                open={subOpen && !!activeCategory}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                MenuListProps={{ onMouseLeave: handleSubLeave }}
            >
                {activeCategory &&
                    productCategories[activeCategory].map((item) => (
                        <MenuItem key={item}>{item}</MenuItem>
                    ))}
            </Menu>
        </Box>
    );
}
