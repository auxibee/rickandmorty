
import CardDetails from './cardDetails';
import image from '../../assets/1.jpeg'
export default {
    title : 'Components/CardDetails',
    component: CardDetails
}

export const CardDetail = () => <CardDetails 
                                    status="Unknown" 
                                    image={image} 
                                    name="Killer" 
                                    location="Abeerdem" 
                                    gender="male" 
                                    origin="accra" 
                                    species="csatrro"/>