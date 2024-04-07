import '../../styles/titleContainer.scss';

const TitleContainer = ({title, para}) => {
  return (
    <div className="titleContainer">
      <p>{para}</p>
      <h1>{title}</h1>
    </div>
  )
}

export default TitleContainer