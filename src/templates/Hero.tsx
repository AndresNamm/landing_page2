import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-cream">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link
            href="https://www.facebook.com/imetamisnoustamine"
            color="lightBlue hover:bg-lightBlue-600"
          >
            Rohkem infot Facebooki lehel
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <div>
      <header className="pb-4 text-center">
        <h1 className="text-3xl font-bold text-red-500 ">Imetamisnõustamine</h1>
      </header>
    </div>
    <div className="flex justify-center">
      <div className="max-w-xl text-left leading-normal">
        <p>Pikaajalise ja laia kogemusega imetamisnõustaja</p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b className="text-red-500">Imetamisnõustaja koduvisiidid Tartus</b>{' '}
            (eesti, vene ja inglise keeles)
          </li>
          <li>Imetamisealased loengud (eesti ja inglise keeles)</li>
          <li>24/7 imetamisnõustaja Sinu taskus (teenus kokkuleppel)</li>
          <li>Nõustamine video teel üle maailma</li>
          <li>
            Sünnituseelne ja sünnitusjärgne imetamisnõustamine (piima vähesus,
            valu, rinna haigusseisundid, erivajadused, relaktatsioon,
            võõrutamine)
          </li>
        </ul>
        <p className="pt-4">
          <u>
            <b>Hinnakiri</b>
          </u>
        </p>
        <p>Koduvisiit 50 EUR</p>
        <p>Kuuajane 24/7 imetamisnõustaja teenus 250 EUR/kuu</p>
        <p>Loengute hind kokkuleppel</p>
        <p></p>
        <p className="pt-4">
          <u>
            <b>Kontakt</b>
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
  </Background>
);

export { Hero };
