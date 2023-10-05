import FeedItem from "./FeedItem"

export default function Feed({setFeed,items,feedSelection}){
    return (
        <div className="mb-20">
            {
                items.map((item, index) => {
                    return (
                        <FeedItem feedSelection={feedSelection} question={item.question} answer={item.answer} choices={item.choices} key={index} feedIndex={index} setFeed={setFeed}/>
                    )
                })
            }

        </div>
    )
}