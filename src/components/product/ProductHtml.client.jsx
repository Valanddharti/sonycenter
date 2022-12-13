/* eslint-disable prettier/prettier */
import {MediaFile} from '@shopify/hydrogen/client';
import {ATTR_LOADING_EAGER} from '~/lib/const';

export function ProductHtml({media}) {
  if (!media.length) {
    return null
  }
  return (
  <>
  <div className='container mx-auto'> 
  <div className='text-lead font-medium pb-6'>Feature</div>
    <div className='grid-rows-4 grid-flow-col gap-4 px-4'>
      <div className="flex flex-col grid lg:grid-cols-4 gap-4 md:gap-8 md:grid-cols-3">
       
        <div> 
          <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature4.webp?v=1670500017' alt="feature"/>
          <div className=''>
            <div className='text-base	font-bold pb-2'>Headphones that cancel out the world </div>
            <p className='text-base'>Whether you&apos;re taking a long-haul flight or commuting to work, the Automatic Artificial Intelligence Noise 
            Cancelling function (AINC) constantly analyses environmental ambient sound components and automatically selects the most effective 
            noise cancelling mode for your surroundings.</p>
          </div>
        </div>

        <div>
          <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature12.webp?v=1670500017' alt="feature"/>
          <div className=''>
            <div className='text-base	font-bold pb-2'>Take control of what you hear with Dual Noise Sensor Technology </div>
            <p className='text-base'>Dual microphones feeding forwards and backwards mean the WH-CH710N headphones catch more ambient sounds than ever before. So,
                    whether you&apos;re trying to block out city traffic or office chatter, you&apos;ll be able to get completely lost in whatever you&apos;re listening to.
            </p>
          </div>
        </div>
        <div>
          <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature11.webp?v=1670500017' alt="feature"/>
          <div className=''>
            <div className='text-base	font-bold pb-2'>NFC™ One-touch for instant music</div>
            <p className='text-base'>Near Field Communication (NFC™) lets you start streaming your music with just one touch. Simply touch your 
            selected NFC™-enabled device on the on-body N-mark for a quick and easy connection.</p> 
          </div>
        </div>
        <div>
          <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature3.webp?v=1670500017' alt="feature"/>
          <div className=''>
            <div className='text-base	font-bold pb-2'>Quality streaming via Bluetooth®</div>
            <p className='text-base'>No NFC™? No problem. Connect your device manually by turning on the Bluetooth® in your device settings menu.</p>
          </div>
          
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature13.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Designed with style in mind</div>
            <p className='text-base'>The WH-CH710N headphones have a sleek, rounded design that looks as good as they sound.</p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature9.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>The perfect fit</div>
            <p className='text-base'>With an adjustable metal slider, you can make your headphones the perfect size for you. This means more comfort for long listening.</p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature1.webp?v=1670500001' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>All-day comfort</div>
            <p className='text-base'>Soft, oval-shaped earpads mean you&apos;ll never need to take a break from your favourite music, movies and TV shows.</p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature6.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Travel easily with swivel design </div>
            <p className='text-base'>The WH-CH710N earcups swivel flat, so whether you&apos;re packing a suitcase for travel or a backpack after work, you can transport them safely wherever you go. </p>
          </div>
        </div>
         <div>
          <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature2.webp?v=1670500016' alt="feature"/>
          <div className=''>
            <div className='text-base	font-bold pb-2'>Quick charging </div>
            <p className='text-base'>A built-in Li-ion battery means that you can listen to up to 35 hours of audio on a single charge. Plus, with quick charging, you get 60 minutes of playback from just 10 minutes of charging. </p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature10.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Customise your sound</div>
            <p className='text-base'>Ambient Sound mode puts you in complete control of your listening experience. Switch it on, and you&apos;ll be able to listen to your music, while still hearing the essential everyday sounds that keep you safe, like traffic noise and transport announcements.</p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature5.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Never miss a beat with 30-mm drivers</div>
            <p className='text-base'>The new 30 mm drivers achieve a pure, clear sound even with lightweight and comfortable headphones, ideal for reproducing a range of frequencies, from low beats to high vocals. </p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature8.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Hands-free help from your assistant</div>
            <p className='text-base'>A simple button press connects you to your smartphone&apos;s voice assistant to get directions, play music, and communicate with contacts. </p>
          </div>
        </div>
        <div>
        <img className='inline pb-6' src='https://cdn.shopify.com/s/files/1/1885/4235/files/feature7.webp?v=1670500017' alt="feature"/>
        <div className=''>
            <div className='text-base	font-bold pb-2'>Clearer hands-free calling </div>
            <p className='text-base'>Conversation flows freely with easy, hands-free calling. Leave your phone where it is, just speak. WH-CH710N delivers clearer voice quality to the other person on the phone.</p>
          </div>
        </div>
      </div>
      </div>
  </div>
  </>
  );
}