import React from "react";
import clsx from "clsx";
import List, {  ListItem } from "../../UI/List";
import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import Box from "../../UI/Box";
import LogoNoBg from '../../assets/images/logoNoBg.svg';
import EpatajSvg from '../../assets/images/epataj.svg';
import DesignSvg from '../../assets/images/design.svg';
import FooterLogoBg from '../../assets/images/logoBg.svg?url';
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getFooterClass } from "./footerClasses";
import { FaPaperPlane, FaEnvelope, FaCompass, FaGithub } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }

    return composeClasses(slots, getFooterClass);
}

interface IFooterProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const FooterRoot = styled('footer')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    ...(useMediaQuery(theme.breakpoints.down(444)) && {
        paddingLeft: '8px',
        paddingRight: '8px',
    })
}));

const Footer: React.FC<IFooterProps> = (props) => {
    const {  
        className,
        component = 'footer',
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <FooterRoot 
        as={ component } 
        className={ clsx(classes.root, className) }
        { ...other }>
            <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '24px' }}>
                <Box style={{ textAlign: 'center' }}>
                    <Box style={{ 
                        backgroundImage: `url("${ FooterLogoBg }")`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '132px', 
                        height: '132px'
                    }}>
                        <LogoNoBg style={{ position: 'absolute', marginTop: '71px' }} />
                    </Box>
                    <Typography variant='body2' style={{ opacity: 0.5 }}>IT Помощник</Typography>
                </Box>
                <Box style={{ display: 'flex', textAlign: 'center' }}>
                    <List header={
                        <Box style={{ marginBottom: '16px' }}>
                            <Typography variant='body2'>Vladislav Movchan</Typography>
                            <Typography variant='body2' style={{ opacity: 0.5, fontSize: '14px' }}>Design</Typography>
                        </Box>
                    }>
                        <ListItem>
                            <Button href="mailto:@desiiign@ya.ru" startIcon={ <FaEnvelope size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2'>@desiiign@ya.ru</Typography>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="https://t.me/@moovchaan" startIcon={ <FaPaperPlane size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2'>@moovchaan</Typography>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="https://www.desiiign.ru" startIcon={ <FaCompass size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2' style={{ color: '#97F223' }}>desiiign.ru</Typography>
                            </Button>
                        </ListItem>
                    </List>
                    <List header={
                        <Box style={{ marginBottom: '16px' }}>
                            <Typography variant='body2'>Maxim Lukhovskiy</Typography>
                            <Typography variant='body2' style={{ opacity: 0.5, fontSize: '14px' }}>Developer</Typography>
                        </Box>
                    }>
                        <ListItem>
                            <Button href="mailto:malcewdeveloper@ya.ru" startIcon={ <FaEnvelope size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2'>malcewdeveloper@ya.ru</Typography>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="https://t.me/@malcew" startIcon={ <FaPaperPlane size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2'>@malcew</Typography>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button href="https://github.com/malcewdeveloper" startIcon={ <FaGithub size={14} /> } style={{ color: '#FFFFFF' }}>
                                <Typography variant='body2' style={{ color: '#97F223' }}>GitHub</Typography>
                            </Button>
                        </ListItem>
                    </List>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 57px 0 47px' }}>
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '35px', marginBottom: '15px' }}>
                        <EpatajSvg />
                        <DesignSvg />
                    </Box>
                    <Typography variant='body2' style={{ marginBottom: '15px', opacity: 0.5 }}>www.sooos.ru</Typography>
                    <Typography variant='body2' style={{ opacity: 0.5 }}>2023</Typography>
                </Box>
            </Box>
        </FooterRoot>
    )
}

export default Footer;