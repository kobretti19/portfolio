import ExpandableFeatured from '@/components/expandable/expandable-featured';
import Heading from '@/components/heading/heading';

const FeaturedSection = () => {
  return (
    <div id='featured' className='pt-24 px-3 lg:px-8 scroll-mt-8'>
      <Heading number='01' title_1='Finished' title_2='Work' />
      <div className='mt-24'>
        <ExpandableFeatured />
      </div>
    </div>
  );
};

export default FeaturedSection;
