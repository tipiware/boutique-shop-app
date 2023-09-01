import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
    
      <div className='w-screen  px-4 sm:px-5  lg:px-28 pt-35 ' >
      <h1 className='text-5xl pt-5 pb-2 font-AvenirHeavy'>Boutique & fashion</h1>
        <div className="flex md:gap-8 md:flex-row flex-col w-full items-center">
              <div className="mx-auto md:w-3/4 md:max-w-lg  max-w-xs">
                <Image
                  src="/img/boutique.jpg"
                  width={500}
                  height={500}
                  alt=""
                  objectFit="contain"
                />
              </div>
              <div className="flex-grow ml-auto ">
                <Fade bottom>
                  <p>
                    Boutique stores typically prioritize personalized customer service, attention to detail, and a distinct shopping experience that sets them apart from larger, more mainstream retailers.
                  </p>
                </Fade>
              </div>
          </div>
        <div>
          <h1 className='text-5xl pb-5 pt-5 font-AvenirHeavy'>Store Policy</h1>
          <p>Last updated: August 05, 2022</p>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          <p>At boutique store we are dedicated to providing a shopping experience that reflects our commitment to quality, transparency, and customer satisfaction. Our policy revolves around ensuring every customer feels valued and esteemed. We take pride in offering meticulously curated collections that meet the highest standards of craftsmanship and design. If, for any reason, you are not completely satisfied with your purchase, our flexible return and exchange policy allows for hassle-free solutions within 30 days of purchase. We are equally committed to safeguarding your personal information, employing the latest security measures to ensure your privacy. At "Elysian Haven," our mission is to create an atmosphere where elegance and trust intertwine, fostering a lasting relationship with each individual who walks through our doors.</p>

          <h1 className='text-5xl pt-10 pb-5 font-AvenirHeavy'>Terms and condition</h1>
          <p>By engaging with boutique store, you agree to the following Terms and Conditions:</p>
          <ul className='list-disc pl-8 pb-8'>
            <li>
              <p><strong>Product Availability</strong>: All products are subject to availability, and we reserve the right to modify, discontinue, or update items without prior notice.</p>
            </li>
            <li>
              <p><strong>Content Accuracy</strong>: The content provided, including images, descriptions, and pricing, is for informational purposes and does not constitute a legally binding offer. </p>
            </li>
            <li>
              <p><strong>Price Variability</strong>: Prices may vary between in-store and online purchases, and we reserve the right to adjust pricing without prior notice.</p>
            </li>
            <li>
              <p><strong>Returns and Exchanges:</strong> Returns and exchanges are accepted within 30 days of purchase. Items must be unused and in their original condition with accompanying receipts. </p>
            </li>
            <li>
              <p><strong>Privacy Protection</strong>: We prioritize your privacy and employ stringent security measures to protect your personal information. </p>
            </li>
            <li>
              <p><strong>Liability Limitation</strong>: Boutique is not liable for any loss, damage, or injury resulting from the use of our products or services. </p>
            </li>
            <li>
              <p><strong>Dispute Resolution</strong>: Any disputes will be subject to the jurisdiction of the appropriate courts. </p>
            </li>
            <li>
              <p><strong>Acceptance</strong>: Your continued interaction with Boutique implies your acceptance of these Terms and Conditions.</p>
            </li>
          </ul>
      </div>
    </div>
    </>
  );
}

export default About;
