
function Card (){

    return <>
    
    <div className="border border-black w-80 h-72  grid grid-rows-12 rounded-lg ">
        <div className="bg-blue-300 row-span-5 flex items-end justify-center relative rounded-t-lg">
            <div className="bg-white h-24 w-24 rounded-full absolute top-12 overflow-hidden ">
                <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />
            </div>
        </div>
        <div className="bg-white row-span-4 flex flex-col justify-center items-center">
            <div>
                <span className="font-medium text-xl">Rita correia</span>
                <span className="text-gray-600 ml-1">32</span>
            </div>

            <div className="text-gray-600">London</div>
        </div>
        <div className="bg-white border border-t-gray-600 row-span-3 flex items-center justify-evenly rounded-b-lg">
            <div>
                <div className="font-medium text-lg">80K</div>
                <div className="text-gray-600 text-xs">Followers</div>
            </div>
            <div>
                <div className="font-medium text-lg">803K</div>
                <div className="text-gray-600 text-xs">Likes</div>
            </div>
            <div>
                <div className="font-medium text-lg">1.4K</div>
                <div className="text-gray-600 text-xs">Photos</div>
            </div>
        </div>

    </div>
    
    </>
}

export default Card