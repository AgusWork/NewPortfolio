interface ShortCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<ShortCard> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl  font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground 2xl:text-xl">{description}</p>
    </div>
  );
};

export default Card;
