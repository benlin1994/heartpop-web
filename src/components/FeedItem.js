

export default function FeedItem({setFeed,feedIndex,choices,question,answer, feedSelection}){

    

    function getRandomPercentage(length, index){
        let sum = 100
        const numbers = []
        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(Math.random() * sum)
            sum -= randomNumber < 0 ? 0 : randomNumber
            numbers.push(randomNumber < 0 ? 0 : randomNumber)
        }
        numbers.push(sum)
    }

    return (
        <div className="bg-blue-200 border rounded p-4">
            <div className="bg-white border rounded p-1">
                {question}
            </div>
            <div>
            {
                choices.map((choice, index) => {
                    let sum = 100
                    const numbers = []
                    for (let i = 0; i < choices.length; i++) {
                        const randomNumber = Math.floor(Math.random() * sum)
                        sum -= randomNumber < 0 ? 0 : randomNumber
                        numbers.push(randomNumber < 0 ? 0 : randomNumber)
                    }
                    numbers.push(sum)

                    if(index === feedSelection[feedIndex]){
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} 
                                className="bg-yellow-200 border rounded p-1" key={index}
                                style={{background:`linear-gradient(to right, pink ${numbers[index]}%, #07aa91 ${numbers[index]}%, #07aa91)`}}
                                >
                                {choice} - {numbers[index]}%
                            </div>
                        )
                    }else if(feedSelection[feedIndex] !== -1){
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} 
                                className="bg-yellow-200 border rounded p-1" key={index}
                                style={{background:`linear-gradient(to right, #a2ea4c ${numbers[index]}%, #07aa91 ${numbers[index]}%, #07aa91)`}}
                                >
                                {choice} - {numbers[index]}%
                            </div>
                        )
                    }else{
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} className="bg-white border rounded p-1" key={index}>
                                {choice}
                            </div>
                        )
                    }
                })
            }
            </div>

        </div>
    )
}

