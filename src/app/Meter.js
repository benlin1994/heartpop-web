
export default function Meter(props) {

    return (
        <div className="fixed top-0 left-0 right-0 bg-yellow-400">
            <div className="text-center text-2xl p-2">
            Daily Points Earned: {props.points} / 100
            </div>
            <div className="flex border justify-around gap-8">
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 w-1/3 rounded-full dark:bg-blue-500" ></div>
                </div>
            </div>
        </div>
        )
}

