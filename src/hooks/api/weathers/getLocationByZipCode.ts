import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = '13489feaafdd3b1f81431cf30ac0855f';

export const useCityByZip = (cityName: string) => {
    return useQuery({
        queryKey: ['city', cityName],
        queryFn: async () => {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
            return response.data;
        },
        enabled: !!cityName,
    });
};