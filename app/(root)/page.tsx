import PopularBooks from "@/components/PopularBook"
import NewCollections from "@/components/NewCollection";
import Book from "@/components/Book";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row  items-start gap-2 md:gap-6 py-4 px-4">
      <div>
        <div className="mb-6">
          <h1 className="text-3xl mb-2 	font-bold">Happy reading, <br></br>Ahmed</h1>      
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati minus qui vitae molestias, iste eum et dolorem deleniti voluptatum repellendus aliquam unde ipsa accusamus.</p>
          <Link href="#" className="rounded-full dark:bg-gray-300 dark:text-gray-900  bg-gray-900 text-white py-2 px-6">
            Start reading
            <ArrowUpRight className="inline-block ml-2" />
          </Link>
          
        </div>

        <PopularBooks />
        <NewCollections />
      </div>
      
      <div className="dark:bg-gray-700 dark:text-gray-200">
        <Book
          img="/assets/book3.webp"
          title="The Chamber of Secrets"
          availability={true}
          imprints={30}
          page={190}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero repellendus sapiente sunt placeat eum."
          borrowed={20}          
        />

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Popular Authors</h2>
          <ul className="flex flex-col gap-3 my-4">
            <li className="flex items-start gap-3">              
                <Image 
                  className="rounded-full"
                  width={50}
                  height={100}
                  src="/assets/user-profile1.avif"
                  alt="author image"
                />
              <div>
                <h3 className="font-semibold">Roberto Jordan</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolore sunt aperiam.</p>
                <div className="flex items-center justify-between mt-2">
                  <p>Something</p>
                  <p>Book: 12</p>
                </div>
              </div>
            </li>

             <li className="flex items-start gap-3">              
                <Image 
                  className="rounded-full"
                  width={50}
                  height={100}
                  src="/assets/user-profile1.avif"
                  alt="author image"
                />
              <div>
                <h3 className="font-semibold">Henna Henry</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolore sunt aperiam.</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="">Something</p>
                  <p className="font-thin">Book: 5</p>
                </div>
              </div>
            </li>
          </ul>
          
        </div>
      </div>      
    </section>
  );
}

export default Home;