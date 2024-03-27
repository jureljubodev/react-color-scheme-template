import Image from 'react-bootstrap/Image';

interface Props {
    imgLink: string,
}

const ExampleCarouselImage: React.FC<Props> = ({imgLink}) => {
  return (
    <>
    <Image src={imgLink} fluid style={{maxHeight: "90vh", width: "100%"}} rounded />
    </>
  )
}

export default ExampleCarouselImage