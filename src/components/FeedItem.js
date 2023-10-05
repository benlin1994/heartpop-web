

export default function FeedItem({setFeed,feedIndex,choices,question,answer, feedSelection}){
    return (
        <div className="bg-blue-200 border rounded p-4">
            <div className="bg-white border rounded p-1">
                {question}
            </div>
            <div>
            {
                choices.map((choice, index) => {
                    if(index === feedSelection[feedIndex]){
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} className="bg-yellow-200 border rounded p-1" key={index}>
                                {choice}
                            </div>
                        )
                    }
                    return (
                        <div onClick={()=>setFeed(feedIndex, index)} className="bg-white border rounded p-1" key={index}>
                            {choice}
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}