import catServices from "@/assets/cat-services.jpg";
import catGoods from "@/assets/cat-goods.jpg";
import catContracts from "@/assets/cat-contracts.jpg";
import catJobs from "@/assets/cat-jobs.jpg";
import catRealEstate from "@/assets/cat-realestate.jpg";
import catAutomobiles from "@/assets/cat-automobiles.jpg";
import catPromotions from "@/assets/cat-promotions.jpg";
import catPanteka from "@/assets/cat-panteka.jpg";
import catGadgets from "@/assets/cat-gadgets.jpg";
import catEbooks from "@/assets/cat-ebooks.jpg";
import catShares from "@/assets/cat-shares.jpg";

export type Faq = { q: string; a: string };

export type Category = {
  slug: string;
  name: string;
  /** Visible page heading. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  summary: string;
  intro: string[];
  whatYouFind: string[];
  tips: string[];
  faqs: Faq[];
};

export const categories: Category[] = [
  {
    slug: "services",
    name: "Services",
    heading: "Hire or offer services near you",
    metaTitle: "Hire Local Services & Offer Your Skills | BSB Market",
    metaDescription:
      "Find plumbers, electricians, cleaners, photographers, web developers and other service providers on BSB Market, or list your own skills and get hired. Free to join.",
    image: catServices,
    summary: "Hire trusted professionals or offer your skills to people who need them.",
    intro: [
      "BSB Market connects people who need work done with the artisans, freelancers and businesses who can do it. Whether you need a plumber in Uyo today or a web developer for a long project, you can browse service listings, compare providers and contact them directly from the app.",
      "If you have a skill, you can list it for free. Add photos of past work, describe what you offer and let customers in your city, or anywhere in the world, find you.",
    ],
    whatYouFind: [
      "Home services: cleaning, plumbing, electrical work, painting, fumigation and repairs",
      "Creative services: photography, videography, event coverage, graphic design",
      "Digital services: website development, mobile app design, social media management",
      "Personal services: fitness coaching, beauty, spa, tutoring, catering and driving",
    ],
    tips: [
      "Look at photos of past work and read reviews before you hire anyone.",
      "Agree on the scope of work, timeline and payment in writing inside the app chat.",
      "For providers: clear photos and a detailed description get you more enquiries.",
    ],
    faqs: [
      {
        q: "How do I hire a service provider on BSB Market?",
        a: "Open the BSB Market app, go to Services, browse or search for what you need and tap a listing to message or call the provider directly. Agree on the details and pay only when you are satisfied with the arrangement.",
      },
      {
        q: "Can I offer my services on BSB Market for free?",
        a: "Yes. Creating an account and posting a service listing is free. Add your skill, location, photos of your work and how customers can reach you.",
      },
      {
        q: "Which service providers can I find on BSB Market?",
        a: "Artisans such as plumbers, electricians, painters and cleaners, as well as photographers, event planners, fitness coaches, tutors, web developers, designers and many other freelancers and businesses.",
      },
    ],
  },
  {
    slug: "goods",
    name: "Goods",
    heading: "Buy and sell goods online",
    metaTitle: "Buy & Sell Goods Online: New and Used Items | BSB Market",
    metaDescription:
      "Buy and sell new and used goods on BSB Market: furniture, home appliances, fashion, shoes, electronics and more. Post a free listing and reach buyers near you.",
    image: catGoods,
    summary: "New and fairly used items: furniture, appliances, fashion and household goods.",
    intro: [
      "The Goods category is where everyday buying and selling happens on BSB Market. Sell things you no longer need, stock up for your shop, or find a good deal on something new or fairly used from a seller near you.",
      "Every listing shows photos, a description and the seller's profile so you can decide with confidence and contact the seller directly in the app.",
    ],
    whatYouFind: [
      "Furniture: sofas, beds, dining sets, office chairs and tables",
      "Home and kitchen appliances: TVs, fridges, blenders, washing machines",
      "Fashion: clothing, shoes, bags, jewellery and accessories",
      "Groceries, provisions, baby items, sports equipment and more",
    ],
    tips: [
      "Inspect items in person in a safe public place before paying.",
      "Take clear photos in good light and state the item's true condition.",
      "Compare similar listings so you know a fair price before you negotiate.",
    ],
    faqs: [
      {
        q: "How do I sell an item on BSB Market?",
        a: "Download the BSB Market app, create a free account, tap Post, choose Goods, add photos, a title, description and your location, then publish. Interested buyers contact you directly.",
      },
      {
        q: "Can I sell used items on BSB Market?",
        a: "Yes. You can sell both new and used (fairly used) items. Describe the condition honestly and include clear photos.",
      },
      {
        q: "Is it free to post goods on BSB Market?",
        a: "Yes, posting listings and browsing goods on BSB Market is free.",
      },
    ],
  },
  {
    slug: "contracts",
    name: "Contracts",
    heading: "Find and post business contracts",
    metaTitle: "Find Contracts, Tenders & Supply Deals | BSB Market",
    metaDescription:
      "Discover building, supply, catering, construction and service contracts on BSB Market. Businesses post contracts and qualified contractors connect directly.",
    image: catContracts,
    summary: "Construction, supply, catering and service contracts for businesses and contractors.",
    intro: [
      "Businesses, organisations and individuals use the Contracts category on BSB Market to find reliable contractors and suppliers. Contractors use it to discover new jobs and grow their business.",
      "From residential building projects to office supply agreements and event catering, post your requirements once and receive interest from qualified people.",
    ],
    whatYouFind: [
      "Building and construction contracts",
      "Supply contracts for materials, office equipment and consumables",
      "Catering, cleaning and facility management contracts",
      "Logistics, transport and haulage contracts",
    ],
    tips: [
      "Ask for company registration details, references and past project photos.",
      "Put every agreement, including milestones and payment terms, in writing.",
      "Break large jobs into milestones and pay as each one is completed.",
    ],
    faqs: [
      {
        q: "What kind of contracts are listed on BSB Market?",
        a: "Construction, supply, catering, cleaning, logistics and other business contracts posted by companies and individuals looking for contractors.",
      },
      {
        q: "How do I find contractors on BSB Market?",
        a: "Post your contract with the scope, location and timeline, or browse contractors offering their services, then connect directly through the app.",
      },
    ],
  },
  {
    slug: "jobs",
    name: "Jobs",
    heading: "Find jobs and hire staff",
    metaTitle: "Find Jobs & Hire Staff in Nigeria and Remote | BSB Market",
    metaDescription:
      "Search full-time, part-time, remote and freelance jobs on BSB Market, or post a job and hire staff fast. Sales, tech, driving, design, admin and more.",
    image: catJobs,
    summary: "Full-time, part-time, remote and freelance jobs from employers near you.",
    intro: [
      "Looking for work or hiring? The Jobs category on BSB Market brings employers and job seekers together, from local shop assistants and drivers to remote software developers.",
      "Employers post openings for free and talk to applicants directly. Job seekers browse by category and location and reply straight from their phone.",
    ],
    whatYouFind: [
      "Tech jobs: software development, IT support, data and design",
      "Sales, marketing, customer service and admin roles",
      "Drivers, security, domestic staff and hospitality jobs",
      "Remote, freelance, internship and part-time opportunities",
    ],
    tips: [
      "Never pay money to get a job. Genuine employers do not charge application fees.",
      "Research the company and meet for interviews in public or official offices.",
      "Employers: list the role, location, requirements and pay range clearly.",
    ],
    faqs: [
      {
        q: "How do I apply for jobs on BSB Market?",
        a: "Open the Jobs category in the BSB Market app, find a role that suits you and contact the employer directly through the listing.",
      },
      {
        q: "Can employers post jobs for free?",
        a: "Yes. Employers can post job openings on BSB Market for free and chat with candidates directly.",
      },
      {
        q: "Are there remote jobs on BSB Market?",
        a: "Yes. Alongside local jobs, BSB Market lists remote and freelance roles that you can do from anywhere.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    heading: "Property for rent and sale",
    metaTitle: "Houses, Land & Shops for Rent and Sale | BSB Market",
    metaDescription:
      "Find apartments, houses, land, shops and office space for rent or sale on BSB Market. Agents, landlords and property owners list for free.",
    image: catRealEstate,
    summary: "Apartments, houses, land, shops and office space to rent or buy.",
    intro: [
      "Find your next home, shop or plot of land on BSB Market. Landlords, agents and property owners list apartments, houses, land and commercial space, and you contact them directly from the app.",
      "Browse by location, compare photos and details, and arrange inspections at your convenience.",
    ],
    whatYouFind: [
      "Flats and apartments for rent: self-contained, 1, 2 and 3 bedroom",
      "Houses and duplexes for sale or rent",
      "Land for sale, with documentation such as C of O where available",
      "Shops, warehouses and office space for lease",
    ],
    tips: [
      "Always inspect a property in person before paying any fee or deposit.",
      "Verify land and property documents at the relevant land registry.",
      "Get a signed tenancy agreement or deed and a receipt for every payment.",
    ],
    faqs: [
      {
        q: "Can I find houses for rent on BSB Market?",
        a: "Yes. Landlords and agents list apartments, flats, houses and duplexes for rent. You can contact them directly and arrange an inspection.",
      },
      {
        q: "Can I sell land on BSB Market?",
        a: "Yes. Post the land with its size, location, photos and available documents. Buyers contact you directly through the app.",
      },
    ],
  },
  {
    slug: "automobiles",
    name: "Automobiles",
    heading: "Buy and sell cars, buses and motorcycles",
    metaTitle: "Cars, Buses & Motorcycles for Sale | BSB Market",
    metaDescription:
      "Buy and sell used and new cars, SUVs, buses and motorcycles on BSB Market. Toyota, Honda, Lexus and more from sellers and dealers near you.",
    image: catAutomobiles,
    summary: "Used and new cars, SUVs, buses, motorcycles and tricycles.",
    intro: [
      "Whether you are buying your first car or selling a commercial bus, the Automobiles category on BSB Market connects you with buyers, private sellers and dealers.",
      "Compare listings with photos, mileage and condition details, then contact the seller to arrange an inspection and test drive.",
    ],
    whatYouFind: [
      "Cars and SUVs: Toyota, Honda, Lexus, Mercedes-Benz, Hyundai and more",
      "Commercial vehicles: buses, trucks and vans",
      "Motorcycles and tricycles",
      "Car rental and hire listings",
    ],
    tips: [
      "Bring a trusted mechanic to inspect the vehicle before you pay.",
      "Check the vehicle papers and confirm the chassis number matches.",
      "Test drive in daylight and complete the payment at a bank or secure location.",
    ],
    faqs: [
      {
        q: "How do I sell my car on BSB Market?",
        a: "Create a free account in the BSB Market app, post your car in Automobiles with clear photos, the model, year, mileage, condition and location, and buyers will contact you.",
      },
      {
        q: "Can I buy a used car on BSB Market?",
        a: "Yes. Private sellers and dealers list new and used cars. Always inspect the vehicle and its documents before paying.",
      },
    ],
  },
  {
    slug: "promotions",
    name: "Promotions",
    heading: "Promote brands and earn",
    metaTitle: "Brand Promotions, Influencer Gigs & Ads | BSB Market",
    metaDescription:
      "Businesses on BSB Market find promoters, brand ambassadors and influencers. Creators discover paid promotion gigs for products, events and apps.",
    image: catPromotions,
    summary: "Brand ambassador, influencer and product promotion opportunities.",
    intro: [
      "The Promotions category helps businesses reach more customers and helps creators earn from their audience. Brands post campaigns, and promoters, influencers and brand ambassadors apply to take part.",
      "It is a simple way to advertise a product, event or app with people who already have the audience you want.",
    ],
    whatYouFind: [
      "Brand ambassador and influencer campaigns",
      "Product review and unboxing gigs",
      "Event and concert promotion",
      "App install and social media campaigns",
    ],
    tips: [
      "Agree on deliverables, timelines and payment before you start a campaign.",
      "Brands: look at a promoter's real audience and past work, not only follower counts.",
    ],
    faqs: [
      {
        q: "How can I promote my business on BSB Market?",
        a: "Post a promotion listing describing your campaign and budget, or reach out to promoters and influencers listed on BSB Market.",
      },
      {
        q: "Can I earn money promoting products on BSB Market?",
        a: "Yes. Creators and promoters can find paid campaigns in the Promotions category and apply directly.",
      },
    ],
  },
  {
    slug: "panteka",
    name: "Panteka",
    heading: "Panteka: used parts, tools and hardware",
    metaTitle: "Panteka Market: Spare Parts, Tools & Hardware | BSB Market",
    metaDescription:
      "Shop Panteka on BSB Market: used and new spare parts, generator parts, welding materials, plumbing fittings, tools and hardware from sellers near you.",
    image: catPanteka,
    summary: "Spare parts, generator parts, tools, fittings and hardware, new and used.",
    intro: [
      "Panteka is the go-to market for spare parts and hardware. On BSB Market, the Panteka category brings that experience online, so you can find car parts, generator parts, tools and building materials without going from shop to shop.",
      "Sellers, mechanics and hardware dealers list what they have, and you contact them directly to confirm availability and compatibility.",
    ],
    whatYouFind: [
      "Car and motorcycle spare parts",
      "Generator parts and electrical components",
      "Welding materials, tools and industrial equipment",
      "Plumbing fittings, pipes, valves and building hardware",
    ],
    tips: [
      "Share your vehicle or machine model so the seller can confirm the part fits.",
      "Inspect used parts carefully and ask about returns before paying.",
    ],
    faqs: [
      {
        q: "What is Panteka on BSB Market?",
        a: "Panteka is BSB Market's category for spare parts, tools and hardware, both new and used, such as car parts, generator parts, welding materials and plumbing fittings.",
      },
      {
        q: "Can I find used car parts on BSB Market?",
        a: "Yes. Sellers and mechanics list used and new car parts in the Panteka category. Contact them with your vehicle model to confirm compatibility.",
      },
    ],
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    heading: "Buy and sell phones, laptops and gadgets",
    metaTitle: "Phones, Laptops & Gadgets for Sale | BSB Market",
    metaDescription:
      "Buy and sell iPhones, Samsung phones, laptops, smart watches, earbuds and other gadgets on BSB Market. New and used devices from sellers near you.",
    image: catGadgets,
    summary: "Smartphones, laptops, tablets, smart watches, earbuds and accessories.",
    intro: [
      "Upgrade your phone, sell your old laptop or find accessories in the Gadgets category on BSB Market. Buy from individuals and gadget shops near you, new or fairly used.",
      "Each listing includes photos and specifications so you can compare devices before contacting the seller.",
    ],
    whatYouFind: [
      "Smartphones: iPhone, Samsung, Tecno, Infinix, Xiaomi and more",
      "Laptops and computers: HP, Dell, Lenovo, MacBook",
      "Smart watches, earbuds, headphones and speakers",
      "Tablets, gaming consoles, chargers and accessories",
    ],
    tips: [
      "Test the device thoroughly: screen, battery, camera, charging port and network.",
      "Check the IMEI or serial number, and make sure the phone is not iCloud or Google locked.",
      "Meet in a busy public place and avoid paying before you see the device.",
    ],
    faqs: [
      {
        q: "Can I buy a used iPhone on BSB Market?",
        a: "Yes. Individuals and gadget shops list new and used iPhones and other phones. Test the device and check that it is not locked before you pay.",
      },
      {
        q: "How do I sell my phone or laptop on BSB Market?",
        a: "Post it in the Gadgets category with clear photos, the model, storage, condition and your location. Buyers contact you directly.",
      },
    ],
  },
  {
    slug: "ebooks",
    name: "Ebooks",
    heading: "Sell and buy ebooks and digital guides",
    metaTitle: "Sell & Buy Ebooks and Digital Guides | BSB Market",
    metaDescription:
      "Authors and creators sell ebooks, guides and courses on BSB Market. Find books on business, forex, cooking, self development and more.",
    image: catEbooks,
    summary: "Ebooks and digital guides on business, finance, cooking and personal growth.",
    intro: [
      "Turn your knowledge into income. Authors, coaches and creators use the Ebooks category on BSB Market to sell digital books and guides to a ready audience.",
      "Readers can discover practical guides written by people who have done the work, from growing a business to cooking African dishes.",
    ],
    whatYouFind: [
      "Business, entrepreneurship and marketing guides",
      "Personal finance, investing and forex trading books",
      "Cookbooks with African and continental recipes",
      "Self development, education and skills guides",
    ],
    tips: [
      "Authors: use a clear cover, a strong description and a sample chapter.",
      "Readers: check the author's profile and reviews before buying.",
    ],
    faqs: [
      {
        q: "Can I sell my ebook on BSB Market?",
        a: "Yes. Post your ebook in the Ebooks category with a cover image, description and how buyers can get it.",
      },
    ],
  },
  {
    slug: "shares",
    name: "Shares",
    heading: "Business shares and investment opportunities",
    metaTitle: "Business Shares & Investment Opportunities | BSB Market",
    metaDescription:
      "Discover business partnership and investment opportunities on BSB Market: startup equity, restaurants, logistics, agribusiness and more.",
    image: catShares,
    summary: "Equity, partnerships and investment opportunities in growing businesses.",
    intro: [
      "The Shares category connects business owners looking for capital or partners with people ready to invest. Businesses describe the opportunity, and interested investors reach out directly.",
      "BSB Market provides the connection only. It does not give investment advice, so do your own research before committing money.",
    ],
    whatYouFind: [
      "Startup and small business equity",
      "Restaurant, retail and franchise partnerships",
      "Logistics, agribusiness and manufacturing opportunities",
      "Joint ventures and co-founder opportunities",
    ],
    tips: [
      "Verify the company's registration and review its financial records.",
      "Use a lawyer to draft share or partnership agreements.",
      "Never invest money you cannot afford to lose, and be wary of guaranteed returns.",
    ],
    faqs: [
      {
        q: "Can I find investors for my business on BSB Market?",
        a: "Yes. Post your business opportunity in the Shares category with clear details and connect with interested investors and partners.",
      },
      {
        q: "Does BSB Market give investment advice?",
        a: "No. BSB Market only connects businesses and investors. Always carry out your own due diligence and seek professional advice.",
      },
    ],
  },
];

export const getCategory = (slug: string | undefined) => categories.find((c) => c.slug === slug);
