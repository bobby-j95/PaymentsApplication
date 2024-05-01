
const SearchForID = () : JSX.Element => {
    const id1 : SearchForIDProps = {
        id: "123",
        date: new Date(),
        country: "USA",
        currency: "USD",
        amount: 1100,
    }
    
    const id2 : SearchForIDProps = {
        id: "456",
        date: new Date(),
        country: "GB",
        currency: "GBP",
        amount: 370,
    }
    
    const id3 : SearchForIDProps = {
        id: "789",
        date: new Date(),
        country: "JA",
        currency: "JAD",
        amount: 946,
    }
    // return (<ul>
    //     <li>{props.id} {props.date} {props.country} {props.currency} {props.amount}
    //     </li></ul>);
    return(<ul>
            <li>{id1.id} {id1.country} {id1.currency} {id1.amount}</li>
            <li>{id2.id} {id2.country} {id2.currency} {id2.amount}</li>
            <li>{id3.id} {id3.country} {id3.currency} {id3.amount}</li>
            </ul>);

}

export default SearchForID;

type SearchForIDProps = {
    id: string,
    date: Date,
    country: string,
    currency: string,
    amount: number
}

