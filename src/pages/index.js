import Banner from "../components/Banner/Banner";
import ProductFeed from "../components/Product/ProductFeed";
import getCategories from "../util/getCategories";
import getProducts from "../util/getProducts";
import { connectToDatabase } from "../util/mongodb";

export default function Home(props) {
  const { products, error } = getProducts(props?.products);
  const { categories, error: err } = getCategories(props?.categories);

  if (err) {
    console.error(err);
  }

  if (error) {
    console.error(error);
  }
  return (
    <>
      <div className='w-screen  px-4 sm:px-5  lg:px-28 pt-35 ' >
      <Banner />
      <h1 className='text-5xl pt-2 pb-5 font-AvenirHeavy'>Boutique Shop</h1>
      <p>Welcome to "Luminous Reverie," a haven of sophistication nestled in the heart of the city. Step into a world where style meets substance, where every corner holds a treasure waiting to be discovered. Our boutique store is more than just a shopping destination; it's an experience crafted for the discerning connoisseur of elegance. From the moment you cross our threshold, you'll be transported into a realm of curated luxury, where meticulously chosen pieces blend seamlessly with the ambiance of refined comfort. Whether you seek to redefine your wardrobe or find the perfect statement piece, Luminous Reverie invites you to embark on a journey of timeless allure and endless inspiration.</p>

      <h1 className='text-5xl pt-16 pb-5 font-AvenirHeavy'>Our History</h1>
      <p>Founded in the enchanting year of 2022 by the visionary Mr Ooi, boutique fashion boasts a history as rich and captivating as the garments it houses. Born out of Isabella's fervent desire to weave art into fashion, the boutique has stood the test of time, becoming a beacon of elegance through generations. From its humble origins as a small atelier, where Isabella painstakingly crafted each piece by hand, to its current status as a globally renowned fashion destination, Aurelia's Legacy has etched its name in the annals of style. The store's journey is marked by a commitment to transcending trends, embracing innovation while treasuring tradition. Today, as it stands at the forefront of haute couture, "Aurelia's Legacy" remains a tribute to its founder's indomitable spirit and a testament to the enduring power of sartorial artistry.</p>
      </div>
      <ProductFeed products={products} categories={categories} />

    </>
  );
}

export const getStaticProps = async () => {
  const { db } = await connectToDatabase();
  let products = await db.collection("products").find({}).toArray();
  products = JSON.parse(JSON.stringify(products));
  let categories = await db.collection("categories").find({}).toArray();
  categories = JSON.parse(JSON.stringify(categories));

  return {
    props: {
      products,
      categories,
    },
    revalidate: 1,
  };
};
