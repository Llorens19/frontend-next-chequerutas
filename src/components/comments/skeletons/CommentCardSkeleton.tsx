const CommentCardSkeleton = () => {
  return (
    <div className="flex pt-2 gap-4 border-color2 w-full animate-pulse">
      <div className="w-12 h-12 bg-color3 rounded-full"></div>
      <div className="w-full">
        <div className="flex gap-4 items-center">
          <div className="h-4 bg-color3 rounded w-1/4"></div>
          <div className="h-3 bg-color3 rounded w-1/6"></div>
        </div>
        <div className="h-4 bg-color3 rounded w-3/4 mt-2"></div>
        <div className="h-4 bg-color3 rounded w-2/3 mt-2"></div>

        <div className="flex gap-4 w-full justify-end mt-4">
          <div className="h-3 bg-color3 rounded w-12"></div>
          <div className="h-3 bg-color3 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentCardSkeleton;
