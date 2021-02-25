import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { hindi as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Kolkata';
import '@bbc/psammead-locales/moment/hi';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `hi`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'अपडेटेड',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-hindi',
    atiAnalyticsProducerId: '52',
    chartbeatDomain: 'hindi.bbc.co.uk',
    brandName: 'BBC News हिंदी',
    product: 'BBC News',
    serviceLocalizedName: 'हिंदी',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/hindi.png',
    defaultImageAltText: 'BBC News हिंदी',
    dir: `ltr`,
    externalLinkText: ', बाहरी सामग्री',
    imageCaptionOffscreenText: 'इमेज कैप्शन, ',
    videoCaptionOffscreenText: 'वीडियो कैप्शन, ',
    audioCaptionOffscreenText: 'ऑडियो कैप्शन, ',
    defaultCaptionOffscreenText: 'कैप्शन, ',
    imageCopyrightOffscreenText: 'इमेज स्रोत, ',
    locale: `hi-IN`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'hi',
    datetimeLocale: `hi`,
    service: 'hindi',
    serviceName: 'Hindi',
    languageName: 'Hindi',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbchindi',
    twitterSite: '@bbchindi',
    noBylinesPolicy:
      'https://www.bbc.com/hindi/institutional-50223932#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/hindi/institutional-50223932',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle:
      'ब्रेकिंग न्यूज़ समाचार, ताजा खबर | News, latest news, breaking news',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'विज्ञापन',
      },
      recommendationTitle: 'और ये भी पढ़ें',
      seeAll: 'सब देखें',
      home: 'होम पेज',
      currentPage: 'मौजूदा पन्ना',
      skipLinkText: 'सामग्री को स्किप करें',
      relatedContent: 'संबंधित समाचार',
      navMenuText: 'सेक्शन',
      mediaAssetPage: {
        mediaPlayer: 'मीडिया प्लेयर',
        audioPlayer: 'ऑडिया प्लेयर',
        videoPlayer: 'वीडियो प्लेयर',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'पेज नहीं मिला',
          message:
            'माफ़ी चाहते हैं, हम वह पन्ना नहीं दिखा पा रहे हैं जिसे आप ढूँढ रहे हैं. कृपया कोशिश करें:',
          solutions: [
            'URL को दोबारा जांचने की',
            'ब्राउज़र का रिफ़्रेश बटन दबाएं',
            'इस पेज को बीबीसी सर्च बार खोलकर खोजने की कोशिश करें',
          ],
          callToActionFirst: 'विकल्प के तौर पर हमारे ',
          callToActionLinkText: 'होमपेज BBC News हिंदी',
          callToActionLast: ' पर जाएं',
          callToActionLinkUrl: 'https://www.bbc.com/hindi',
        },
        500: {
          statusCode: '500',
          title: 'इंटरनल सर्वर एरर',
          message:
            'माफ़ी चाहते हैं, हम वह पन्ना नहीं दिखा पा रहे हैं जिसे आप ढूँढ रहे हैं. कृपया कोशिश करें:',
          solutions: [
            'ब्राउज़र का रिफ़्रेश बटन दबाएं',
            'कुछ समय बाद कोशिश करें',
          ],
          callToActionFirst: 'विकल्प के तौर पर हमारे ',
          callToActionLinkText: 'होमपेज BBC News हिंदी',
          callToActionLast: ' पर जाएं',
          callToActionLinkUrl: 'https://www.bbc.com/hindi',
        },
      },
      consentBanner: {
        privacy: {
          title: 'हमने अपनी गोपनीयता और कुकीज़ की नीति को अपडेट किया है',
          description: {
            uk: {
              first:
                'हमने अपनी कुकीज़ और गोपनीयता की नीति में अहम बदलाव किए हैं, आपको जानना चाहिए कि इसका आप पर और आपके डेटा पर क्या असर होगा.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'हमने अपनी कुकीज़ और गोपनीयता की नीति में अहम बदलाव किए हैं, आपको जानना चाहिए कि इसका आप पर और आपके डेटा पर क्या असर होगा.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ओके',
          reject: 'जानें कि क्या बदला है',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'हमें बताएं कि आप कुकीज़ को लेकर सहमत हैं',
          description: {
            uk: {
              first: 'हम ',
              linkText: 'कुकीज़',
              last:
                ' का इस्तेमाल आपको बेहतर ऑनलाइन सेवाएं देने के लिए करते हैं. हमें बताएं कि आप इन सभी कुकीज़ से सहमत हैं.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'हम और हमारे पार्टनर इस तरह की कुछ तकनीकों का इस्तेमाल करते हैं ',
              linkText: 'कुकीज़',
              last:
                ' का इस्तेमाल करके हम आपके ब्राउज़िंग डेटा की ज़रिए आपको बेहतर और ख़ास तौर पर आपके लिए सेवाएं देेते हैं. इससे हमें आपको सही कंटेंट और उपयुक्त विज्ञापन दिखाने में मदद मिलती है. हमें बताएं कि क्या आप इस पर राज़ी हैं.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'हां, मैं राज़ी हूं',
          reject: 'नहीं, मुझे सेटिंग्स पर ले चलें',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'प्लेबैक आपके उपकरण पर नहीं हो पा रहा',
        contentExpired: 'यह सामग्री अब उपलब्ध नहीं है.',
        contentNotYetAvailable: 'यह कार्यक्रम अभी चलने के लिए तैयार नहीं है.',
        audio: 'ऑडियो',
        photogallery: 'फ़ोटो गैलरी',
        video: 'वीडियो',
        bbc_hindi_radio: {
          title: 'बीबीसी हिंदी',
          subtitle:
            'दुनिया और भारत की ख़बरें, विश्लेषण और फ़ीचर. हिंदी में संवाद के सूत्रधार',
        },
        bbc_hindi_tv: {
          title: 'दुनिया',
          subtitle:
            'बीबीसी दुनिया में देखिए ताज़ा अंतरराष्ट्रीय और क्षेत्रीय ख़बरें, उनका विश्लेषण और सोशल मीडिया की हलचल. साथ ही होंगी कई रोचक ख़बरें भी.',
        },
        listen: 'सुनिए',
        watch: 'देखिए',
        listenLive: 'लाइव सुनें',
        liveLabel: 'लाइव',
        nextLabel: 'अगला',
        previousRadioShow: 'पिछला रेडियो शो',
        nextRadioShow: 'अगला रेडियो शो',
        duration: 'अवधि',
        recentEpisodes: 'प्रसारण का समय',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'वीडियो कैप्शन ',
          text: 'चेतावनी: तीसरे पक्ष की सामग्री में विज्ञापन हो सकते हैं.',
        },
        fallback: {
          text: 'सामग्री् उपलब्ध नहीं है',
          linkText: 'सोशल नेटवर्क पर और देखिए',
          linkTextSuffixVisuallyHidden: ' बाहरी सामग्री',
          warningText:
            'बाहरी साइटों की सामग्री के लिए बीबीसी ज़िम्मेदार नहीं है.',
        },
        skipLink: {
          text: 'छोड़िए %provider_name% पोस्ट',
          endTextVisuallyHidden: 'पोस्ट %provider_name% समाप्त',
        },
      },
      include: {
        errorMessage:
          'माफ़ी चाहते हैं, हम इस स्टोरी का कुछ हिस्सा लाइटवेट मोबाइल पेज पर नहीं दिखा सकते.',
        linkText:
          'आप अगर पूरी स्टोरी देखना चाहते हैं तो हमारे फुल वर्ज़न पर जाएं.',
      },
      topStoriesTitle: 'टॉप स्टोरी',
      featuresAnalysisTitle: 'ज़रूर पढ़ें',
    },
    brandSVG,
    mostRead: {
      header: 'सबसे अधिक पढ़ी गईं',
      lastUpdated: 'अंतिम अपडेट:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'सबसे ज्यादा देखे गए',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: true,
      skipLink: {
        text: 'छोड़कर %title% आगे बढ़ें',
        endTextVisuallyHidden: 'समाप्त',
      },
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/hindi/institutional-50223932',
        text: 'आप बीबीसी पर क्यों भरोसा कर सकते हैं',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'बाहरी साइटों का लिंक देने की हमारी नीति के बारे में पढ़ें.',
      },
      links: [
        {
          href: 'https://www.bbc.com/hindi/institutional-37342293',
          text: 'इस्तेमाल की शर्तें',
        },
        {
          href: 'https://www.bbc.com/hindi/institutional-37343168',
          text: 'बीबीसी के बारे में',
        },
        {
          href: 'https://www.bbc.com/hindi/institutional-37342614',
          text: 'निजता की नीति',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'कुकीज़',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853357',
          text: 'बीबीसी से संपर्क करें',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. बाहरी साइटों की सामग्री के लिए बीबीसी ज़िम्मेदार नहीं है.',
    },
    fonts: [],
    timezone: 'Asia/Kolkata',
    navigation: [
      {
        title: 'होम पेज',
        url: '/hindi',
      },
      {
        title: 'कोरोनावायरस',
        url: '/hindi/international-51848794',
      },
      {
        title: 'भारत',
        url: '/hindi/topics/ckdxnkz7607t',
      },
      {
        title: 'विदेश',
        url: '/hindi/topics/c9wpm0en87xt',
      },
      {
        title: 'मनोरंजन',
        url: '/hindi/topics/c06gq3n0pp7t',
      },
      {
        title: 'खेल',
        url: '/hindi/topics/cwr9j8g1kj9t',
      },
      {
        title: 'विज्ञान-टेक्नॉलॉजी',
        url: '/hindi/topics/c2lej0594knt',
      },
      {
        title: 'सोशल',
        url: '/hindi/topics/c2e4q0z9qznt',
      },
      {
        title: 'वीडियो',
        url: '/hindi/media/video',
      },
    ],
  },
};

export default withContext(service);
