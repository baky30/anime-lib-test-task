import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonMovieItem: React.FC<{count: number}> = ({ count }) => {
    return (
        <>
            {Array(count)
                .fill(0)
                .map((item, index) => (
                    <div className={"bg-white relative"} key={index}>
                        <Skeleton height={180}/>
                        <div className={"py-4 px-16"}>
                            <Skeleton count={2}/>
                        </div>
                        <div className={"absolute bottom-4 right-3"}>
                            <Skeleton circle width={25} height={25}/>
                        </div>
                    </div>
            ))}
        </>
    )
};

export default SkeletonMovieItem;
