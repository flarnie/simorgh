import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { uzbek as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/uz';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `uz-Cyrl`,
    articleAuthor: `https://www.facebook.com/#!/bbcuzbek`,
    articleTimestampPrefix: 'Updated',
    atiAnalyticsAppName: 'news-uzbek',
    atiAnalyticsProducerId: '96',
    brandName: "BBC News O'zbek",
    product: 'BBC News',
    serviceLocalizedName: "O'zbek",
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/uzbek.png',
    defaultImageAltText: "BBC News O'zbek",
    dir: `ltr`,
    externalLinkText: ', external',
    imageCaptionOffscreenText: 'Сүрөттүн түшүндүрмөсү, ',
    videoCaptionOffscreenText: 'Видеонун түшүндүрмөсү, ',
    audioCaptionOffscreenText: 'Аудионун түшүндүрмөсү, ',
    defaultCaptionOffscreenText: 'Caption, ',
    imageCopyrightOffscreenText: 'Сүрөттүн булагы, ',
    locale: `uz-UZ`,
    datetimeLocale: `uz`,
    service: 'uzbek',
    serviceName: "News O'zbek",
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcuzbek',
    twitterSite: '@bbcuzbek',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Бош саҳифа',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'Баарын көрүү',
      home: 'Бош саҳифа',
      currentPage: 'Жорий саҳифа',
      skipLinkText: 'Саҳифага ўтиш',
      relatedContent: 'Тема боюнча башка макалалар',
      mediaAssetPage: {
        mediaPlayer: 'Медиа плейер',
        audioPlayer: 'Аудио плейер',
        videoPlayer: 'Видео плейер',
      },
      error: {
        404: {
          statusCode: '404',
          title: '404- Саҳифа топилмади',
          message:
            'Бунга сабаб Сиз веб саҳифа адресини нотўғри ёзган бўлишингиз мумкин. Илтимос, текшириб қайтадан ёзинг',
          solutions: [
            'Double checking the url',
            'Hitting the refresh button in your browser',
            'Searching for this page using the BBC search bar',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'BBC Бош саҳифа',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/uzbek',
        },
        500: {
          statusCode: '500',
          title: '500- Хато',
          message: 'Муаммо пайдо бўлди. Илтимос, саҳифани янгиланг',
          solutions: [
            'Hitting the refresh button in your browser',
            'Coming back again later',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'BBC Бош саҳифа',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/uzbek',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'Биз шахсий ҳаёт махфийлиги ва Куки(Cookies)га оид сиёсатимизни янгиладик',
          description: {
            uk: {
              first:
                'Биз шахсий ҳаёт махфийлиги ва Куки(Cookie)га оид сиёсатимизга айрим муҳим ўзгаришларни киритдик. Ва бу нарса сиз ва сизнинг маълумотингиз учун нимани англатиши ҳақида сизни бохабар этиш истагидамиз.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Биз шахсий ҳаёт махфийлиги ва Куки(Cookie)га оид сиёсатимизга айрим муҳим ўзгаришларни киритдик. Ва бу нарса сиз ва сизнинг маълумотингиз учун нимани англатиши ҳақида сизни бохабар этиш истагидамиз.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Маъқул',
          reject: 'Нималар ўзгарди?',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Кукис(Cookies)га рози эканингизни билдиринг',
          description: {
            uk: {
              first: 'We use ',
              linkText: 'cookies',
              last:
                ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'We and our partners use technologies, such as ',
              linkText: 'cookies',
              last:
                ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Yes, I agree',
          reject: 'No, take me to settings',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Аудио',
        photogallery: 'Фотогалерея',
        video: 'Видео',
        bbc_uzbek_radio: {
          title: 'BBC Uzbek Radio Dasturi',
          subtitle: 'O’zbekiston, mintaqa va dunyo yangiliklari O’zbek tilida',
        },
        bbc_uzbek_tv: {
          title: 'Bi-bi-si O‘zbek - Afg‘oniston uchun TV dastur',
          subtitle:
            'Dastur haftada 5 kun - dushanbadan juma kuniga qadar Toshkent vaqti bilan soat 18.30 -18.40 da efirga uzatiladi',
        },
        listen: 'Listen',
        watch: 'Watch',
        liveLabel: 'LIVE',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'Most read',
      lastUpdated: 'Last updated: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Read about our approach to external linking.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'Terms of Use',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'Privacy Policy',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/contact/',
          text: 'Contact the BBC',
        },
      ],
      copyrightText: 'BBC. BBC ташқи интернет саҳифалар учун масъул эмас',
    },
    fonts: [],
    timezone: 'GMT',
    navigation: [
      {
        title: 'Бош саҳифа',
        url: '/uzbek',
      },
      {
        title: 'Lotinda',
        url: '/uzbek/lotin',
      },
      {
        title: 'Ўзбекистон',
        url: '/uzbek/uzbekistan',
      },
      {
        title: 'Минтақа',
        url: '/uzbek/central_asia',
      },
      {
        title: 'Дунё',
        url: '/uzbek/world',
      },
      {
        title: 'Спорт',
        url: '/uzbek/sport',
      },
      {
        title: 'Маданият',
        url: '/uzbek/topics/6a73afa3-ea6b-45c1-80bb-49060b99f864',
      },
      {
        title: 'Илм-Фан',
        url: '/uzbek/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Технология',
        url: '/uzbek/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Аудио',
        url: '/uzbek/media/audio',
      },
      {
        title: 'Видео',
        url: '/uzbek/media/video',
      },
      {
        title: 'Суратлар',
        url: '/uzbek/media/photogalleries',
      },
    ],
  },
};

export default withContext(service);
