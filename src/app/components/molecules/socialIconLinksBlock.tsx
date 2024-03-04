import { SocialIconLink } from '../atoms/SocialIconLink';
import facebook_svg from '@/images/facebook.svg';
import instagram_svg from '@/images/instagram.svg';
import twitter_svg from '@/images/twitter.svg';
import youtube_svg from '@/images/youtube.svg';

export default function SocialIconLinksBlock() {
  return (
    <div className=' flex  items-start justify-between w-[110px]'>
      <SocialIconLink
        href='https://www.facebook.com/'
        icon={facebook_svg.src}
        altText='facebook'
      />
      <SocialIconLink
        href='https://www.instagram.com/'
        icon={instagram_svg.src}
        altText='instagram'
      />
      <SocialIconLink
        href='https://twitter.com/'
        icon={twitter_svg.src}
        altText='twitter'
      />
      <SocialIconLink
        href='https://www.youtube.com/'
        icon={youtube_svg.src}
        altText='youtube'
      />
    </div>
  );
}
