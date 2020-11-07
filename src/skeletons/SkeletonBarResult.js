import React from 'react';
import SkeletonElements from './SkeletonElements';
import './Skeleton.css'

const SkeletonBarResult = () => {
    return (
        <div className="skeleton__wrapper">
            <SkeletonElements type="img" />
            <div className="skeleton__barresult">               
                <SkeletonElements type="text" />
                <SkeletonElements type="title" />
                <p>_______</p>
                <SkeletonElements type="text" />
                <SkeletonElements type="text" />
                <div>
                <SkeletonElements type="title" />
                </div>
            </div>           
        </div>
    );
};

export default SkeletonBarResult;