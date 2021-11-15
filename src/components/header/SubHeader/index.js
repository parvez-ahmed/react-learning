import React from 'react'
import City from '../HeaderLink/City';
import '../index.css';

const cityList = [
    {
        name: "Bangalore", location: ["Marathahalli","BTM Layout","HSR Layout","Banashankari","Basavanagudi","Domlur","Jayanagar"]
    },
    { name: "Chennai", location: ["Marina Beach","Valluvar Kottam","Thousand Lights Mosque","Elliot’s Beach","Dakshinachitra","Ashtalakshmi Temple","Government Museum"] },
    { name: "Delhi", location: ["Hari Nagar Ashram","Kaushambi","Aya Nagar","Fateh Nagar","greater kailash Enclave 1"] },
    { name: "Gurgaon", location: ["Marathahalli","BTM Layout","HSR Layout","Banashankari","Basavanagudi","Domlur","Jayanagar"] },
    { name: "Hyderabad", location: ["Marina Beach","Valluvar Kottam","Thousand Lights Mosque","Elliot’s Beach","Dakshinachitra","Ashtalakshmi Temple","Government Museum"] },
    { name: "Kolkata", location: ["Hari Nagar Ashram","Kaushambi","Aya Nagar","Fateh Nagar","greater kailash Enclave 1"] },
    { name: "Mumbai", location: ["Marathahalli","BTM Layout","HSR Layout","Banashankari","Basavanagudi","Domlur","Jayanagar"] },
    { name: "Noida", location: ["Hari Nagar Ashram","Kaushambi","Aya Nagar","Fateh Nagar","greater kailash Enclave 1"] },
    { name: "Pune", location: ["Marina Beach","Valluvar Kottam","Thousand Lights Mosque","Elliot’s Beach","Dakshinachitra","Ashtalakshmi Temple","Government Museum"] }
]
function SubHeader() {
    return (
        <div className="SubHeaderContainer">
            {cityList.map((city,i) => <City name={city.name} location={city.location} index={i} />)}
        </div>
    )
}

export default SubHeader
