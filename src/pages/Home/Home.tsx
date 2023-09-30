import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedLogo from "../../components/AnimatedLogo";
import Typography from "../../UI/Typography";
import SliderMenu from "../../components/SliderMenu";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import ReviewCardList from "../../modules/ReviewCardList";
import Container from "../../UI/Container";
import Box from "../../UI/Box";
import { useMediaQuery } from "@mui/material";


const jsonSliderMenu = [
    {
        id: 1,
        name: 'UI/UX'
    },
    {
        id: 2,
        name: 'Frontend'
    },
    {
        id: 3,
        name: 'Backend'
    },
    {
        id: 4,
        name: 'Нейросети'
    },
    {
        id: 5,
        name: 'Графический дизайн'
    },
    {
        id: 6,
        name: 'Дизайн шоколадок'
    },
    {
        id: 7,
        name: 'Школы для обучения'
    },
    {
        id: 8,
        name: 'Маркетинг'
    },
]

const jsonNavigation = [
    {
        id: 1,
        categoryName: 'Инструменты'
    },
    {
        id: 2,
        categoryName: 'Вдохновение'
    },
    {
        id: 3,
        categoryName: 'Полезное'
    },
    {
        id: 4,
        categoryName: 'Работа и фриланс'
    },
    {
        id: 5,
        categoryName: 'Сообщества'
    },
]

const jsonContent = [
    {
        id: 1,
        category: 'Инструменты',
        content: [
            {
                id: 1,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 2,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Figma',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 3,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Matereial UI',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 4,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Boostrap',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate deleniti facilis illo cumque! Repellat',
                url: ''
            },
        ]
    },
    {
        id: 2,
        category: 'Инструменты',
        content: [
            {
                id: 5,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 6,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 7,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 8,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
        ]
    },
    {
        id: 1,
        category: 'Инструменты',
        content: [
            {
                id: 9,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 10,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 11,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
            {
                id: 12,
                iconUrl: '',
                imageUrl: 'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?q=10&h=200',
                name: 'Behance',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo aliquid atque quae eaque, maiores beatae. Necessitatibus repellendus, adipisci distinctio odio natus dolore, qui voluptate ',
                url: ''
            },
        ]
    }
]


const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header style={{ padding: '10px' }}>
                <AnimatedLogo />
            </Header>
            <Container component='main'>
                <Typography 
                variant='h2' 
                style={{ width: '465px', textAlign: 'center', marginTop: '166px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '80px' }}>
                    Полезные сервисы в одном месте
                </Typography>
                <SliderMenu items={ jsonSliderMenu } />
                <Box style={{ display: 'flex', gap: '32px', marginTop: '100px', marginBottom: '100px' }}>
                    <Box style={{ position: 'relative', flex: '0 0 33.67%' }}>
                        <SideNavigation style={{ position: 'sticky', top: '5%' }} items={ jsonNavigation } />
                    </Box>
                    <ReviewCardList data={ jsonContent } /> 
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Home;