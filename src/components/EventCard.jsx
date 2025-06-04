import eventCardImage from "../assets/event-card.png";


export default function EventCard({event}) {
    return (
    <div>
        <img src={event.image} alt="Event Card" />
        <h1>Bestseller Book Bootcamp -write,market & Publish Your Book -lucknow</h1>
        <h2>saturday ,march 18, 9:30PM</h2>
        <h3>ONLINE EVENT -Attend anywhere</h3>
    </div>
    );
}   