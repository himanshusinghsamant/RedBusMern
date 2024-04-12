import React from 'react'
import help_img from '../images/help-img.avif'

const Help = () => {
  return (
    <div>
      <section className='mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-x-10 p-[100px]'>
        <div className='h-[600px] md:w-[400px] border-2 rounded-xl overflow-scroll md:mt-[50px] p-5'> 
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti adipisci, asperiores expedita, eaque aliquam magnam soluta odit, a sint fugiat enim nostrum itaque commodi illum excepturi at perspiciatis. Sit magnam ullam, doloribus repellendus quam rem enim voluptates facere quibusdam mollitia voluptas animi labore, quasi dicta repellat laudantium molestias aperiam incidunt perspiciatis! Saepe reiciendis dignissimos velit ex aliquam eligendi animi dicta eum obcaecati porro officiis quisquam eos minima, hic inventore distinctio nostrum, excepturi quaerat molestias tempore! Vero iusto molestiae ipsam. Perspiciatis, odit ab optio dolore inventore magni eveniet dolorem ea voluptatum, maxime explicabo reiciendis voluptates, similique minima tempore adipisci non commodi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aliquam aliquid odio. Ea est quae debitis unde repellat facilis doloribus alias? Nulla laudantium, quisquam sed non illum laborum est expedita quibusdam ut. Soluta recusandae fuga magnam temporibus corporis! Cum reprehenderit porro incidunt, architecto eos quas minima, laboriosam, et magni harum odio omnis. Esse sunt ea recusandae dolore dolorum molestiae perferendis reiciendis mollitia sapiente maxime cum sed, dignissimos porro dicta eligendi? Exercitationem voluptatibus doloremque placeat officiis sunt sit molestias et, aut doloribus autem ipsa, fugit impedit nisi facilis repellat nesciunt ad aliquam ea rerum qui modi corrupti non possimus! Aliquam, deleniti!
            </div>
        </div>
        <div className=''>
            <h4 className='text-6xl font-bold text-[#d84f57] mb-8'>Red Bus Help</h4>
            <img src={help_img} alt="" />
            <h4 className='text-6xl font-bold text-[#d84f57] my-8'>24/7 Customer Support</h4>
        </div>
      </section>
    </div>
  )
}

export default Help
