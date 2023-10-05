import ProfileIcon from "./icons/ProfileIcon"
import ShopIcon from "./icons/ShopIcon"
import RewardsIcon from "./icons/RewardsIcon"
import ActivityIcon from "./icons/ActivityIcon"
import PlayIcon from "./icons/PlayIcon"
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function NavBar() {

    let path = usePathname()

    return (
        <div className="fixed bottom-0 left-0 right-0 h-64">
            <div className="flex border bg-blue-400 text-center justify-around content-center p-4 gap-8">
                <Link href="/" className="w-8 m-auto fill-white">
                    <div className="flex justify-center">
                        <PlayIcon isActive={path === "/"}/>                        
                    </div>
                    <label className="flex justify-center">
                        Play
                    </label>
                </Link>
                <Link href="/activity" className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ActivityIcon isActive={path === "/activity"}/>
                    </div>
                    <label className="flex justify-center">
                        Activity
                    </label>
                </Link>
                <Link href="/profile" className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ProfileIcon isActive={path === "/profile"}/>
                    </div>
                    <label className="flex justify-center">
                        Profile
                    </label>
                </Link>
                <Link href="/rewards" className="w-8 m-auto">
                    <div className="flex justify-center">
                        <RewardsIcon isActive={path === "/rewards"}/>
                    </div>
                    <label className="flex justify-center">
                        Rewards
                    </label>
                </Link>
                <Link href="/shop" className="w-8 m-auto">
                    <div className="flex justify-center">
                        <ShopIcon isActive={path === "/shop"}/>
                    </div>
                    <label className="flex justify-center">
                        Shop
                    </label>
                </Link>
            </div>
        </div>
        )
}

