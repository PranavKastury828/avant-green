import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
export function Testimonials({ data }) {
    return (
        <>  
            <div className="min-w-[340px] max-w-[340px] p-4">
                <h2 className='text-xl text-body-text mb-[28px] text-wrap min-h-[150px]'>{data.quote}</h2>
                <div className="flex justify-start items-center gap-[24px]">
                    <Image src={urlFor(data.image).url()} width={68} height={68} alt={data.name} className='rounded-[100%] h-[68px] w-[68px] object-cover' /> 
                    <div>
                        <h3 className="text-xl text-apres-huit">{data.name}</h3>
                        <h4 className="text-sm text-body-text">{data.profession} </h4>
                        <h4 className="text-sm text-body-text">{data.organization} </h4>
                    </div>
                </div>
            </div>

            
            
        </>
    )
}