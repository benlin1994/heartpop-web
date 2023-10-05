import ProfileIcon from "./icons/ProfileIcon"
import ShopIcon from "./icons/ShopIcon"
import RewardsIcon from "./icons/RewardsIcon"
import ActivityIcon from "./icons/ActivityIcon"
import PlayIcon from "./icons/PlayIcon"
import { Suspense } from "react"

export default function NavBar() {

    return (
        <div className="fixed bottom-0 left-0 right-0">
            <div className="flex border bg-blue-400 justify-around p-4 gap-8">
                <div className="m-auto">
                <div className="flex justify-center">
                        <PlayIcon/>
                    </div>
                    <label>
                        Play
                    </label>
                </div>
                <div className="m-auto">
                    <div className="flex justify-center">
                        <ActivityIcon/>
                    </div>
                    <label>
                        Activity
                    </label>
                </div>
                <div className="m-auto">
                    <div className="flex justify-center">
                        <ProfileIcon/>
                    </div>
                    <label>
                        Profile
                    </label>
                </div>
                <div className="m-auto">
                    <div className="flex justify-center">
                        <RewardsIcon/>
                    </div>
                    <label>
                        Rewards
                    </label>
                </div>
                <div className="m-auto">
                    <div className="flex justify-center">
                        <ShopIcon/>
                    </div>
                    <label>
                        Shop
                    </label>
                </div>
            </div>
        </div>
        )
}

