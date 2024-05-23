import {Helmet} from "react-helmet";
const DynamicHeading = ({title}) => {
  return (
    <Helmet>
        <title>{title} | Travelvago</title>
      </Helmet>
  )
}

export default DynamicHeading