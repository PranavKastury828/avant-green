export const CardBare = ({ image }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md transition duration-[400ms] group ease-in-out relative group">
      <img
        src={image.src}
        alt="Card Image"
        className="w-full h-full max-h-[550px] object-cover group-hover:scale-110 transition duration-[400ms] ease-in-out"
      />
    </div>
  );
};