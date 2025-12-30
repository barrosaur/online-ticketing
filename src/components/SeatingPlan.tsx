import Image, { ImageProps } from 'next/image'

interface SeatingPlanProps extends ImageProps {
  label:string
}

const SeatingPlan = ({ src, alt, label }: SeatingPlanProps) => {
  const imgSize = 400

  return (
    <div className='flex flex-col justify-center items-center text-xl'>
      <label className='font-bold'>{label}</label>
      <Image
        src={src}
        width={imgSize}
        height={imgSize}
        alt={alt}
      />
    </div>
  )
}

export default SeatingPlan