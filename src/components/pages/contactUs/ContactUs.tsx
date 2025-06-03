import React from "react";
import ContactUsHeroSection from "./ContactUsHeroSection.tsx";
import FrequentlyAskedQuestionsSection from "./FrequentlyAskedQuestionsSection.tsx";
import EmailSupport from "./EmailSupport.tsx";
import FastResponse from "./FastResponse.tsx";
import Satisfaction from "./Satisfaction.tsx";

const ContactUs: React.FC = () => {
    return (
        <div>
            <ContactUsHeroSection />

            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        <EmailSupport />
                        <FastResponse />
                        <Satisfaction />
                    </div>
                </div>
                <FrequentlyAskedQuestionsSection />
            </div>
        </div>
    );
};

export default ContactUs;
