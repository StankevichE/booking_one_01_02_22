import {v4 as uuidv4} from 'uuid';

const Offers = () => {
    const villas = [
        {
            id: uuidv4(),
            title: 'Villa see view',
            address: {
                city: 'NY',
                street: 'Bay 23 street',
                building: 3,
            },
            price: 200,
            description: 'two bedroom sea view, 2000 sqft'
        },
        {
            id: uuidv4(),
            title: 'Villa mountain view',
            address: {
                city: 'LA',
                street: 'Sea street',
                building: 14,
            },
            price: 300,
            description: 'three bedrooms mountain view, 2500 sqft'
        },
        {
            id: uuidv4(),
            title: 'Villa ocean view',
            address: {
                city: 'Miami',
                street: 'Court street',
                building: 6,
            },
            price: 380,
            description: 'four bedrooms ocean view, 3000 sqft'
        }
    ]
    return (
        <ul>
            {villas.map(el => (
                <li key={el.id}>
                <hr/>
                    <strong>{el.title}</strong>
                    <br/> <i>{el.address.city + ' ' + el.address.street + ' ' + el.address.building} </i>
                    <br/> {el.description}
                    <br/> Price: ${el.price}
                </li>
            ))}
        </ul>
    );
};

export default Offers;