import { useEffect, useState } from 'react';
import { CardList } from './CardList';
import Toast from './Toast';



interface Pokemon {
    id: number
    name: string;
    url?: URL;
}

export const CardListContainer = () => {
    const [data, setData] = useState<Pokemon[]>([]);
    const [points, setPoints] = useState(0);
    const [choseImages, setChoseImages] = useState<string[]>([]);
    const [selectedImage] = useState<string | null>(null);
    const [highScore, setHighScore] = useState(Number(localStorage.getItem('highScore')) || 0);
    const [imageClickedTwice, setImageClickedTwice] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [toastVisible, setToastVisible] = useState<boolean>(false);

    const showToast = (message: string) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
    }


    const handleImageClick = (image: string) => {
        if (choseImages.includes(image)) {
            if (points > highScore) {
                setHighScore(points);
                localStorage.setItem('highScore', points.toString());
            }
            setPoints(0);
            setChoseImages([]);
            setImageClickedTwice(image); 
    
            setTimeout(() => {
                showToast("Du hast dieses Pokemon schon gewählt! Spiel wird zurückgesetzt.");
            }, 300); 
        } else {
            setPoints(points + 1);
            setChoseImages(prevImages => [...prevImages, image]);
            setData(shuffleArray<Pokemon>([...data]));
            setImageClickedTwice(null); 
        }
    };

    useEffect(() => {
        if (imageClickedTwice) {
            const timer = setTimeout(() => {
                setImageClickedTwice(null); 
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [imageClickedTwice]);
    
    
    function shuffleArray<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        if (selectedImage && !choseImages.includes(selectedImage)) {
            setChoseImages(prevImages => [...prevImages, selectedImage]);
        }
    }, [selectedImage, choseImages]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=15');
                const jsonData = await response.json();
                setData(jsonData.results);
            } catch (error) {
                console.error('no service', error);
            }
        };

        fetchData();
    }, []);

    return (
    <>
    <CardList data={data} points={points} handleImageClick={handleImageClick} imageClickedTwice={imageClickedTwice} />;
    <Toast message={toastMessage} isVisible={toastVisible} />
    </>
    );
};