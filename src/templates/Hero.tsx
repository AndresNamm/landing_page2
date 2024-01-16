import Link from 'next/link';

import { Button } from '@/button/Button';
import { SimpleSection } from '@/layout/SimpleSection';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.facebook.com/annipilvarimetamisnoustaja">
            Rohkem infot Facebooki lehel
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <SimpleSection
      title="Anni Pilvar"
      description="Individuaalne imetamisnõustamine rasedatele ja imetavatele emadele.
      Koduvisiidid Tartus, kokkuleppel Tartumaal. Loenguid ja vestlusringe võimalik tellida üle Eesti."
    ></SimpleSection>
    <Section yPadding="pt-5 pb-9">
      <img
        src="/assets/images/boob.jpg"
        alt="Anni Pilvar"
        className="mx-auto"
      />
    </Section>
    <header className="text-center">
      <Link href="https://www.facebook.com/annipilvarimetamisnoustaja">
        <Button xl>Rohkem infot Facebooki lehel</Button>
      </Link>
    </header>
  </Background>
);

export { Hero };
