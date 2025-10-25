// import Link from 'next/link';
// import Head from 'next/head';
// import React from 'react';
// import Layout from '../components/layout/Layout';

// const pageTerm = () => {
//     return (
//         <>
//             <Head>
//                 <title>Terms and condition</title>
//             </Head>

//             <Layout>
//                 <div className="section pt-40 content-term">
//                     <div className="box-bg-term" />
//                     <div className="container">
//                         <div className="breadcrumbs">
//                             <ul>
//                                 <li> <Link href="#">
//                                     <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                                     </svg>Home</Link></li>
//                                 <li> <Link href="term-conditions">Terms and condition</Link></li>
//                             </ul>
//                         </div>
//                         <div className="content-main mt-50">
//                             <div className="text-center">
//                                 <h2 className="color-brand-1 mb-10">Terms and Condition</h2>
//                                 <p className="font-lg color-grey-500">Amet nulla facilisi morbi tempus iaculis urna</p>
//                                 <div className="box-image-head mt-50 mb-50"> <img className="bd-rd8" src="assets/imgs/page/term/img.png" alt="iori" /></div>
//                             </div>
//                             <div className="row mt-70">
//                                 <div className="col-lg-1 col-md-1" />
//                                 <div className="col-lg-2 col-md-3">
//                                     <h6 className="color-brand-1 mb-15">Table of contents</h6>
//                                     <ul className="list-terms">
//                                         <li> <Link href="#limitation">Limitation of Liability</Link></li>
//                                         <li> <Link href="#licensing">Licensing Policy</Link></li>
//                                         <li> <Link href="#product">Product Compatibility</Link></li>
//                                         <li> <Link href="#delivery">Delivery</Link></li>
//                                         <li> <Link href="#ownership">Ownership</Link></li>
//                                         <li> <Link href="#browser">Browser Compatibility</Link></li>
//                                         <li> <Link href="#updates">Updates</Link></li>
//                                         <li> <Link href="#support">Theme Support</Link></li>
//                                         <li> <Link href="#price">Price Changes</Link></li>
//                                         <li> <Link href="#refund">Refund Policy</Link></li>
//                                         <li> <Link href="#email">Email &amp; Newsletter</Link></li>
//                                         <li> <Link href="#agreement">License Agreement</Link></li>
//                                         <li> <Link href="#severability">Severability</Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-8 col-md-7">
//                                     <h4 className="color-brand-1 mb-20" id="limitation">Limitation of Liability</h4>
//                                     <p className="font-md color-grey-500 mb-30">Under no circumstances shall AliThemes be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if AliThemes or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</p>
//                                     <h4 className="color-brand-1 mb-20" id="licensing">Licensing Policy</h4>
//                                     <p className="font-md color-grey-500 mb-30">AliThemes WordPress plugins and themes are released under the GNU General Public License v2 or later. Please refer to licensing policy page for licensing details.</p>
//                                     <h4 className="color-brand-1 mb-20" id="product">Product Compatibility</h4>
//                                     <p className="font-md color-grey-500 mb-30">The products are developed to be compatible with the latest version of WordPress because we always strive to stay up-to-date with the latest version of WordPress. You might experience certain performance or functionality glitches with the products if you use any version prior to that.</p>
//                                     <h4 className="color-brand-1 mb-20" id="delivery">Delivery</h4>
//                                     <p className="font-md color-grey-500 mb-30">Your purchased product(s) information will be emailed to the email address (that you will provide) once we receive your payment. Even though this usually takes a few minutes, it may also take up to 24 hours. You can contact us through our contact page if you do not receive your email after waiting for this time period. You will also have access to your purchased products from your account in AliThemes after logging in.</p>
//                                     <h4 className="color-brand-1 mb-20" id="ownership">Ownership</h4>
//                                     <p className="font-md color-grey-500 mb-30">All the products are the property of AliThemes. So you may not claim ownership (intellectual or exclusive) over any of our products, modified or unmodified. Our products come ‘as is’, without any kind of warranty, either expressed or implied. Under no circumstances can our juridical person be accountable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses originating from the employment of or incapacity to use our products.</p>
//                                     <h4 className="color-brand-1 mb-20" id="browser">Browser Compatibility</h4>
//                                     <p className="font-md color-grey-500 mb-30">We consider it our duty to offer a great experience across most major browsers, which is why our products support the latest modern web browsers including (but not limited to) Firefox, Safari, Chrome &amp; Internet Explorer 9+. However, the performance may vary between different browsers, versions, and operating systems.</p>
//                                     <h4 className="color-brand-1 mb-20" id="updates">Updates</h4>
//                                     <p className="font-md color-grey-500 mb-30">Our themes are constantly updated to be compatible with the latest stable version of WordPress. Please ensure that you always use the most current version of our themes.</p>
//                                     <h4 className="color-brand-1 mb-20" id="support">Theme Support</h4>
//                                     <p className="font-md color-grey-500 mb-30">Please refer to Help and Support Policy page for details.</p>
//                                     <h4 className="color-brand-1 mb-20" id="price">Price Changes</h4>
//                                     <p className="font-md color-grey-500 mb-30">AliThemes reserves the right to modify or suspend (temporarily or permanently) a subscription at any point of time and from time to time with or without any notice.</p>
//                                     <h4 className="color-brand-1 mb-20" id="refund">Refund Policy</h4>
//                                     <p className="font-md color-grey-500 mb-30">Please refer to Refund Policy page for details.</p>
//                                     <h4 className="color-brand-1 mb-20" id="email">Email &amp; Newsletter</h4>
//                                     <p className="font-md color-grey-500 mb-30">AliThemes may occasionally send you emails related to the purchase of product(s) from our company. We may also send you occasional email newsletters relating to AliThemes updates and promotions. We will never sell or release your email to any third party vendors. You may opt out of these emails at any time without penalty.</p>
//                                     <h4 className="color-brand-1 mb-20" id="agreement">License Agreement</h4>
//                                     <p className="font-md color-grey-500 mb-30">By purchasing our product(s), you indicate and consent that you have read and agree to the Terms &amp; Conditions listed and detailed on this page. We reserve the right to change or modify the current Terms and Conditions without prior notice or consent.</p>
//                                     <h4 className="color-brand-1 mb-20" id="severability">Severability</h4>
//                                     <p className="font-md color-grey-500 mb-30">If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <section className="section mt-50">
//                     <div className="container">
//                         <div className="box-newsletter box-newsletter-2">
//                             <div className="row align-items-center">
//                                 <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
//                                     <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
//                                     <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
//                                     <div className="form-newsletter mt-30">
//                                         <form action="#">
//                                             <input type="text" placeholder="Enter you mail .." />
//                                             <button className="btn btn-submit-newsletter" type="submit">
//                                                 <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                                 </svg>
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>

//         </>
//     );
// };

// export default pageTerm;




























import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageTerm = () => {
    return (
        <>
            <Head>
                <title>Terms and condition</title>
            </Head>

            <Layout>
                <div className="section pt-40 content-term">
                    <div className="box-bg-term" />
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li> <Link href="#">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="term-conditions">Terms and condition</Link></li>
                            </ul>
                        </div>
                        <div className="content-main mt-50">
                            <div className="text-center">
                                <h2 className="color-brand-1 mb-10">Terms and Condition</h2>
                                <p className="font-lg color-grey-500">Amet nulla facilisi morbi tempus iaculis urna</p>
                                <div className="box-image-head mt-50 mb-50"> <img className="bd-rd8" src="assets/imgs/page/term/img.png" alt="iori" /></div>
                            </div>
                            <div className="row mt-70">
                                <div className="col-lg-1 col-md-1" />
                                <div className="col-lg-2 col-md-3">
                                    <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                    <ul className="list-terms">
                                        <li> <Link href="#privacy">Limitation of Liability</Link></li>
                                        <li> <Link href="#licensing">Licensing Policy</Link></li>
                                        <li> <Link href="#product">Product Compatibility</Link></li>
                                        <li> <Link href="#delivery">Delivery</Link></li>
                                        <li> <Link href="#ownership">Ownership</Link></li>
                                        <li> <Link href="#browser">Browser Compatibility</Link></li>
                                        <li> <Link href="#updates">Updates</Link></li>
                                        <li> <Link href="#support">Theme Support</Link></li>
                                        <li> <Link href="#price">Price Changes</Link></li>
                                        <li> <Link href="#refund">Refund Policy</Link></li>
                                        <li> <Link href="#email">Email &amp; Newsletter</Link></li>
                                        <li> <Link href="#agreement">License Agreement</Link></li>
                                        <li> <Link href="#severability">Severability</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <h4 className="color-brand-1 mb-20" id="privacy">Privacy Policy</h4>
                                    <p className="font-md color-grey-500 mb-30">
                                        <strong></strong>Last updated: 26/04/2020<br /><br />

                                        This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.<br />

                                        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.<br /><br />

                                        <strong>Information Collection And Use</strong><br />

                                        While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").<br /><br />

                                        <strong>Log Data</strong><br />

                                        Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").<br />

                                        This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.<br /><br />

                                        In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …<br /><br />

                                        <strong>Communications</strong><br />

                                        We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...<br /><br />

                                        <strong>Cookies</strong><br />

                                        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.<br />

                                        Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.<br /><br />

                                        <strong>Security</strong><br />

                                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.<br /><br />

                                        <strong>Changes To This Privacy Policy</strong><br />

                                        This Privacy Policy is effective as of 26/04/2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.<br />

                                        We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.<br />

                                        If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.<br /><br />

                                        <strong>Contact Us</strong><br />

                                        If you have any questions about this Privacy Policy, please contact us.
                                    </p>

                                    <h4 className="color-brand-1 mb-20" id="GDPR">GDPR</h4>
                                    <p className="font-md color-grey-500 mb-30">
                                        Data Processing Addendum<br /><br />

                                        This Data Processing Addendum (this “DPA”) is incorporated into the Terms of Service located at https://dataclap.co/GDPR (the “Agreement”) between the undersigned customer (“Customer”) and DataClap (the “Company”). Capitalized but undefined terms used in this DPA will have the meanings assigned to those terms in the Agreement. In the course of providing the Service to Customer pursuant to the Agreement, the Company may Process Personal Data on behalf of Customer. The Company agrees to comply with the following provisions with respect to its Processing of Customer Personal Data (as such term is defined herein).<br />

                                        <strong></strong>1. DEFINITIONS<br />

                                        “Affiliate” means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity. “Control,” for purposes of this definition, means direct or indirect ownership or control of more than 50% of the voting interests of the subject entity.<br />

                                        “Controller” means the entity which determines the purposes and means of the Processing of Personal Data.<br />

                                        “Customer Data” means any data, information or material originated by Customer that Customer submits, collects or provides in the course of using the Services, including any Customer Personal Data.<br />

                                        “Customer Personal Data” means Personal Data submitted by or for Customer, or at Customer’s direction, to the Company in connection with Customer’s use of the Services, and to which Data Protection Laws apply.<br />

                                        “Data Protection Laws” means all laws and regulations, including laws and regulations of the European Union, the European Economic Area and their member states, and the United Kingdom, applicable to the Processing of Customer Personal Data by the Company under the Agreement.<br />

                                        “Data Subject” means an identified or identifiable natural person about whom the Company Processes Personal Data in connection with the Services.<br />

                                        “DPA Effective Date” means, as applicable, (a) 25 May 2018, if the parties agreed to this DPA prior to or on such date; or (b) the date on which the parties agreed to this DPA, if such date is after 25 May 2018. “GDPR” means the EU General Data Protection Regulation 2016/679.<br />

                                        “Personal Data” means any information which relates to an identified or identifiable natural person, and to which Data Protection Laws apply.<br />

                                        “Personal Data Breach” means a breach of the Company’s security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, Customer Personal Data in the Company’s possession, custody or control.<br />

                                        “Personal Data Breaches” will not include unsuccessful attempts or activities that do not compromise the security of Customer Personal Data, including unsuccessful log-in attempts, pings, port scans, denial of service attacks, and other network attacks on firewalls or networked systems.<br />

                                        “Process/Processing” shall have the same meaning as “processing” as defined in the GDPR. “Processor” means the entity which Processes Personal Data on behalf of the Controller.<br />

                                        “Security and Privacy Measures” appropriate technical and organizational measures to ensure a level of security appropriate to that risk, including, as appropriate, the measures referred to in Article 32(1) of the GDPR, that the Company generally makes available to its customers as updated from time to time, or otherwise made reasonably available by the Company.<br />

                                        “Standard Contractual Clauses” means the agreement executed by and between Customer and the Company and attached to this Addendum as Annex 2 pursuant to European Commission Decision of 5 February 2010 on standard contractual clauses for the transfer of personal data to processors established in third countries under Directive 95/46/EC of the European Parliament and of the Council.<br />

                                        “Sub-processor” means any entity that the Company engages to Process Customer’s Personal Data on behalf of the Company.<br />

                                        <strong>2. PROCESSING OF CUSTOMER PERSONAL DATA</strong>

                                        2.1Roles of the Parties; Purpose. The parties acknowledge and agree that with regard to the Processing of Customer Personal Data, Customer is the Controller, the Company is a Processor and that the Company may engage Sub-processors pursuant to the requirements set forth herein. The subject matter and details of the processing are described in Annex 1.<br />

                                        2.2 Company’s Processing of Personal Data. The Company shall only Process Customer Personal Data on behalf of and in accordance with Customer’s instructions. Customer instructs the Company to Process Customer Personal Data for the following purposes: (i) Processing in accordance with the Agreement; (ii) Processing initiated by Users in their use of the Services; and (iii) Processing to comply with other reasonable instructions provided by Customer (e.g., via email) where such instructions are consistent with the terms of the Agreement and this DPA. This DPA and the Agreement are Customer’s complete and final instructions to the Company for the Processing of Customer Personal Data. Any additional or alternate instructions must be agreed upon separately in writing signed by authorized representatives of both parties.<br />

                                        2.3 Customer’s Processing of Personal Data. Customer shall, in its use of the Services, Process Customer Personal Data in accordance with the requirements of Data Protection Laws. Customer’s instructions for the Processing of Personal Data by the Company shall comply with all Data Protection Laws. Customer shall have sole responsibility for the accuracy, quality, and legality of Customer Personal Data and the means by which Customer acquired Personal Data.<br />

                                        2.4 Security of Processing. The Company will secure Customer Personal Data by implementing the Security and Privacy Measures. The Company will not materially decrease the overall security of the Services during the term of the Agreement.<br />

                                        2.5 Company’s Security Assistance. The Company will (taking into account the nature of the processing of Customer Personal Data and the information available to the Company) provide Customer with reasonable assistance necessary for Customer to comply with its obligations in respect of Customer Personal Data under Data Protection Laws, including Articles 32 to 34 (inclusive) of the GDPR, by (a) implementing the security measures in accordance with Section 2.4 (Security of Processing); and (b) complying with the terms of Section 2.8 (Personal Data Breach Notification).<br />

                                        2.6 Customer’s Security Responsibilities. Customer agrees that, without prejudice to the Company’s obligations under Section 4 (Company Personnel) and Section 2.8 (Personal Data Breach Notification), Customer is solely responsible for its use of the Services, including (a) making appropriate use of the Services to ensure a level of security appropriate to the risk in respect of the Customer Personal Data; (b) securing the account authentication credentials, systems and devices Customer uses to access the Services; and (c) backing up its Customer Personal Data. Customer agrees that, without prejudice to the Company’s obligations under Section 4 (Company Personnel) and Section 2.8 (Personal Data Breach Notification), the Company has no obligation to protect Customer Personal Data that Customer elects to store or transfer outside of the Company’s and its Sub-processors’ systems (for example, offline or on-premises storage).<br />

                                        2.7 Personal Data Breach Notification. The Company will notify Customer without undue delay after becoming aware of a Personal Data Breach. To the extent such Personal Data Breach is caused by a violation of the requirements of this DPA by the Company, the Company shall make reasonable efforts to identify and remediate the cause of such Personal Data Breach. Customer is solely responsible for complying with incident notification laws applicable to Customer and fulfilling any third-party notification obligations related to any Personal Data Breach. The Company’s notification of or response to a Personal Data Breach under this Section 2.8 will not be construed as an acknowledgement by the Company of any fault or liability with respect to the Personal Data Breach. To the extent that the Standard Contractual Clauses apply, Customer agrees that the provisions of this Section 2.8 satisfy the requirements of Clause 5(d)(2).<br />

                                        2.8 Impact Assessments and Consultations. The Company will (taking into account the nature of the processing and the information available to the Company) reasonably assist Customer in complying with its obligations under Data Protection Laws in respect of data protection impact assessments and prior consultation, including, if applicable, Customer’s obligations pursuant to Articles 35 and 36 of the GDPR, by (a) making available for review copies of the the third-party certifications and audits set forth in the Security, Privacy and Architecture Documentation or other documentation describing relevant aspects of the Company’s information security program and the security measures applied in connection therewith; (b) providing the information contained in the Agreement, including this DPA, and (c) providing a description of the processing of Customer Personal Data undertaken by the Company.<br />

                                        2.9 Data Subject Rights. During the term of the Agreement, if the Company receives any request from a Data Subject in relation to Customer Personal Data, the Company will advise the Data Subject to submit their request to Customer and Customer will be responsible for responding to any such request. Upon request from Customer, the Company shall provide commercially reasonable assistance to Customer in relation to the handling of a Data Subject’s request for exercising the Data Subject’s rights laid down in Chapter III of the GDPR, taking into account the nature of the Company’s Processing of Customer Personal Data and solely to the extent Customer is unable to fulfill such requests through the Services. Customer shall be responsible for any costs arising from the Company’s provision of such assistance.<br />

                                        2.10 Deletion of Customer Personal Data. The Company shall delete all Customer Personal Data and copies thereof upon request of Customer or upon termination or expiration of the Agreement, unless otherwise required by the applicable Data Protection Laws, provided, however, that the Company shall delete backup data and operational or system log data in the ordinary course of business. In the event applicable law does not permit the Company to delete the Personal Data, the Company warrants that it shall ensure the confidentiality of the Personal Data and that it shall not use or disclose any Personal Data after termination of the Agreement, except as required by law.<br />

                                        2.11 Data Storage and Processing Facilities. The Company may, subject to Section 2.13 (Company’s Data Transfer Obligations), store and process Customer Personal Data anywhere the Company or its Sub-processors maintains facilities.<br />

                                        2.12 Data Transfers. With respect to Customer Personal Data transferred from the European Economic Area (“EEA”) to outside the EEA in conjunction with Customer’s use of the Services, either directly or via onward transfer, the Company will provide at least the same level of protection for such Customer Personal Data as is required by the Standard Contractual Clauses.<br />

                                        2.13 Audits. Company shall allow Customer and its respective auditors or authorized agents to conduct audits or inspections during the term of the Agreement, which shall include providing reasonable access to the premises, resources and personnel used by Company in connection with the provision of the Services and provide all reasonable assistance in order to assist Customer in exercising its audit rights under this section. The purposes of an audit pursuant to this section include to verify that Company is processing personal data in accordance with its obligations under the DPA and applicable Data Protection Laws. Notwithstanding the foregoing, such audit shall consist solely of: (i) the provision by Comapny of written information (including, without limitation, questionnaires and information about security policies) that may include information relating to subcontractors; and (ii) interviews with Company’s IT personnel. Such audit may be carried out by Customer or an inspection body composed of independent members and in possession of the required professional qualifications bound by a duty of confidentiality. For the avoidance of doubt no access to any part of Company’s IT system, data hosting sites or centers, or infrastructure will be permitted.<br />

                                        2.14 Processing Records. Customer acknowledges that the Company is required under the GDPR to: (a) collect and maintain records of certain information, including the name and contact details of each processor and/or controller on behalf of which the Company is acting and, where applicable, of such processor’s or controller's local representative and data protection officer; and (b) make such information available to the supervisory authorities. Accordingly, if the GDPR applies to the processing of Customer Personal Data, Customer will, where requested, provide such information to the Company, and will ensure that all information provided is kept accurate and up-to-date.<br /><br />

                                        <strong>3. COMPANY PERSONNEL</strong><br />

                                        3.1 Confidentiality. The Company shall ensure that its personnel engaged in the Processing of Customer Personal Data are informed of the confidential nature of the Customer Personal Data, have received appropriate training on their responsibilities and have executed written confidentiality agreements or are under an appropriate statutory obligation of confidentiality. The Company shall ensure that such confidentiality obligations survive the termination of the personnel engagement.<br />

                                        3.2 Limitation of Access. The Company shall ensure that its personnel’s access to Customer Personal Data is limited to those personnel who require such access to perform under the Agreement.<br /><br />

                                        <strong>4. SUB-PROCESSORS</strong><br />

                                        4.1 General Authorization. Customer authorizes the Company to subcontract processing of Customer Personal Data under this DPA to Sub-processors, provided that the Company: (a) provides Customer with such details about the Sub-processor(s) it uses as may be reasonably requested by Customer from time to time; (b) flows down its obligations under this DPA to such Sub-processor, such that the data processing requirements of such Sub-processor with respect to Customer Personal Data are no less onerous than the data processing requirements of the Company as set out in this DPA; and (c) will be fully liable to Customer for the performance of the Sub-processor’s obligations under this DPA if such Sub-processor fails to fulfill its data protection obligations. Information about Subprocessors, including their functions and locations, is available below: Paypal & Stripe: payment processing and billing Google Big Query: aggregates and records notification, engagement, and click count for all users Heroku & Amazon Web Services: used to host our web applications which include our databases.<br />

                                        4.2 New Sub-Processors. The Company will inform Customer of any intended changes concerning the addition or replacement of Sub-processors. If Customer has a reasonable basis to object to the Company’s use of a new Sub-processor, Customer shall notify the Company promptly in writing within ten (10) days after the Company informs Customer of such change. If such objection is not unreasonable, the Company will use reasonable efforts to make available to Customer a change in the affected Services or recommend a commercially reasonable change to Customer’s configuration or use of the affected Services to avoid processing of Customer Personal Data by such new Sub-processor. If the Company is unable to make available such change within a reasonable period of time, which shall not exceed sixty (60) days, Customer may terminate the applicable portion of the Services that cannot be provided by the Company without the use of the objected-to new Sub-processor, by providing written notice to the Company. Customer shall receive a refund of any prepaid fees for the period following the effective date of termination in respect of such terminated Services.<br />

                                        4.3 Sub-Processor Agreements. The parties agree that if copies of the Sub-processor agreements must be sent by the Company to the Customer pursuant to this DPA or applicable Data Protection Laws, such copies may have all commercial information and clauses unrelated to this DPA removed by the Company beforehand; and, that such copies will be provided by the Company only upon reasonable request by Customer.<br />

                                        4.4 Customer Consent to Sub-processing; Access to Sub-processing Agreements. To the extent the Standard Contractual Clauses apply:<br />

                                        4.4.1 Customer consents to the Company’s transfer of Personal Data to Sub-processors as described in Sections 4.1 and 4.2 above, and agrees that Customer’s consent satisfies the requirements of Clauses 5(h) and 11.1; and<br />

                                        4.4.2 Upon Customer’s written request, the Company shall allow Customer to examine the data protection provisions of agreements between the Company and its subcontractors that access Customer Personal Data; provided that such agreements shall remain the Company’s Confidential Information. Customer agrees that this Section 4.4.2 satisfies the requirements of Clause 5(j) of the Standard Contractual Clauses.<br /><br />

                                        <strong>5. GENERAL PROVISIONS</strong><br />

                                        5.1 Conflicting Terms. This DPA applies only between Customer and the Company and does not confer any rights to any third party. To the extent of any conflict or inconsistency between this DPA and the remaining terms of the Agreement, this DPA will govern. This DPA does not replace any additional rights related to the Company’s processing of Customer’s data as set forth in the Agreement.<br />

                                        5.2 Term and Termination. This DPA will become effective (a) 25 May 2018, if the parties agreed to this DPA prior to or on such date; or (b) the date on which the parties agreed to this DPA, if such date is after 25 May 2018. This DPA will terminate simultaneously and automatically upon the termination of the Agreement. The Company may terminate this DPA at any time upon notice to Customer if the Company offers alternative means to Customer that comply with all applicable Data Protection Laws. Customer may terminate this DPA at Customer’s discretion upon the Company’s receipt of Customer’s written notice of termination.<br />

                                        5.3 Liability. The total combined liability of either party and its Affiliates towards the other party and its Affiliates, whether in contract, tort or any other theory of liability, under or in connection with the Agreement, this DPA, combined will be limited to limitations on liability or other liability caps agreed to by the parties in the Agreement.<br />

                                        5.4 Governing Law. To the extent required by the applicable Data Protection Laws, this DPA shall be governed by the laws of the applicable jurisdiction. In all other cases, this DPA shall be governed by the laws of the jurisdiction stated in the Agreement.<br /><br />

                                        <strong>Annex 1</strong><br />

                                        Subject Matter and Details of the Data Processing<br />

                                        Subject Matter The Company’s provision of the Services to Customer.<br />

                                        Duration of the Processing Until deletion of all Customer Personal Data by the Company in accordance with the DPA.<br />

                                        Nature and Purpose of the Processing The Company will process Customer Personal Data for the purposes of providing the Services to Customer in accordance with the DPA and the Agreement.<br />

                                        Categories of Data Data relating to individuals provided to, or collected by, the Company in connection with the Services, by (or at the direction of) Customer.<br />

                                        Data Subjects Data subjects include the individuals about whom the Company Processes data in connection with the Services.<br /><br />

                                        <strong>Annex 2</strong><br />

                                        STANDARD CONTRACTUAL CLAUSES (PROCESSORS)<br />

                                        This Annex 2 is part 2 of 2 and must be accompanied by and signed with part 1 of 2 titled “Data Processing Addendum” to be valid.<br />

                                        For the purposes of Article 26(2) of Directive 95/46/EC for the transfer of personal data to processors established in third countries which do not ensure an adequate level of data protection<br />

                                        Name of the data exporting organization: [INSERT CUSTOMER NAME]<br />

                                        (the data exporter)<br />

                                        And<br />

                                        Name of the data importing organization: DataClap.<br />

                                        (the data importer)<br />

                                        each a ‘party’; together ‘the parties’, HAVE AGREED on the following Contractual Clauses (the Clauses) in order to adduce adequate safeguards with respect to the protection of privacy and fundamental rights and freedoms of individuals for the transfer by the data exporter to the data importer of the personal data specified in Appendix 1.<br /><br />

                                        <strong>Clause 1</strong><br />

                                        Definitions<br />

                                        For the purposes of the Clauses:<br />

                                        (a) ‘personal data’, ‘special categories of data’, ‘process/processing’, ‘controller’, ‘processor’, ‘data subject’ and ‘supervisory authority’ shall have the same meaning as in Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data;<br />

                                        (b) ‘the data exporter’ means the controller who transfers the personal data;<br />

                                        (c) ‘the data importer’ means the processor who agrees to receive from the data exporter personal data intended for processing on his behalf after the transfer in accordance with his instructions and the terms of the Clauses and who is not subject to a third country’s system ensuring adequate protection within the meaning of Article 25(1) of Directive 95/46/EC;<br />

                                        (d) ‘the sub-processor’ means any processor engaged by the data importer or by any other sub-processor of the data importer who agrees to receive from the data importer or from any other sub-processor of the data importer personal data exclusively intended for processing activities to be carried out on behalf of the data exporter after the transfer in accordance with his instructions, the terms of the Clauses and the terms of the written subcontract;<br />

                                        (e) ‘the applicable data protection law’ means the legislation protecting the fundamental rights and freedoms of individuals and, in particular, their right to privacy with respect to the processing of personal data applicable to a data controller in the Member State in which the data exporter is established;<br />

                                        (f) ‘technical and organisational security measures’ means those measures aimed at protecting personal data against accidental or unlawful destruction or accidental loss, alteration, unauthorised disclosure or access, in particular where the processing involves the transmission of data over a network, and against all other unlawful forms of processing.<br /><br />

                                        <strong>Clause 2</strong><br />

                                        Details of the transfer<br />

                                        The details of the transfer and in particular the special categories of personal data where applicable are specified in Appendix 1 which forms an integral part of the Clauses.<br /><br />

                                        <strong>Clause 3</strong><br />

                                        Third-party beneficiary clause<br /><br />

                                        1. The data subject can enforce against the data exporter this Clause, Clause 4(b) to (i), Clause 5(a) to (e), and (g) to (j), Clause 6(1) and (2), Clause 7, Clause 8(2), and Clauses 9 to 12 as third-party beneficiary.<br />

                                        2. The data subject can enforce against the data importer this Clause, Clause 5(a) to (e) and (g), Clause 6, Clause 7, Clause 8(2), and Clauses 9 to 12, in cases where the data exporter has factually disappeared or has ceased to exist in law unless any successor entity has assumed the entire legal obligations of the data exporter by contract or by operation of law, as a result of which it takes on the rights and obligations of the data exporter, in which case the data subject can enforce them against such entity.<br />

                                        3. The data subject can enforce against the sub-processor this Clause, Clause 5(a) to (e) and (g), Clause 6, Clause 7, Clause 8(2), and Clauses 9 to 12, in cases where both the data exporter and the data importer have factually disappeared or ceased to exist in law or have become insolvent, unless any successor entity has assumed the entire legal obligations of the data exporter by contract or by operation of law as a result of which it takes on the rights and obligations of the data exporter, in which case the data subject can enforce them against such entity. Such third-party liability of the subprocessor shall be limited to its own processing operations under the Clauses.<br />

                                        4. The parties do not object to a data subject being represented by an association or other body if the data subject so expressly wishes and if permitted by national law.<br /><br />

                                        <strong>Clause 4</strong><br />

                                        Obligations of the data exporter<br />

                                        The data exporter agrees and warrants:<br />

                                        (a) that the processing, including the transfer itself, of the personal data has been and will continue to be carried out in accordance with the relevant provisions of the applicable data protection law (and, where applicable, has been notified to the relevant authorities of the Member State where the data exporter is established) and does not violate the relevant provisions of that State;<br />

                                        (b) that it has instructed and throughout the duration of the personal data-processing services will instruct the data importer to process the personal data transferred only on the data exporter’s behalf and in accordance with the applicable data protection law and the Clauses;<br />

                                        (c) that the data importer will provide sufficient guarantees in respect of the technical and organisational security measures specified in Appendix 2 to this contract;<br />

                                        (d) that after assessment of the requirements of the applicable data protection law, the security measures are appropriate to protect personal data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access, in particular where the processing involves the transmission of data over a network, and against all other unlawful forms of processing, and that these measures ensure a level of security appropriate to the risks presented by the processing and the nature of the data to be protected having regard to the state of the art and the cost of their implementation;<br />

                                        (e) that it will ensure compliance with the security measures;<br />

                                        (f) that, if the transfer involves special categories of data, the data subject has been informed or will be informed before, or as soon as possible after, the transfer that its data could be transmitted to a third country not providing adequate protection within the meaning of Directive 95/46/EC;<br />

                                        (g) to forward any notification received from the data importer or any sub-processor pursuant to Clause 5(b) and Clause 8(3) to the data protection supervisory authority if the data exporter decides to continue the transfer or to lift the suspension;<br />

                                        (h) to make available to the data subjects upon request a copy of the Clauses, with the exception of Appendix 2, and a summary description of the security measures, as well as a copy of any contract for sub-processing services which has to be made in accordance with the Clauses, unless the Clauses or the contract contain commercial information, in which case it may remove such commercial information;<br />

                                        (i) that, in the event of sub-processing, the processing activity is carried out in accordance with Clause 11 by a subprocessor providing at least the same level of protection for the personal data and the rights of data subject as the data importer under the Clauses; and<br />

                                        (j) that it will ensure compliance with Clause 4(a) to (i).<br /><br />

                                        <strong>Clause 5</strong><br />

                                        Obligations of the data importer<br />

                                        The data importer agrees and warrants:<br />

                                        (a) to process the personal data only on behalf of the data exporter and in compliance with its instructions and the Clauses; if it cannot provide such compliance for whatever reasons, it agrees to inform promptly the data exporter of its inability to comply, in which case the data exporter is entitled to suspend the transfer of data and/or terminate the contract;<br />

                                        (b) that it has no reason to believe that the legislation applicable to it prevents it from fulfilling the instructions received from the data exporter and its obligations under the contract and that in the event of a change in this legislation which is likely to have a substantial adverse effect on the warranties and obligations provided by the Clauses, it will promptly notify the change to the data exporter as soon as it is aware, in which case the data exporter is entitled to suspend the transfer of data and/or terminate the contract;<br />

                                        (c) that it has implemented the technical and organisational security measures specified in Appendix 2 before processing the personal data transferred;<br />

                                        (d) that it will promptly notify the data exporter about:<br />

                                        (i) any legally binding request for disclosure of the personal data by a law enforcement authority unless otherwise prohibited, such as a prohibition under criminal law to preserve the confidentiality of a law enforcement investigation;<br />

                                        (ii) any accidental or unauthorised access; and<br />

                                        (iii) any request received directly from the data subjects without responding to that request, unless it has been otherwise authorised to do so;<br />

                                        (e) to deal promptly and properly with all inquiries from the data exporter relating to its processing of the personal data subject to the transfer and to abide by the advice of the supervisory authority with regard to the processing of the data transferred;<br />

                                        (f) at the request of the data exporter to submit its data-processing facilities for audit of the processing activities covered by the Clauses which shall be carried out by the data exporter or an inspection body composed of independent members and in possession of the required professional qualifications bound by a duty of confidentiality, selected by the data exporter, where applicable, in agreement with the supervisory authority;<br />

                                        (g) to make available to the data subject upon request a copy of the Clauses, or any existing contract for sub-processing, unless the Clauses or contract contain commercial information, in which case it may remove such commercial information, with the exception of Appendix 2 which shall be replaced by a summary description of the security measures in those cases where the data subject is unable to obtain a copy from the data exporter;<br />

                                        (h) that, in the event of sub-processing, it has previously informed the data exporter and obtained its prior written consent;<br />

                                        (i) that the processing services by the sub-processor will be carried out in accordance with Clause 11;<br />

                                        (j) to send promptly a copy of any sub-processor agreement it concludes under the Clauses to the data exporter. <br />
                                        
                                        <strong>Clause 6</strong><br /><br />

                                        Liability<br />

                                        1. The parties agree that any data subject, who has suffered damage as a result of any breach of the obligations referred to in Clause 3 or in Clause 11 by any party or sub-processor is entitled to receive compensation from the data exporter for the damage suffered.<br />

                                        2. If a data subject is not able to bring a claim for compensation in accordance with paragraph 1 against the data exporter, arising out of a breach by the data importer or his sub-processor of any of their obligations referred to in Clause 3 or in Clause 11, because the data exporter has factually disappeared or ceased to exist in law or has become insolvent, the data importer agrees that the data subject may issue a claim against the data importer as if it were the data exporter, unless any successor entity has assumed the entire legal obligations of the data exporter by contract of by operation of law, in which case the data subject can enforce its rights against such entity. The data importer may not rely on a breach by a sub-processor of its obligations in order to avoid its own liabilities.<br />

                                        3. If a data subject is not able to bring a claim against the data exporter or the data importer referred to in paragraphs 1 and 2, arising out of a breach by the sub-processor of any of their obligations referred to in Clause 3 or in Clause 11 because both the data exporter and the data importer have factually disappeared or ceased to exist in law or have become insolvent, the sub-processor agrees that the data subject may issue a claim against the data sub-processor with regard to its own processing operations under the Clauses as if it were the data exporter or the data importer, unless any successor entity has assumed the entire legal obligations of the data exporter or data importer by contract or by operation of law, in which case the data subject can enforce its rights against such entity. The liability of the sub-processor shall be limited to its own processing operations under the Clauses.<br /><br />

                                        <strong>Clause 7</strong>

                                        Mediation and jurisdiction

                                        1. The data importer agrees that if the data subject invokes against it third-party beneficiary rights and/or claims compensation for damages under the Clauses, the data importer will accept the decision of the data subject: (a) to refer the dispute to mediation, by an independent person or, where applicable, by the supervisory authority; (b) to refer the dispute to the courts in the Member State in which the data exporter is established.

                                        2. The parties agree that the choice made by the data subject will not prejudice its substantive or procedural rights to seek remedies in accordance with other provisions of national or international law.

                                        <strong>Clause 8</strong>

                                        Cooperation with supervisory authorities

                                        1. The data exporter agrees to deposit a copy of this contract with the supervisory authority if it so requests or if such deposit is required under the applicable data protection law.

                                        2. The parties agree that the supervisory authority has the right to conduct an audit of the data importer, and of any sub-processor, which has the same scope and is subject to the same conditions as would apply to an audit of the data exporter under the applicable data protection law.

                                        3. The data importer shall promptly inform the data exporter about the existence of legislation applicable to it or any sub-processor preventing the conduct of an audit of the data importer, or any sub-processor, pursuant to paragraph 2. In such a case the data exporter shall be entitled to take the measures foreseen in Clause 5(b).

                                        <strong>Clause 9</strong>

                                        Governing law

                                        The Clauses shall be governed by the law of the Member State in which the data exporter is established.

                                        <strong></strong>

                                        Variation of the contract

                                        The parties undertake not to vary or modify the Clauses. This does not preclude the parties from adding clauses on business related issues where required as long as they do not contradict the Clause.

                                        <strong>Clause 11</strong>

                                        Sub-processing

                                        1. The data importer shall not subcontract any of its processing operations performed on behalf of the data exporter under the Clauses without the prior written consent of the data exporter. Where the data importer subcontracts its obligations under the Clauses, with the consent of the data exporter, it shall do so only by way of a written agreement with the sub-processor which imposes the same obligations on the sub-processor as are imposed on the data importer under the Clauses. Where the sub-processor fails to fulfil its data protection obligations under such written agreement the data importer shall remain fully liable to the data exporter for the performance of the sub-processor’s obligations under such agreement.

                                        2. The prior written contract between the data importer and the sub-processor shall also provide for a third-party beneficiary clause as laid down in Clause 3 for cases where the data subject is not able to bring the claim for compensation referred to in paragraph 1 of Clause 6 against the data exporter or the data importer because they have factually disappeared or have ceased to exist in law or have become insolvent and no successor entity has assumed the entire legal obligations of the data exporter or data importer by contract or by operation of law. Such third-party liability of the sub-processor shall be limited to its own processing operations under the Clauses.

                                        3. The provisions relating to data protection aspects for sub-processing of the contract referred to in paragraph 1 shall be governed by the law of the Member State in which the data exporter is established, namely

                                        4. The data exporter shall keep a list of sub-processing agreements concluded under the Clauses and notified by the data importer pursuant to Clause 5(j), which shall be updated at least once a year. The list shall be available to the data exporter’s data protection supervisory authority.

                                        <strong>Clause 12</strong>

                                        Obligation after the termination of personal data-processing services

                                        1. The parties agree that on the termination of the provision of data-processing services, the data importer and the sub-processor shall, at the choice of the data exporter, return all the personal data transferred and the copies thereof to the data exporter or shall destroy all the personal data and certify to the data exporter that it has done so, unless legislation imposed upon the data importer prevents it from returning or destroying all or part of the personal data transferred. In that case, the data importer warrants that it will guarantee the confidentiality of the personal data transferred and will not actively process the personal data transferred anymore.

                                        2. The data importer and the sub-processor warrant that upon request of the data exporter and/or of the supervisory authority, it will submit its data-processing facilities for an audit of the measures referred to in paragraph 1.

                                        <strong>Appendix 1</strong>

                                        to the Standard Contractual Clauses

                                        This Appendix forms part of the Clauses and must be completed and signed by the parties. The Member States may complete or specify, according to their national procedures, any additional necessary information to be contained in this Appendix.

                                        Data exporter

                                        The data exporter is the Customer under the Agreement and obtains the Services in accordance with the terms of the Agreement. The data exporter submits Customer Data for use in the provision of the Services

                                        Data importer

                                        The data importer is a legal entity that provides services through which data exporter can conduct marketing and related advertising activities on the Internet.

                                        Data subjects

                                        The personal data transferred concern the following categories of data subjects:

                                        ☒ Employees of the data exporter and any affiliate entities.

                                        ☒ Customers of the data exporter and any affiliate entities.

                                        ☒ Consumers

                                        Categories of data

                                        The personal data transferred concern the following categories of data:

                                        ☒ The personal data of data exporter’s and any affiliate entities’ employees generated in the normal course of business, including but not limited to: name and email address.

                                        ☒ The personal data of data exporter’s and its affiliate entities’ customers generated in the normal course of business, including but not limited to: name and email address.

                                        ☒ Browsing data

                                        Special categories of data (if appropriate)

                                        None, other than to the extent incorporated into the categories of data set forth above, which will be determined solely by the employees, customers and consumers set forth above.

                                        Processing operations

                                        The personal data transferred will be subject to the following basic processing activities:

                                        Data Importer provides services through which Data Exporter provides services through which data exporter can conduct marketing and related advertising activities on the Internet.
                                    </p> 

                                    <h4 className="color-brand-1 mb-20" id="delivery">Data Security</h4>

                                    <p className="font-md color-grey-500 mb-30">
                                        Confidentiality and Non Disclosure Agreements (NDAs)

                                        Our policies ensure confidenality of Client Data is maintained at all times:

                                        To ensure the security and confidenality of informaon, a Confidenality Agreement is executed with each client and all private concerns are respected.
                                        We also sign appropriate NDAs with each individual Employee working on our Client's Project to ensure the client interests is protected adequately.
                                        Employees cannot disclose any proprietary informaon directly or indirectly to anyone outside the project team or company, or use, copy, publish, summarize or remove such informaon from the company premises.

                                        Employee background checks

                                        Thorough background checks (including criminal checks) are performed for all employees before on-boarding.
                                        Data access is restricted only to employees whose background checks have been successfully completed.
                                        On-going background checks and diligence are also performed for exisng employees.

                                        Access control

                                        Entrance in producon area is restricted via Biometric Access.
                                        Producon area is under 24x7 CCTV surveillance.
                                        Limited, applicable applicaon access provided as per operaons.
                                        CDs, DVDs, pen drive, disk drive, or any other storage devices are not allowed in the producon areas without prior permission from authorized management team members.
                                        Well defined passwords & access control for authorized internal persons.

                                        Data Security

                                        The Data received from the client during the me of processing is via approved and secure channels only.
                                        Data sharing protocols are complied with, restricng data visibility to authorized personnel only, which is further tracked to ensure safe disposal of data aer necessitated usage. All such data transfers are logged and recorded for auding and compliance purposes.
                                        No local storage provided, all data are stored at central storage.
                                        Regular audits of the central storage server.

                                        Email Security

                                        Agents are given organizaon email facility only when required.
                                        No mails can be sent outside the organizaon from the given mail facility (except pre- approved domains).

                                        Internet access

                                        Restricted access to internet sites is allowed only if it is a process requirement.
                                        Connuous monitoring of web traffic and disciplinary acons taken for violaons.
                                        High level of an-spam, an-virus and an-spywares ensure that the data is not hacked or leaked outside the organizaon.
                                        Limited access to the network through login IDs and password protecon.
                                        Professional firewall system restricts the users to surf or access unauthorized sites.

                                        Awareness programs

                                        All employees are trained on the security measures which are enforced on every individual across the organizaonal hierarchy. Regular update trainings and security quizzes are conducted to assess employee understanding.
                                        Regular awareness program are conducted on data protecon and its legality.
                                        Awareness of informaon security through class room sessions, intranet sessions, posters, mailers etc.

                                        Tolerance policy

                                        DataClap mandates security adherence at all mes by all employees and has a zero percent tolerance towards any unethical pracce. All such issues are dealt with in the strictest manner to ensure minimum impact to the service delivery.
                                    </p>
                                    <h4 className="color-brand-1 mb-20" id="ownership">Ownership</h4>
                                    <p className="font-md color-grey-500 mb-30">All the products are the property of AliThemes. So you may not claim ownership (intellectual or exclusive) over any of our products, modified or unmodified. Our products come ‘as is’, without any kind of warranty, either expressed or implied. Under no circumstances can our juridical person be accountable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses originating from the employment of or incapacity to use our products.</p>
                                    <h4 className="color-brand-1 mb-20" id="browser">Browser Compatibility</h4>
                                    <p className="font-md color-grey-500 mb-30">We consider it our duty to offer a great experience across most major browsers, which is why our products support the latest modern web browsers including (but not limited to) Firefox, Safari, Chrome &amp; Internet Explorer 9+. However, the performance may vary between different browsers, versions, and operating systems.</p>
                                    <h4 className="color-brand-1 mb-20" id="updates">Updates</h4>
                                    <p className="font-md color-grey-500 mb-30">Our themes are constantly updated to be compatible with the latest stable version of WordPress. Please ensure that you always use the most current version of our themes.</p>
                                    <h4 className="color-brand-1 mb-20" id="support">Theme Support</h4>
                                    <p className="font-md color-grey-500 mb-30">Please refer to Help and Support Policy page for details.</p>
                                    <h4 className="color-brand-1 mb-20" id="price">Price Changes</h4>
                                    <p className="font-md color-grey-500 mb-30">AliThemes reserves the right to modify or suspend (temporarily or permanently) a subscription at any point of time and from time to time with or without any notice.</p>
                                    <h4 className="color-brand-1 mb-20" id="refund">Refund Policy</h4>
                                    <p className="font-md color-grey-500 mb-30">Please refer to Refund Policy page for details.</p>
                                    <h4 className="color-brand-1 mb-20" id="email">Email &amp; Newsletter</h4>
                                    <p className="font-md color-grey-500 mb-30">AliThemes may occasionally send you emails related to the purchase of product(s) from our company. We may also send you occasional email newsletters relating to AliThemes updates and promotions. We will never sell or release your email to any third party vendors. You may opt out of these emails at any time without penalty.</p>
                                    <h4 className="color-brand-1 mb-20" id="agreement">License Agreement</h4>
                                    <p className="font-md color-grey-500 mb-30">By purchasing our product(s), you indicate and consent that you have read and agree to the Terms &amp; Conditions listed and detailed on this page. We reserve the right to change or modify the current Terms and Conditions without prior notice or consent.</p>
                                    <h4 className="color-brand-1 mb-20" id="severability">Severability</h4>
                                    <p className="font-md color-grey-500 mb-30">If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default pageTerm;