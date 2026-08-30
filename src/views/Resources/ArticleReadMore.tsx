// Mirrors the CRA app's src/pages/Resources/ArticleReadMore.js, which exports three
// structurally-identical "read more" articles (each is just an embedded YouTube video
// followed by a few paragraphs of transcript). Factored into one shared layout here.

function ArticleVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="mx-auto aspect-[2/1] w-full max-w-[800px] overflow-hidden rounded-xl shadow-brand">
      <iframe
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        className="h-full w-full border-0"
      />
    </div>
  );
}

function ArticleLayout({
  videoSrc,
  videoTitle,
  paragraphs,
}: {
  videoSrc: string;
  videoTitle: string;
  paragraphs: string[];
}) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12">
      <ArticleVideo src={videoSrc} title={videoTitle} />
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-secondary">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

const abcBusinessAccountingParagraphs = [
  "You don't have to be an accountant to be able to do that; you can just have a notebook. I always advise non-accountants to just have a notebook. Practice the art of recording all your transactions: \"I bought A and I sold B.\" With that, you're already an accountant, and tracking and reporting financial transactions are second nature to you.",
  "For a bank statement, I don't always recommend using USSD; instead, use a mobile app with a comment section where you can record the transaction's narrative. For instance, if you're inviting a third party to come and audit your books or you're outsourcing the accounting function to an outsider, they may not know that. Okay, maybe the transaction will say, \"X amount of money was spent on Mr. X, Y, and Z.\" But, as a third party, I have no idea who Mr. X Y is if you know the narrative X Y Z for which I purchased tissue paper, groceries, or whatever. So it makes it easier for whoever is checking the books to know what exactly these expenses were incurred for",
  "For entrepreneurship, combining company building with venture funding combining company building with venture funding. For entrepreneurship, combining company building with venture funding, combining company building with venture funding. FFor entrepreneurship, combining company building with venture funding combining company building with venture funding. For entrepreneurship, combining company building with venture funding, combining company building",
  "The other source documents are all invoices and receipts. We may not be able to obtain every detail for all of your transactions or receipts, despite our best efforts. But in most cases, we always encourage everybody, or the taxpayer, to make sure that they get all your invoices and your supporting documents for support at the end of the day. It is not only for tax reasons; it is for accountability.",
  "You should also have your bank statements, your ledger, and your bank book where you can record all your bank transactions. You should also keep an imprest account separate from your everyday expenditures.",
  "Entrepreneurs should have schedules that can also provide information to whoever is going to help prepare the accounts. Your salary, schedule, rent, shares, payroll, and fixed assets—you need to have all of those forms, and the accountant can assist you on how to do the deposition and all the provisions. All we have done is sort of put all this information together with our report. This brings us back to the essence of what we need to analyze properly.",
  "When it comes to sales and credit sales, make sure that any credit you extend is within reasonable limits. Also, if you're fortunate enough to be able to get into those with whom you're doing business and they're willing to extend credit to you, make sure that the credit days they extend to you are far greater than the credit days you extend to your customers.",
];

const keepingAccountingRecordsParagraphs = [
  "Entrepreneurs, especially beginners, are fond of not keeping proper accounting books. Yes, it is a lot of work; however, you just need something basic if you don't measure what is coming in or going out, how do you know how far you've gone? How do you know the health of your business?",
  "An Excel spreadsheet that has revenue, expense, liability, and assets. What was the payment for? Or what was the mode of payment? Was it via cash or POS? Keeping these basic records will help a lot. A seasoned accountant can make sense of it and draw out something standard.",
  "Why do entrepreneurs need to keep good accounting records? one, so that you can measure progress. Two, there are some jobs that you apply for that will ask you for an audited statement of account if you haven't been keeping proper books, you can’t apply for those jobs.",
  "Running an efficient business is no joke. It is a lot of work. Write down what you spend and receive from your business every day, and you will be amazed at how much growth your business will experience by doing this.",
];

const nigerianStartupActsParagraphs = [
  "Prior to the enactment of the startup bill, people simply decided to build innovative products and looked for what registration fit them, what platform they needed, and what process they needed; there was no structure, no system in place, and no support, even for entrepreneurs or startups, so you just ran your team.",
  "Data is the new oil. Who are the miners of the new oil? Startups, entrepreneurs, the technology industry, and the technology ecosystemApproximately 200 million people consume today.creating data in Nigeria. That is billions of dollars in revenue. So even if it dries up, you will always have human beings who create innovative solutions to life because as long as we're living, we're going to need stuff.",
  "What we have is a crop of innovative products and innovative entrepreneurs who provide so much value without getting some measure of support from the states. Uber was a startup at the time, and it started with someone identifying a problem, finding a solution, and making a profit. You identify a problem, you provide a solution, and you make profits. Entrepreneurship is not a non-governmental organization; you have to make a profit.",
  "But the initial years are difficult, and that is why you need an enabling law that will help give you some semblance of support. The ecosystem partners came together to say, \"Look, we need some level of support from the States, some level of guidance, some level of enablement. And the government said, \"Okay, what do you need? Let's come together; let's make a law that will now enable you so that the Startup Act is not a regulation.\" The startup is a supporting document that supports you so long as you meet the criteria.",
  "So what is a startup?",
  "The agreed-upon definition of a \"startup\" includes businesses that are starting up that are leveraging technology and providing innovative growth-based services. Startups largely refer to tech-driven businesses. If you are going to start any business, leverage technology. The world has gone beyond analog; everything is digitalized. And even as backward as we may think we are, we have gone far. Let us take, for instance, the blue rail line in Lagos. So technology is taking over the entire world. Technology is a train. It will come to you if you don't enter; it will crush you.",
];

export const ABCBusinessAccountingReadMore = () => (
  <ArticleLayout
    videoSrc="https://www.youtube.com/embed/DwuT52ANalI"
    videoTitle="ABC of Business Accounting"
    paragraphs={abcBusinessAccountingParagraphs}
  />
);

export const KeepingAccountingRecordsReadMore = () => (
  <ArticleLayout
    videoSrc="https://www.youtube.com/embed/UKB0m6O8ZRk"
    videoTitle="Keeping Accounting Records"
    paragraphs={keepingAccountingRecordsParagraphs}
  />
);

export const NigerianStartupActsReadMore = () => (
  <ArticleLayout
    videoSrc="https://www.youtube.com/embed/IAwPlkUx4_Y"
    videoTitle="Nigerian Startup Act"
    paragraphs={nigerianStartupActsParagraphs}
  />
);
