import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const FAQPage = () => {
    const faqData = [
        {
            question: "What is SavePlays.com?",
            answer: "SavePlays.com is a powerful online media downloader that lets you download videos, music, and other media from popular platforms like YouTube, Instagram, Facebook, Twitter, and more. It's fast, easy to use, and completely free!"
        },
        {
            question: "Which platforms are supported?",
            answer: "SavePlays.com supports media downloads from popular platforms, including YouTube, Instagram, Facebook, Twitter (X), and TikTok."
        },
        {
            question: "Is SavePlays.com free to use?",
            answer: "Yes, SavePlays.com is completely free! You can download unlimited media without any hidden fees or subscription requirements."
        },
        {
            question: "How do I use SavePlays.com to download media?",
            answer: "Using SavePlays.com is simple: 1) Copy the URL of the video or media you want to download. 2) Paste the URL into the download bar on SavePlays.com. 3) Click the \"Download\" button, choose your preferred format or quality, and save the file to your device."
        },
        {
            question: "Can I download videos in different formats and resolutions?",
            answer: "Yes! SavePlays.com allows you to download media in multiple formats (e.g., MP4, MP3) and resolutions (e.g., 1080p, 720p, 480p), depending on the content available on the source platform."
        },
        {
            question: "Is it safe to use SavePlays.com?",
            answer: "Absolutely! SavePlays.com is designed with user security in mind. We do not store your download history, and our site is free of harmful software. However, always ensure you download content legally."
        },
        {
            question: "Do I need to install any software or plugins?",
            answer: "No, SavePlays.com works entirely online. You don't need to install any software, plugins, or extensions to download media."
        },
        {
            question: "Can I use SavePlays.com on mobile devices?",
            answer: "Yes! SavePlays.com is mobile-friendly and works seamlessly on smartphones, tablets, and desktops."
        },
        {
            question: "Are there any restrictions on downloads?",
            answer: "SavePlays.com allows unlimited downloads, but the availability of certain formats or resolutions depends on the original source. Also, always respect copyright laws and the terms of service of the source platform."
        },
        {
            question: "Is it legal to download media using SavePlays.com?",
            answer: "Downloading content for personal use is generally allowed, but it depends on the copyright and terms of service of the platform. Make sure you have the rights or permissions to download and use the content you access."
        },
        {
            question: "What should I do if SavePlays.com isn't working?",
            answer: "If you experience any issues: Ensure you've entered a valid URL, check your internet connection, clear your browser cache and refresh the page, or try using a different browser or device. If the issue persists, contact our support team for assistance."
        },
        {
            question: "How can I contact SavePlays.com for support?",
            answer: "If you have any questions or encounter issues, you can reach out to us through the Contact Us page on SavePlays.com."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

            {/* Schema.org FAQ structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <div className="bg-white rounded-lg border p-4">
                                <DisclosureButton className="flex w-full justify-between items-center text-left">
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`} />
                                </DisclosureButton>
                                <DisclosurePanel className="text-gray-600 pt-4">
                                    {item.answer}
                                </DisclosurePanel>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;