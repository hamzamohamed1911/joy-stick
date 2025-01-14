import { Controlpanel, favourite, featureLogo, headPhone, helpCenterIcon, ImageAngle1, ImageAngle2, ImageAngle3, ImageAngle4, joyIcon, location, mouseImg, PreviousRequests } from "../../../public";
  export const ProfilenavLinks = [
  { url: "/profile/control-panel", title: "لوحة التحكم" , image:Controlpanel},
  { url: "/profile/added-location", title: "العناوين المضافة", image:location},
  { url: "/profile/previous-requests", title: "الطلبات السابقة", image:PreviousRequests },
  { url: "/profile/favourite", title: "المفضلة", image:favourite },
  { url: "/profile/maintenance", title: "الأجهزة المضافة",image:joyIcon },
  { url: "/profile/help-center", title: "مركز المساعدة",image:helpCenterIcon }
  ];
  export const navLinks = [
    { url: "/", title: "الرئيسية" },
    { url: "/about", title: "من نحن" },
    { url: "/profile/maintenance", title: "صيانة" },
    { url: "/store/head-phones", title: "سماعات رأس" },
    { url: "/microphones", title: "ميكروفون" },
    { url: "/store/camera", title: "كاميرا" },
    { url: "/mouse-keyboard", title: "ماوس & لوحة مفاتيح" }
  ];
  export const featureData = [
    {
      id: 1,
      logo: featureLogo,
      title: "لوريم ايبسوم",
      description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي"
    },
    {
      id: 2,
      logo: featureLogo,
      title: "لوريم ايبسوم",
      description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي"
    },
    {
      id: 3,
      logo: featureLogo,
      title: "لوريم ايبسوم",
      description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي"
    }
  ];
  export const latestProducts = [
    {
      id: 1,
      imageSrc: mouseImg,
      title: "سماعة رأس احترافية",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "300 جنيه",
    },
    {
      id: 2,
      imageSrc: mouseImg,
      title: "ميكروفون احترافي",
      description: "ميكروفون احترافي لتسجيل الصوت بجودة فائقة",
      price: "500 جنيه",
    },
    {
      id: 3,
      imageSrc: mouseImg,
      title: "كاميرا ويب عالية الدقة",
      description: "كاميرا ويب بدقة عالية مثالية لمكالمات الفيديو",
      price: "250 جنيه",
    },
    {
      id: 4,
      imageSrc: mouseImg,
      title: "ماوس لاسلكي",
      description: "ماوس لاسلكي سريع الاستجابة مع تصميم مريح",
      price: "150 جنيه",
    }
    
  ];
  export const headPhoneArr = [
    {
      id: 1,
      imageSrc: headPhone,
      title: "سماعة رأس 1",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "300 جنيه",
      subImages: [
        { id: 'sub1-1', src:ImageAngle1},
        { id: 'sub1-2', src:ImageAngle2},
        { id: 'sub1-3', src:ImageAngle3},
        { id: 'sub1-4', src:ImageAngle4},
      ],
    },
    {
      id: 2,
      imageSrc: headPhone,
      title: "سماعة رأس 2",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "500 جنيه",
      subImages: [
        { id: 'sub1-1', src:ImageAngle1},
        { id: 'sub1-2', src: ImageAngle2},
        { id: 'sub1-3', src:ImageAngle3},
        { id: 'sub1-4', src: ImageAngle4},
      ],
    },
    {
      id: 3,
      imageSrc: headPhone,
      title: "سماعة رأس 3",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "250 جنيه",
      subImages: [
        { id: 'sub1-1', src:ImageAngle1},
        { id: 'sub1-2', src: ImageAngle2},
        { id: 'sub1-3', src:ImageAngle3},
        { id: 'sub1-4', src: ImageAngle4},
      ],
    },
    {
      id: 4,
      imageSrc: headPhone,
      title: "سماعة رأس 4",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "150 جنيه",
      subImages: [
        { id: 'sub4-1', src: "/path/to/sub-image4-1.jpg" },
        { id: 'sub4-2', src: "/path/to/sub-image4-2.jpg" },
        { id: 'sub4-3', src: "/path/to/sub-image4-3.jpg" },
        { id: 'sub4-4', src: "/path/to/sub-image4-4.jpg" },
      ],
    },
    {
      id: 5,
      imageSrc: headPhone,
      title: "سماعة رأس 5",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "450 جنيه",
      subImages: [
        { id: 'sub5-1', src: "/path/to/sub-image5-1.jpg" },
        { id: 'sub5-2', src: "/path/to/sub-image5-2.jpg" },
        { id: 'sub5-3', src: "/path/to/sub-image5-3.jpg" },
        { id: 'sub5-4', src: "/path/to/sub-image5-4.jpg" },
      ],
    },
    {
      id: 6,
      imageSrc: headPhone,
      title: "سماعة رأس 6",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "1200 جنيه",
      subImages: [
        { id: 'sub6-1', src: "/path/to/sub-image6-1.jpg" },
        { id: 'sub6-2', src: "/path/to/sub-image6-2.jpg" },
        { id: 'sub6-3', src: "/path/to/sub-image6-3.jpg" },
        { id: 'sub6-4', src: "/path/to/sub-image6-4.jpg" },
      ],
    },
    {
      id: 7,
      imageSrc: headPhone,
      title: "سماعة رأس 7",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "400 جنيه",
      subImages: [
        { id: 'sub7-1', src: "/path/to/sub-image7-1.jpg" },
        { id: 'sub7-2', src: "/path/to/sub-image7-2.jpg" },
        { id: 'sub7-3', src: "/path/to/sub-image7-3.jpg" },
        { id: 'sub7-4', src: "/path/to/sub-image7-4.jpg" },
      ],
    },
    {
      id: 8,
      imageSrc: headPhone,
      title: "سماعة رأس 8",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "75 جنيه",
      subImages: [
        { id: 'sub8-1', src: "/path/to/sub-image8-1.jpg" },
        { id: 'sub8-2', src: "/path/to/sub-image8-2.jpg" },
        { id: 'sub8-3', src: "/path/to/sub-image8-3.jpg" },
        { id: 'sub8-4', src: "/path/to/sub-image8-4.jpg" },
      ],
    },
    {
      id: 9,
      imageSrc: headPhone,
      title: "سماعة رأس 9",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "150 جنيه",
      subImages: [
        { id: 'sub9-1', src: "/path/to/sub-image9-1.jpg" },
        { id: 'sub9-2', src: "/path/to/sub-image9-2.jpg" },
        { id: 'sub9-3', src: "/path/to/sub-image9-3.jpg" },
        { id: 'sub9-4', src: "/path/to/sub-image9-4.jpg" },
      ],
    },
    {
      id: 10,
      imageSrc: headPhone,
      title: "سماعة رأس 10",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "450 جنيه",
      subImages: [
        { id: 'sub10-1', src: "/path/to/sub-image10-1.jpg" },
        { id: 'sub10-2', src: "/path/to/sub-image10-2.jpg" },
        { id: 'sub10-3', src: "/path/to/sub-image10-3.jpg" },
        { id: 'sub10-4', src: "/path/to/sub-image10-4.jpg" },
      ],
    },
    {
      id: 11,
      imageSrc: headPhone,
      title: "سماعة رأس 11",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "1200 جنيه",
      subImages: [
        { id: 'sub11-1', src: "/path/to/sub-image11-1.jpg" },
        { id: 'sub11-2', src: "/path/to/sub-image11-2.jpg" },
        { id: 'sub11-3', src: "/path/to/sub-image11-3.jpg" },
        { id: 'sub11-4', src: "/path/to/sub-image11-4.jpg" },
      ],
    },
    {
      id: 12,
      imageSrc: headPhone,
      title: "سماعة رأس 12",
      description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
      price: "400 جنيه",
      subImages: [
        { id: 'sub12-1', src: "/path/to/sub-image12-1.jpg" },
        { id: 'sub12-2', src: "/path/to/sub-image12-2.jpg" },
        { id: 'sub12-3', src: "/path/to/sub-image12-3.jpg" },
        { id: 'sub12-4', src: "/path/to/sub-image12-4.jpg" },
      ],
    },
  ];
  
  
  export default latestProducts;
  