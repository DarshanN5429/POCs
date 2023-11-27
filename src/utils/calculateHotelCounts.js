
import axios from 'axios';

const calculateHotelCounts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/hotels');
        const hotels = response.data;

        const hotelCounts = hotels.reduce((counts, hotel) => {
            counts[hotel.city] = (counts[hotel.city] || 0) + 1;
            return counts;
        }, {});

        console.log(hotelCounts);
        return hotelCounts;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        return {};
    }
};

export default calculateHotelCounts;
