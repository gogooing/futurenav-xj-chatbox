import React, { useEffect, useState } from 'react';
import {
    Button, Paper, Badge, Box, Divider,
    Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, TextField, Stack,
} from '@mui/material';
import iconPNG from './icon.png'
import { Trans, useTranslation } from 'react-i18next'
import * as api from './api'
import * as remote from './remote'
import { SponsorAboutBanner } from './types';

interface Props {
    open: boolean
    version: string
    lang: string
    close(): void
}

export default function AboutWindow(props: Props) {
    const { t } = useTranslation()
    const [sponsorBanners, setSponsorBanners] = useState<SponsorAboutBanner[]>([])
    useEffect(() => {
        if (props.open) {
            remote.listSponsorAboutBanner().then(setSponsorBanners)
        } else {
            setSponsorBanners([])
        }
    }, [props.open])
    return (
        <Dialog open={props.open} onClose={props.close} fullWidth>
            <DialogTitle>{t('About Xiaojun')}</DialogTitle>
            <DialogContent>
                <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
                    <img src={iconPNG} style={{ width: '100px', margin: 0 }} />
                    <h3 style={{ margin: '4px 0 5px 0' }}>晓君AI(v{props.version})</h3>
                    <span>
                        <Trans 
                            i18nKey="About Message"
                            values={{ Author: "XiaoJun" }}
                            components={[<a href={``} target='_blank'></a>]}
                        />
                    </span>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close}>{t('close')}</Button>
            </DialogActions>
        </Dialog>
    );
}
