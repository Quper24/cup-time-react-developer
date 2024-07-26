import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((_, index) => (
          <div className="skeleton-box" key={index}>
            <div>
              <Skeleton className="skeleton-img" />
            </div>
            <p className="skeleton-clear">
              <Skeleton className="skeleton-h" />
            </p>
            <p className="skeleton-clear">
              <Skeleton className="skeleton-p" />
            </p>
          </div>
        ))}
    </>
  );
};

export default SkeletonLoader;
