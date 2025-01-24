const Dimensions = ({dimensions}: {dimensions: any}) => {
  return (
    <span className="flex flex-col gap-2 mt-5 max-sm:text-sm">
      <h3 className="text-darkPrimary capitalize font-clash text-nr">
        dimensions
      </h3>
      <span className="h-20 w-60 grid grid-cols-3 grid-rows-2">
        {dimensions && ["height", "width", "depth", dimensions.height, dimensions.width, dimensions.depth].map(
          (val, ind) => (
            <span key={ind} className="h-full w-full flex items-center">
              <h3
                className={`capitalize ${
                  ind > 2 ? "text-text2" : "text-darkPrimary font-clash"
                }`}
              >
                {val}
              </h3>
            </span>
          )
        )}
      </span>
    </span>
  );
};
export default Dimensions;
