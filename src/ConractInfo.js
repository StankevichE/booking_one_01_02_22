function ContactInfo() {
    const infoCompany = {
        name: 'Booking infcorparation',
        address:
            {
                city: 'LA',
                street: 'Las villas',
                building: 395,
            },
        phone: '345-255-42-41',
        email: 'booking@booking.com'
    }
    return (
        <div>
            <h3>{infoCompany.name}:</h3>
            {infoCompany.address.city}, {infoCompany.address.street}, {infoCompany.address.building}
            <div><hr/> <strong>Our contacts:</strong>
           <br/> telephone: {infoCompany.phone}
            <br/> email: {infoCompany.email}
            </div>
        </div>
    )
}

export default ContactInfo;