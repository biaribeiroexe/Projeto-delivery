import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Historico = ({ title, date, description }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography color="text.secondary">{date}</Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Historico;
