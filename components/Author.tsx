import Image from "next/image";

const Author = ({
    image, name, designation, action, description
}: {
    image: string, name: string, designation: string, action?: string, description: string
}) => {
    return <section className="p-4">
        <div className="flex items-start justify-between mb-8">
            <div className="flex flex-col">
                <Image 
                    className="rounded-full"
                    width={50}
                    height={100}
                    src={image}
                    alt="author image"
                />
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm font-thin">{designation}</p>
            </div>

            <button className="text-2xl">{action ? action : ''}</button>
        </div>
        <p className="text-sm italic">"{description}"</p>                
    </section>
}

export default Author;