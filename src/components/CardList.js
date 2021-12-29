
import Card from "./Card"

const CardList = ({robots})=>{
    const cardsArray = robots.map((cur, i) => {
        // put a key property when looping to make it unique, helps with dom
        return <Card 
                key = {i} 
                id ={cur.id} 
                name = {cur.name} 
                email = {cur.email}
                />
    })
    return(
        <div>
           {cardsArray}
        </div>
    )
}

export default CardList