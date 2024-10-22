import React from 'react';
import FeatureItem from './FeatureItem';

const Features = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 mb-12"> {/* Adjusted to move upwards */}
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-20">
                <FeatureItem
                    text={"Complete Tool Roadmaps"}
                    description={"Follow structured learning paths for DevOps Tools and Cloud Platforms."}
                />
                <FeatureItem
                    text={"Personalized learning"}
                    description={"Practice at your own pace, filling gaps in understanding and accelerating learning."}
                />
                <FeatureItem
                    text={"Community-Driven Insights"}
                    description={"Stay updated with the latest industry trends and best practices shared by professionals."}
                />
            </div>
        </section>
    );
};

export default Features;
