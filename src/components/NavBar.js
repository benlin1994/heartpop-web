import ProfileIcon from "../icons/ProfileIcon"
import ShopIcon from "../icons/ShopIcon"
import RewardsIcon from "../icons/RewardsIcon"
import ActivityIcon from "../icons/ActivityIcon"
import PlayIcon from "../icons/PlayIcon"

export default function NavBar() {

    return (
        <div className="fixed bottom-0 left-0 right-0">
            <div className="flex border bg-blue-400 text-center justify-around content-center p-4 gap-8">
            <   div className="w-8 m-auto">
                    <div className="flex justify-center">
                        <PlayIcon/>
                    </div>
                    <label className="flex justify-center">
                        Play
                    </label>
                </div>
                <div className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ActivityIcon/>
                    </div>
                    <label className="flex justify-center">
                        Activity
                    </label>
                </div>
                <div className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ProfileIcon/>
                    </div>
                    <label className="flex justify-center">
                        Profile
                    </label>
                </div>
                <div className="w-8 m-auto">
                    <div className="flex justify-center">
                        <RewardsIcon/>
                    </div>
                    <label className="flex justify-center">
                        Rewards
                    </label>
                </div>
                <div className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ShopIcon/>
                    </div>
                    <label className="flex justify-center">
                        Shop
                    </label>
                </div>
            </div>
        </div>
        )
}

