import { AsyncWeather } from '@cicciosgamino/openweather-apis';

export const getWeather = async (lat, long) => {
    const weather = await new AsyncWeather();
    const apiKey = '8e46f390d20e980a8eedd5101f9d3a97';
    weather.setLang('he');
    weather.setCoordinates(lat, long);
    weather.setApiKey(apiKey);
    return await weather.getAllWeather();
}