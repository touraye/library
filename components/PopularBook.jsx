import { Dot, Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PopularBooks = () => {
    return (
			<section className='mb-6'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl mb-4 font-semibold'>Popular Now</h2>
					<Ellipsis />
				</div>
				{/* Todo! Create a reusable card that take a image and a title */}
				<ul className='flex flex-wrap items-center md:flex-row  md:items-start gap-6'>
				<li className='p-2 outline'>
					<Link href="#">
						{/* card header */}
						<div>
							<Image
								src='/assets/book3.webp'
								width={100}
								height={100}
								alt='book1'
							/>
						</div>
						{/* card body */}
						<div className='p-2'>
							<p className='text-xs'>The World of Ice and Fire</p>
						</div>						
					</Link>
					</li>

				<li className='p-2 outline'>
					<Link href="#">
						{/* card header */}
						<div>
							<Image
								src='/assets/book3.webp'
								width={100}
								height={100}
								alt='book1'
							/>
						</div>
						{/* card body */}
						<div className='p-2'>
							<p className='text-xs'>Fantastic Beats Volume ||</p>
						</div>					
					</Link>
					</li>
					{/*  */}
				<li className='p-2 outline'>
					<Link href="#">
						{/* card header */}
						<div>
							<Image
								src='/assets/book3.webp'
								width={100}
								height={100}
								alt='book1'
							/>
						</div>
						{/* card body */}
						<div className='p-2'>
							<p className='text-xs'>Fantastic Beats Volume ||</p>
						</div>					
					</Link>
					</li>
				</ul>
			</section>
		)
}
 
export default PopularBooks;