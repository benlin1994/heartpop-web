

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
                    let total = 0
                    const tempNumbers = []
                    for (let i = 0; i < 3; i++) {
                        let randomNumber = Math.floor(Math.random() * sum)
                        tempNumbers.push(randomNumber)
                        total += randomNumber
                    }
                    tempNumbers.push(sum)
                    let numbers = tempNumbers.map(x => Math.floor(((x * 100)/tempNumbers.reduce((a, b) => a + b, 0))))
                    let grand = tempNumbers.reduce((a, b) => a + b, 0)

                    if(index === feedSelection[feedIndex]){
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} 
                                className="bg-yellow-200 border rounded p-1" key={index}
                                style={{background:`linear-gradient(to right, pink ${numbers[index]}%, #D65780 ${numbers[index]}%, #D65780)`}}
                                >
                                {choice} - {numbers[index]} %
                            </div>
                        )
                    }else if(feedSelection[feedIndex] !== -1){
                        return (
                            <div onClick={()=>setFeed(feedIndex, index)} 
                                className="bg-yellow-200 border rounded p-1" key={index}
                                style={{background:`linear-gradient(to right, #a2ea4c ${numbers[index]}%, green ${numbers[index]}%, green)`}}
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

