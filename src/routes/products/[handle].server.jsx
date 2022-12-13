/* eslint-disable prettier/prettier */
import React, { useRef, useState ,Suspense} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  gql,
  ProductOptionsProvider,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useServerAnalytics,
  Metafield,
  useShopQuery,
  Link,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT} from '~/lib/fragments';
import {getExcerpt} from '~/lib/utils';
import {NotFound, Layout, ProductSwimlane} from '~/components/index.server';
import {
  Heading,
  ProductDetail,
  ProductForm,
  ProductGallery,
  Section,
  Text,
  ProductSlider,
  // ProductHtml
} from '~/components';
// import Search from '../search.server';


export default function Product({params}) {
  const {handle} = params;
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {
    data: {product, shop},
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle:'sony-wh-ch710n-wireless-noise-cancellation-headphones-with-35-hrs-battery-life-demoproduct',
    },
    preload: true,
  });
//  console.log("data",product.Feature.value);



  if (!product) {
    return <NotFound type="product" />;
  }
  const {media, title, vendor, descriptionHtml, id, productType} = product;
  const {shippingPolicy, refundPolicy} = shop;
  const {
    priceV2,
    id: variantId,
    sku,
    title: variantTitle,
  } = product.variants.nodes[0];

  useServerAnalytics({
    shopify: {
      canonicalPath: `/products/${handle}`,
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
      products: [
        {
          product_gid: product.id,
          variant_gid: variantId,
          variant: variantTitle,
          name: title,
          brand: vendor,
          category: productType,
          price: priceV2.amount,
          sku,
        },
      ],
    },
  });

  return (
    <Layout>
       <Suspense>
        <Seo type="product" data={product} />
      </Suspense>    
        <ProductOptionsProvider data={product}>
          
        <Section padding="x" className="px-0">
          <div className="grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            {/* <ProductGallery
              media={media.nodes}
              className="w-screen md:w-full lg:col-span-2"
            /> */}
              <ProductSlider  media={media.nodes} className="w-screen md:w-full lg:col-span-2"/>  
              <div className="sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll">
              <section className="flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0">
                <div className="grid gap-2">
                  <Heading as="h1" format className="whitespace-normal">
                    {title}
                  </Heading>
                
                  {vendor && (
                    <Text className={'opacity-50 font-medium'}>{vendor}</Text>
                  )}
                </div>
                <ProductForm />
                <div className="grid gap-4 py-4">
                  {/* {descriptionHtml && (
                    <ProductDetail
                      title="Product Description"
                      content={descriptionHtml}
                    />
                  )} */}
                  {/* {shippingPolicy?.body && (
                    <ProductDetail
                      title="Shipping"
                      content={getExcerpt(shippingPolicy.body)}
                      learnMore={`/policies/${shippingPolicy.handle}`}
                    />
                  )}
                  {refundPolicy?.body && (
                    <ProductDetail
                      title="Returns"
                      content={getExcerpt(refundPolicy.body)}
                      learnMore={`/policies/${refundPolicy.handle}`}
                    />
                  )} */}
                </div>
              </section>
            </div>
            
          </div> 
              <div className='container mx-auto inline-grid gap-4'>
                <ul className='main_set main-list-of-items product-tab-section'>
                  <li>
                    <a href='#ProductDetail' className='active details-section active1'>Details</a>
                  </li>
                  <li>
                    <a href='#Feature' className='active details-section'>Feature</a>
                  </li>
                  <li>
                    <a href="http://" className='active details-section'>Reviews</a>
                  </li>
                  <li>
                    <a href="http://" className='active details-section'>Specification</a>
                  </li>
                  <li>
                    <a href="http://" className='active details-section'>Questions&Answers</a>
                  </li>
                  
                </ul>
                <div className='product-main' id="ProductDetail">
                  <div className="product-tab-block">
                    <ProductDetail 
                      content={descriptionHtml}>
                    </ProductDetail>
                  </div>
                </div>
                <div className='product-main' id="Feature">
                  <div className="product-tab-block">
                    <div
                      className="dark:prose-invert"
                      dangerouslySetInnerHTML={{__html: product?.Feature?.value}}
                    />
                  </div>
                </div>
              </div> 
        </Section>
        <Suspense>
          <ProductSwimlane title="Related Products" data={id} />
        </Suspense>
        
      </ProductOptionsProvider>   
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>  

     
    </Layout>
  );
}
const PRODUCT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      Feature: metafield(namespace: "custom", key: "feature") {
        value
      }
      productType
      variants(first: 100) {
        nodes {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
         
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;










