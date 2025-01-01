import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Showcase = (
    { title, name, description, url, urlName }: {
    title?: string, name?: string, description?: string, url: string, urlName?: string
}) => {
    return (
            <div className="mb-6">
          <h1 className="text-3xl mb-2 	font-bold">{title}, <br></br>{name}</h1>      
          <p className="mb-4">{description}</p>
          <Link  href={url} className="rounded-full dark:bg-gray-300 dark:text-gray-900  bg-gray-900 text-white py-2 px-6">
            {urlName}
            <ArrowUpRight className="inline-block ml-2" />
          </Link>
          
        </div>
    )
}

export default Showcase;