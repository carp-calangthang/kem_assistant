import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type weatherProps = {
    lat: string
    lon: string
    lang: string
}

const API_KEY = '13489feaafdd3b1f81431cf30ac0855f';

export const useWeatherByCode = ({ lat, lon, lang }: weatherProps) => {
    return useQuery({
        queryKey: ['weather', lat, lon],
        queryFn: async () => {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${API_KEY}&units=metric`);
            return response.data;
        },
        enabled: !!lat && !!lon,
    });
};