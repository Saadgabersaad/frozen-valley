'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Image from 'next/image';

export default function FloatingActionButtons() {
    return (
        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: '20%',
                px: 0,
                py: 2,
                bgcolor: 'white',
                boxShadow: 2,
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: .5,
                    alignItems: 'center',
                }}
            >
                <a
                    href="https://www.linkedin.com/company/109426484/admin/analytics/followers/?timeRangeEnd=1759967999999&timeRangeStart=1759363200000 "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Fab
                        aria-label="linkedin"
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            minHeight: 'auto',
                            minWidth: 'auto',
                            '&:hover': {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <Image
                            src="./linkedin.svg"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                        />
                    </Fab>
                </a>

                <a
                    href="https://wa.me/201555077623"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Fab
                        aria-label="whatsapp"
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            minHeight: 'auto',
                            minWidth: 'auto',
                            '&:hover': {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <Image
                            src="./whatsapp.svg"
                            alt="Instagram"
                            width={30}
                            height={30}
                        />
                    </Fab>
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=61581836559607&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Fab
                        aria-label="facebook"
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            minHeight: 'auto',
                            minWidth: 'auto',
                            '&:hover': {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <Image
                            src="./facebook.svg"
                            alt="Facebook"
                            width={30}
                            height={30}
                        />
                    </Fab>
                </a>
            </Box>
        </Box>
    );
}
