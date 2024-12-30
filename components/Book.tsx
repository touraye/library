import Image from "next/image";

const Book = (
    { img, title, availability, imprints, page, description, borrowed }:
    { img: string, title: string, availability: boolean, imprints: number, page: number, description: string, borrowed: number }) => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-start gap-2 md-4 md:mb-0">
        <Image src={img} width={100} height={100} alt={title} />
        <div>
            <h2 className="text-2xl mb-2">{title}</h2>
            <p>Available: {availability ? "Yes" : "No"}</p>
            <p>Imprints: {imprints}</p>
            <p className="my-2">{description}</p>
            <p className="mr-auto">Author: {borrowed}</p>
        </div>
    </section>);
}
 
export default Book;