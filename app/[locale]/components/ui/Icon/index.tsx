import { FaAward, FaGlobe } from "react-icons/fa"; 

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  let icon = null;

  switch (name) {
    case "award":
      icon = <FaAward className={className} />;
      break;
    case "globe":
      icon = <FaGlobe className={className} />;
      break;
    default:
      icon = null;
  }

  return <>{icon}</>;
};

export default Icon;
