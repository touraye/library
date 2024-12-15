import { Ellipsis } from "lucide-react";
import Image from "next/image";

const NewCollections = () => {
    return (<section>
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">New collection Series</h2>
            <Ellipsis />
        </div>

        <ul className="pt-2">
            <li className="flex items-center justify-between">
                {/* card head */}
                <div className="flex items-center gap-6 outline">
                    <Image
                        src="/assets/book3.webp" alt="new book"
                        height={100}
                        width={100}
                    />
                    <div>
                        <h4>A Legend of Ice and Fire: The Ice Horse</h4>
                        <p>8 chapter each vol</p>
                    </div>
                </div>
                {/* card body */}
                <div>
                    
                    {/* card footer */}                    
                    <h5 className="font-semibold">2 vol</h5>
                 

                </div>
            </li>
        </ul>
    </section> );
}
 
export default NewCollections;