import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HeroEn } from './HeroEn';

const BaseEn = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeroEn />
    <Footer />
  </div>
);

export { BaseEn };
