import Author from "@/components/Author"
import Gallery from "@/components/Gallery"
import Showcase from "@/components/Showcase"
import { MoveLeft, MoveRight } from "lucide-react"
import Image from "next/image"

const Page = () => {
  return (
    <>    
    <section className="flex flex-col md:flex-row items-start gap-4 pt-4">
        <div className="flex-1">
          <Showcase 
          title="Keep the story going..."
          name="Admeh"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio omnis velit, repellat magni delectus."
          url="#"
          urlName="Start reading"      
        />          
      </div>

        {/* author */}
        <div className="flex-1">
          <Author
            image="/assets/user-profile1.avif"
            name="George PR Martin"
            designation="author"
            action="..."
            description="Fire and blood tells the story of the Tragaryen dynasty in Westeros, chronicling conquest of the seven Kingdoms by House Tragaryen. It also cover Tragaryen civil war knows as the Dance of the Dragon"
          />

        </div>
      
      </section>    

      {/* Gallery */}
      <Gallery />
    </>    
  )
}

export default Page
