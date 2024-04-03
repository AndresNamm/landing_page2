import Link from 'next/link';

import { Button } from '@/button/Button';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { LogoEn } from './LogoEn';

const HeroEn = () => (
  <Background color="bg-cream">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<LogoEn xl />}>
        <li>
          <Link href="/" color="lightBlue hover:bg-lightBlue-600">
            ee
          </Link>
        </li>
        <li></li>
      </NavbarTwoColumns>
    </Section>
    <div>
      <header className="pb-4 text-center">
        <h1 className="text-3xl font-bold text-red-500 ">
          Lactation consultant with wide long-term experience
        </h1>
      </header>
    </div>
    <div className="flex justify-center">
      <div className="max-w-xl text-left leading-normal">
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b className="text-red-500">lactation consultant´s home visits</b>{' '}
            (Estonian, Russian and English)
          </li>
          <li>lectures about breastfeeding in Estonian and English</li>
          <li>24/7 lactation consultant in Your pocket (special service)</li>
          <li>online-consultations all over the world</li>
          <li>
            pre-birth and post birth consultations: low milk supply, pain,
            breast pathologies, special needs, relactations, weaning
          </li>
        </ul>
        <p className="pt-4">
          <u>
            <b>Pricelist</b>
          </u>
        </p>
        <p>Home visit 50 EUR</p>
        <p>
          One month subsription for 24/7 lactation consultant in Your pocket 250
          EUR/month
        </p>
        <p>Agreed price for lectures</p>
        <p></p>
        <p className="pt-4">
          <u>
            <b>Contact</b>
          </u>
        </p>
        <p>Anni Anastasia Pilvar</p>
        <p>
          <u>anni.pilvar@gmail.com</u>
        </p>

        <p>+372 53 44 70 89</p>
        <Link href="https://www.facebook.com/imetamisnoustamine">Facebook</Link>
      </div>
    </div>
    <Section yPadding="pt-5 pb-9">
      <img
        src="/assets/images/boob.jpg"
        alt="Anni Pilvar"
        className="mx-auto"
      />
    </Section>
    <header className="text-center">
      <Link href="https://www.facebook.com/imetamisnoustamine">
        <Button xl>More info on my Facebook page</Button>
      </Link>
    </header>
  </Background>
);

export { HeroEn };
