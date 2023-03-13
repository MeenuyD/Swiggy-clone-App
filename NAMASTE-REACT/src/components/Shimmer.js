const Shimmer = () => {
  return (
    <div className="flex-wrap p-2 m-5">
      {Array(30 )
        .fill("")
        .map((e,index) => (
          <div key={index} className="bg-gray-100 container mx-auto border-spacing-5 h-40 w-98  px-10  flex-wrap"></div>
        ))}
    </div>
  );
};
export default Shimmer;
