import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElements from './SkeletonElements';

const SkeletonBarResult = ({ theme }) => {
    const themeClass = theme || 'light'

    return (
        <div className={`skeleton__wrapper ${themeClass}`}>
            <Shimmer />
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