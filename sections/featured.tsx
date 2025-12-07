// import FeaturedCard from '@/components/cards/featured/featured-card';
import ExpandableFeatured from '@/components/expandable/expandable-featured';
import Heading from '@/components/heading/heading';

// import { featuredData } from '@/data';

// const MainFeatured = featuredData[0];

const FeaturedSection = () => {
  return (
    <div className='pt-24 px-3 lg:px-8'>
      {/* { Heading} */}
      <Heading number='01' title_1='Finished' title_2='Work' />
      {/* { Main featured card} */}
      {/* <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      /> */}
      <div className='mt-24'>
        <ExpandableFeatured />
      </div>
    </div>
  );
};

export default FeaturedSection;
