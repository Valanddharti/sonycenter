import { Carousel } from 'react-responsive-carousel';
import { ReactDOM } from 'react';
import react from 'react';
import {MediaFile} from '@shopify/hydrogen/client';
import {ATTR_LOADING_EAGER} from '~/lib/const';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  useShopQuery,
  gql,
} from '@shopify/hydrogen';
import {MEDIA_FRAGMENT} from '~/lib/fragments';

export function ProductSlider({className,params}) {
  const {handle} = params;
  
    if (!media.length) {
      return null;
    }
    const {
      data: {product, shop},
    } = useShopQuery({
      query: PRODUCT_QUERY,
      variables: {
        country: countryCode,
        language: languageCode,
        handle,
      },
      preload: true,
    });
    if (!product) {
      return <NotFound type="product" />;
    }
    const {title, vendor, descriptionHtml, id, productType} = product;
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
      <div
        className={`md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${className}`}
      >
        
        <Carousel>
        <img src="assets/2.jpeg" />
        <img src="assets/2.jpeg" />
        <img src="assets/2.jpeg" />
        <img src="assets/2.jpeg" />
        
         {media.map((med, i) => {
          let mediaProps = {};
          const isFirst = i === 0;
          const isFourth = i === 3;
          const isFullWidth = i % 3 === 0;
  
          const data = {
            ...med,
            image: {
              // @ts-ignore
              ...med.image,
              altText: med.alt || 'product image',
            },
          };
    
          switch (med.mediaContentType) {
            case 'IMAGE':
              mediaProps = {
                width: 800,
                widths: [400, 800, 1200, 1600, 2000, 2400],
              };
              break;
            case 'VIDEO':
              mediaProps = {
                width: '100%',
                autoPlay: true,
                controls: false,
                muted: true,
                loop: true,
                preload: 'auto',
              };
              break;
            case 'EXTERNAL_VIDEO':
              mediaProps = {width: '100%'};
              break;
            case 'MODEL_3D':
              mediaProps = {
                width: '100%',
                interactionPromptThreshold: '0',
                ar: true,
                loading: ATTR_LOADING_EAGER,
                disableZoom: true,
              };
              break;
          }
  
          if (i === 0 && med.mediaContentType === 'IMAGE') {
            mediaProps.loading = ATTR_LOADING_EAGER;
          }
  
          const style = [
            isFullWidth ? 'md:col-span-2' : 'md:col-span-1',
            isFirst || isFourth ? '' : 'md:aspect-[4/5]',
            'aspect-square snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full',
          ].join(' ');

          return (
            <div
                className={style}
                // @ts-ignore
                key={med.id || med.image.id}
              >
                <MediaFile
                  tabIndex="0"
                  className={`w-full h-full aspect-square fadeIn object-cover`}
                  data={data}
                  sizes={
                    isFullWidth
                      ? '(min-width: 64em) 60vw, (min-width: 48em) 50vw, 90vw'
                      : '(min-width: 64em) 30vw, (min-width: 48em) 25vw, 90vw'
                  }
                  // @ts-ignore
                  options={{
                    crop: 'center',
                    scale: 2,
                  }}
                  {...mediaProps}
                />
            </div>
           );
           
          })}
           
        </Carousel>
       
   
      </div>
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