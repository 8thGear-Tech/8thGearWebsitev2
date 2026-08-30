// Mirrors the CRA app's src/pages/Insights/readMoreInsights.js (named export
// ReadMoreInsights). There it read the dynamic `:id` via react-router's useParams()
// and looked the post up in src/data/blogPosts.json; here the matching post is looked
// up in the page (src/app/read-more/[id]/page.tsx) and passed in as a prop instead.
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import openingquote from "@/assets/images/insights/openingquote.png";
import closingquote from "@/assets/images/insights/closingquote.png";

type ActionFragment =
  | string
  | {
      text: (string | { linkText: string; url: string })[];
    };

type BlogService = {
  title?: string;
  title2?: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  description?: string;
  description2?: string;
  description3?: string;
  bullets?: string[];
  source?: string;
};

export type BlogPost = {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  author?: string;
  quoteSection: {
    quoteImage: string;
    quoteText: string;
  };
  fullcontent: {
    introductionTitle: string;
    introText1?: string;
    introText2?: string;
    introText3?: string;
    introText4?: string;
    introText5?: string;
    fullblogimg?: string;
    services: BlogService[];
    competitiveEdge?: { title: string; points: string[] };
    callToAction?: { title: string; text: string; actions: ActionFragment[] };
    engagement?: { prompt: string; text: string };
    sources?: string[];
  };
};

// The source JSON stores image paths as browser-relative strings (e.g.
// "../../images/insights/quoteimg2.png") that only resolved correctly in the CRA app
// because /read-more/:id happened to sit two path segments deep, same as here â€”
// normalize them to an absolute /images/... path (served from /public) instead of
// relying on that route-depth coincidence.
function toPublicImagePath(path: string): string {
  return path.replace(/^(\.\.\/)+images\//, "/images/");
}

export const ReadMoreInsights = ({ post }: { post: BlogPost }) => {
  const { quoteImage, quoteText } = post.quoteSection;
  const { introductionTitle, introText1, introText2, introText3, introText4, introText5, fullblogimg } =
    post.fullcontent;

  return (
    <>
      <Header post={post} />
      <QuoteSection quoteText={quoteText} quoteImage={quoteImage} />
      <FullBlogPost
        introductionTitle={introductionTitle}
        introText1={introText1}
        introText2={introText2}
        introText3={introText3}
        introText4={introText4}
        introText5={introText5}
        fullblogimg={fullblogimg}
        services={post.fullcontent.services}
        competitiveEdge={post.fullcontent.competitiveEdge}
        callToAction={post.fullcontent.callToAction}
        engagement={post.fullcontent.engagement}
        sources={post.fullcontent.sources}
      />
      <AuthorSection author={post.author} />
    </>
  );
};

function Header({ post }: { post: BlogPost }) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12">
      <p className="mb-2 font-bold uppercase text-[#A83EAA]">{post.category}</p>
      <h1 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">{post.title}</h1>
      <p className="text-[#A83EAA]">
        {post.date} • {post.readTime}
      </p>
      <div className="mt-3 flex items-center gap-4 text-xl text-[#A83EAA]">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}

function QuoteSection({ quoteText, quoteImage }: { quoteText: string; quoteImage: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-[300px] w-full">
        <Image src={toPublicImagePath(quoteImage)} alt="Discussion" fill className="object-cover" />
      </div>
      <div className="relative flex items-center justify-center overflow-hidden bg-purple p-8 text-white sm:p-12">
        <Image
          src={openingquote}
          alt=""
          className="absolute left-4 top-4 hidden w-8 sm:w-[50px] lg:block"
          aria-hidden
        />
        <Image src={openingquote} alt="" className="absolute left-5 top-5 w-8 lg:hidden" aria-hidden />
        <p className="relative z-[1] max-w-[85%] px-3 text-lg leading-relaxed">{quoteText}</p>
        <Image
          src={closingquote}
          alt=""
          className="absolute bottom-3 right-[90px] hidden w-[200px] lg:block"
          aria-hidden
        />
        <Image src={closingquote} alt="" className="absolute bottom-3 right-3 w-20 lg:hidden" aria-hidden />
      </div>
    </div>
  );
}

function renderAction(action: ActionFragment, idx: number) {
  if (typeof action === "string") {
    return <li key={idx}>{action}</li>;
  }

  if (typeof action === "object" && Array.isArray(action.text)) {
    return (
      <li key={idx}>
        {action.text.map((fragment, i) => {
          if (typeof fragment === "string") {
            return <span key={i}>{fragment}</span>;
          }
          if (fragment.linkText && fragment.url) {
            return (
              <a key={i} href={fragment.url} target="_blank" rel="noopener noreferrer">
                {fragment.linkText}
              </a>
            );
          }
          return null;
        })}
      </li>
    );
  }

  return null;
}

function FullBlogPost({
  introductionTitle,
  introText1,
  introText2,
  introText3,
  introText4,
  introText5,
  fullblogimg,
  services,
  competitiveEdge,
  callToAction,
  engagement,
  sources,
}: {
  introductionTitle: string;
  introText1?: string;
  introText2?: string;
  introText3?: string;
  introText4?: string;
  introText5?: string;
  fullblogimg?: string;
  services: BlogService[];
  competitiveEdge?: { title: string; points: string[] };
  callToAction?: { title: string; text: string; actions: ActionFragment[] };
  engagement?: { prompt: string; text: string };
  sources?: string[];
}) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <div className="my-3">
        <h2 className="font-heading text-xl font-semibold">{introductionTitle}</h2>
        <div className="mt-3 space-y-4 text-secondary">
          {[introText1, introText2, introText3, introText4, introText5].filter(Boolean).map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>

      {fullblogimg && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-brand">
          <Image src={toPublicImagePath(fullblogimg)} alt="" fill className="object-cover" />
        </div>
      )}

      <div>
        {services.map((service, index) => (
          <div key={index} className="mt-6">
            {service.title && <h3 className="font-heading text-lg font-semibold">{service.title}</h3>}
            {service.subtitle && <h4 className="font-heading font-medium">{service.subtitle}</h4>}
            {service.description && <p className="mt-1 text-secondary">{service.description}</p>}
            {service.subtitle2 && <h4 className="font-heading font-medium">{service.subtitle2}</h4>}
            {service.description2 && <p className="mt-1 text-secondary">{service.description2}</p>}
            {service.subtitle3 && <h4 className="font-heading font-medium">{service.subtitle3}</h4>}
            {service.description3 && <p className="mt-1 text-secondary">{service.description3}</p>}
            {service.title2 && <h3 className="mt-4 font-heading text-lg font-semibold">{service.title2}</h3>}
            {service.bullets && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-secondary">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {service.source && <p className="mt-2 text-sm text-muted">{service.source}</p>}
          </div>
        ))}
      </div>

      {competitiveEdge && (
        <div className="mt-10">
          <h3 className="font-heading text-lg font-semibold">{competitiveEdge.title}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-secondary">
            {competitiveEdge.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {callToAction && (
        <div className="mt-10">
          <h3 className="font-heading text-lg font-semibold">{callToAction.title}</h3>
          <p className="mt-1 text-secondary">{callToAction.text}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-secondary">
            {callToAction.actions.map((action, idx) => renderAction(action, idx))}
          </ul>
        </div>
      )}

      {engagement && (
        <div className="mt-10">
          <h4 className="font-heading font-semibold">{engagement.prompt}</h4>
          <p className="mt-1 text-secondary">{engagement.text}</p>
        </div>
      )}

      {sources && sources.length > 0 && (
        <div className="mt-10">
          <h5 className="font-heading font-semibold">Sources</h5>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {sources.map((source, idx) => (
              <li key={idx}>{source}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AuthorSection({ author }: { author?: string }) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 text-center">
      <div className="mb-4 flex justify-center gap-6 text-2xl text-[#A83EAA]">
        <a href="https://www.facebook.com" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.whatsapp.com" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:example@example.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <p className="mb-1 font-bold uppercase">Author</p>
        <h3 className="mb-1 font-heading text-lg">{author ?? "8thGear Hub"}</h3>
        <p className="text-muted">Comms Executive at 8thGear</p>
      </div>
    </div>
  );
}
